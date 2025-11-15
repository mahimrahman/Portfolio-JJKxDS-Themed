import { useRef, useEffect, memo } from 'react';

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
  colorIndex: number;
}

const SmokeBackground = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<SmokeParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastFrameTimeRef = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);

  // Theme colors matching the portfolio - pre-calculated
  const smokeColors = [
    [127, 0, 255],   // domain-violet
    [58, 134, 255],  // cursed-blue
    [255, 78, 0],    // rengoku-flame
    [255, 208, 0],   // zenitsu-lightning
  ];

  // Optimized: Use Intersection Observer to pause when not visible
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting;
      },
      { threshold: 0 }
    );

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    updateDimensions();
    const resizeHandler = () => updateDimensions();
    window.addEventListener('resize', resizeHandler, { passive: true });

    // Initialize particles - reduced count for performance
    const initParticles = () => {
      const particles: SmokeParticle[] = [];
      // Further reduced particle count for faster loading
      const particleCount = Math.min(10, Math.floor((canvas.width * canvas.height) / 100000));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 200,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.4 - 0.2,
          life: Math.random() * 100,
          maxLife: 200 + Math.random() * 200,
          size: 80 + Math.random() * 120,
          opacity: 0,
          colorIndex: Math.floor(Math.random() * smokeColors.length),
        });
      }
      particlesRef.current = particles;
    };

    initParticles();

    // Throttled mouse tracking for performance
    let mouseUpdateScheduled = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseUpdateScheduled) {
        requestAnimationFrame(() => {
          mouseRef.current = { x: e.clientX, y: e.clientY };
          mouseUpdateScheduled = false;
        });
        mouseUpdateScheduled = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Optimized animation loop with frame skipping
    const animate = (currentTime: number) => {
      // Skip frames if not visible or too fast
      if (!isVisibleRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = currentTime - lastFrameTimeRef.current;
      // Target ~20fps for better performance on slower devices
      if (deltaTime < 50) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      lastFrameTimeRef.current = currentTime;

      // Clear with optimized method
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Batch operations
      ctx.save();
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Simplified mouse influence (less calculations)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 250000) { // Only calculate if close enough (500px)
          const distance = Math.sqrt(distSq);
          const influence = Math.min(30 / (distance + 1), 0.2);
          p.vx += (dx / distance) * influence * 0.008;
          p.vy += (dy / distance) * influence * 0.008;
        }

        // Reduced turbulence for performance
        p.vx += (Math.random() - 0.5) * 0.015;
        p.vy += (Math.random() - 0.5) * 0.015;

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.life += 1;

        // Calculate opacity based on life
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.2) {
          p.opacity = lifeRatio / 0.2 * 0.12;
        } else if (lifeRatio > 0.8) {
          p.opacity = (1 - lifeRatio) / 0.2 * 0.12;
        } else {
          p.opacity = 0.12;
        }

        // Respawn particle when it dies or goes off screen
        if (p.life >= p.maxLife || p.y < -p.size || p.x < -p.size || p.x > canvas.width + p.size) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + Math.random() * 200;
          p.vx = (Math.random() - 0.5) * 0.4;
          p.vy = -Math.random() * 0.4 - 0.2;
          p.life = 0;
          p.maxLife = 200 + Math.random() * 200;
          p.size = 80 + Math.random() * 120;
          p.opacity = 0;
          p.colorIndex = Math.floor(Math.random() * smokeColors.length);
        }

        // Optimized drawing - reuse gradient creation
        const color = smokeColors[p.colorIndex];
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size
        );
        const baseOpacity = p.opacity;
        gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${baseOpacity})`);
        gradient.addColorStop(0.3, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${baseOpacity * 0.6})`);
        gradient.addColorStop(0.6, `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${baseOpacity * 0.3})`);
        gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{
        mixBlendMode: 'screen',
        opacity: 0.4,
        willChange: 'transform',
      }}
    />
  );
});

SmokeBackground.displayName = 'SmokeBackground';

export default SmokeBackground;
