import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import { ExperienceNode, ExperienceLink, Region, GraphData } from '../../types/experience';

interface Props {
  data: GraphData;
  activeRegion: Region;
  onNodeSelect: (node: ExperienceNode | null) => void;
  selectedNodeId: string | null;
}

const ConstellationGraph: React.FC<Props> = ({ data, activeRegion, onNodeSelect, selectedNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Clone data to avoid mutation issues
  const nodes = useMemo(() => data.nodes.map(d => ({ ...d })), [data]);
  const links = useMemo(() => data.links.map(d => ({ ...d })), [data]);

  // Keep the graph sized to its container (not the window).
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(0, Math.floor(rect.width));
      const height = Math.max(0, Math.floor(rect.height));
      setDimensions(prev => (prev.width === width && prev.height === height ? prev : { width, height }));
    };

    const ro = new ResizeObserver(() => update());
    ro.observe(container);
    update();

    return () => {
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = dimensions.width;
    const height = dimensions.height;
    if (width <= 0 || height <= 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // --- Definitions for Gradients & Filters ---
    const defs = svg.append("defs");

    // Radial Gradient for Star Glow
    const starGradient = defs.append("radialGradient")
      .attr("id", "star-glow")
      .attr("cx", "50%")
      .attr("cy", "50%")
      .attr("r", "50%");

    starGradient.append("stop").attr("offset", "0%").attr("stop-color", "#ffffff").attr("stop-opacity", 1);
    starGradient.append("stop").attr("offset", "40%").attr("stop-color", "#ffffff").attr("stop-opacity", 0.8);
    starGradient.append("stop").attr("offset", "100%").attr("stop-color", "rgba(255,255,255,0)").attr("stop-opacity", 0);

    // Filter for extra bloom
    const filter = defs.append("filter")
      .attr("id", "bloom")
      .attr("x", "-100%")
      .attr("y", "-100%")
      .attr("width", "300%")
      .attr("height", "300%");
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // --- Simulation Setup ---
    // Increased decay to make it settle faster into a "map"
    // Center positioned in middle area
    const centerY = height * 0.5;
    const boundsPadding = 60;

    const simulation = d3.forceSimulation<ExperienceNode>(nodes)
      .force("link", d3.forceLink<ExperienceNode, ExperienceLink>(links).id(d => d.id).distance(100)) // Tighter links for bigger view
      .force("charge", d3.forceManyBody().strength(-250)) // Less repulsion for bigger view
      .force("center", d3.forceCenter(width / 2, centerY))
      .force("collide", d3.forceCollide().radius(35)) // Smaller collision for tighter grouping
      .alphaDecay(0.05); // Settle faster

    // --- Draw Elements ---

    // 1. Links (Constellation Lines)
    const link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .attr("stroke-width", 0.8) // Thinner lines
      .attr("stroke", "#94a3b8") // Slate-400
      .attr("opacity", 0.2); // Faint initially

    // 2. Nodes (Stars) group
    const nodeGroup = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodes)
      .enter().append("g")
      .style("cursor", "pointer")
      .call(d3.drag<SVGGElement, ExperienceNode>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      )
      .on("click", (event, d) => {
        event.stopPropagation();
        // Double check in case pointer-events fails (though it shouldn't)
        if (activeRegion !== Region.ALL && d.region !== activeRegion) return;
        onNodeSelect(d);
      })
      .on("mouseover", function(_event, d) {
        // Only allow hover effects if active
        if (activeRegion !== Region.ALL && d.region !== activeRegion) return;

        // Highlight connected links
        link.transition().duration(300)
          .attr("opacity", l => (l.source === d || l.target === d) ? 0.8 : 0.1)
          .attr("stroke", l => (l.source === d || l.target === d) ? '#ffffff' : '#94a3b8');

        // Scale up star
        d3.select(this).transition().duration(300).attr("transform", `translate(${d.x},${d.y}) scale(1.3)`);
      })
      .on("mouseout", function(_event, d) {
        // Reset links
        link.transition().duration(300).attr("opacity", 0.2).attr("stroke", "#94a3b8");
        // Reset star scale
        d3.select(this).transition().duration(300).attr("transform", `translate(${d.x},${d.y}) scale(1)`);
      });

    // 3. Star Visuals - Increased sizes for bigger default view

    // Outer Glow (Colored Aura)
    nodeGroup.append("circle")
      .attr("r", d => d.type === 'work' ? 25 : 15) // Increased from 20/12
      .attr("fill", "url(#star-glow)")
      .attr("opacity", 0.4);

    // The Star Core (White hot center)
    nodeGroup.append("circle")
      .attr("r", d => d.type === 'work' ? 5 : 4) // Increased from 4/3
      .attr("fill", "#fff")
      .style("filter", "url(#bloom)");

    // Lens Flare / Cross for Major Nodes (Work/Leadership)
    nodeGroup.filter(d => d.type !== 'education').append("path")
      .attr("d", "M -10,0 L 10,0 M 0,-10 L 0,10") // Increased from -8/8
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .attr("class", "star-flare")
      .attr("opacity", 0.8);

    // Region Color Ring (Subtle indicator)
    nodeGroup.append("circle")
      .attr("r", d => d.type === 'work' ? 10 : 7) // Increased from 8/6
      .attr("fill", "transparent")
      .attr("stroke", d => d.color || '#fff')
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.8)
      .attr("stroke-dasharray", "2,2"); // Tech feel

    // Label Group
    const labelGroup = nodeGroup.append("g")
      .attr("class", "labels transition-opacity duration-300")
      .attr("transform", "translate(0, 18)"); // Adjusted for bigger nodes

    // Role Label
    labelGroup.append("text")
      .text(d => d.role)
      .attr("text-anchor", "middle")
      .attr("y", 5)
      .attr("class", "text-[11px] font-display font-bold fill-white pointer-events-none") // Increased from 10px
      .style("text-shadow", "0 2px 4px rgba(0,0,0,0.9)");

    // Simulation Tick
    simulation.on("tick", () => {
      // Keep nodes within the visible rectangle so the constellation can't drift out of bounds.
      for (const n of nodes) {
        if (n.x == null || n.y == null) continue;
        n.x = Math.max(boundsPadding, Math.min(width - boundsPadding, n.x));
        n.y = Math.max(boundsPadding, Math.min(height - boundsPadding, n.y));
      }

      link
        .attr("x1", d => (d.source as ExperienceNode).x!)
        .attr("y1", d => (d.source as ExperienceNode).y!)
        .attr("x2", d => (d.target as ExperienceNode).x!)
        .attr("y2", d => (d.target as ExperienceNode).y!);

      nodeGroup
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Filtering Effect
    const updateActiveState = () => {
      const isVisible = (d: ExperienceNode) => activeRegion === Region.ALL || d.region === activeRegion;

      // Fade out inactive nodes
      nodeGroup.transition().duration(500)
        .attr("opacity", d => isVisible(d) ? 1 : 0.1);

      // Disable pointer events (clicks/hover) on inactive nodes
      nodeGroup
        .style("pointer-events", d => isVisible(d) ? "all" : "none")
        .style("cursor", d => isVisible(d) ? "pointer" : "default");

      // Hide links if not in region
      link.transition().duration(500)
        .attr("opacity", d => {
          const s = d.source as ExperienceNode;
          const t = d.target as ExperienceNode;
          const visible = (activeRegion === Region.ALL || (s.region === activeRegion && t.region === activeRegion));
          return visible ? 0.2 : 0.02;
        });
    };

    updateActiveState();

    // Drag Interactions
    function dragstarted(event: any, d: ExperienceNode) {
      if (activeRegion !== Region.ALL && d.region !== activeRegion) return;
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: ExperienceNode) {
      if (activeRegion !== Region.ALL && d.region !== activeRegion) return;
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: ExperienceNode) {
      if (activeRegion !== Region.ALL && d.region !== activeRegion) return;
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };

  }, [activeRegion, dimensions.height, dimensions.width, links, nodes, onNodeSelect, selectedNodeId]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full" />
    </div>
  );
};

export default ConstellationGraph;
