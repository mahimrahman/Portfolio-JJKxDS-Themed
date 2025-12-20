import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, GitFork, Calendar, Code, Globe, Github, Zap, Layers, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmokeBackground from './SmokeBackground';
import SectionMerge from './SectionMerge';

// GitHub Repository interface
interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size: number;
  default_branch: string;
  visibility: string;
  archived: boolean;
  disabled: boolean;
}

// Muted, professional language colors with theme consistency
const languageColors: { [key: string]: { bg: string; text: string; glow: string } } = {
  JavaScript: { bg: 'from-amber-900/30 to-amber-800/20', text: 'text-amber-400', glow: 'shadow-amber-500/20' },
  TypeScript: { bg: 'from-blue-900/30 to-blue-800/20', text: 'text-blue-400', glow: 'shadow-blue-500/20' },
  Python: { bg: 'from-emerald-900/30 to-emerald-800/20', text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  Java: { bg: 'from-orange-900/30 to-orange-800/20', text: 'text-orange-400', glow: 'shadow-orange-500/20' },
  HTML: { bg: 'from-rose-900/30 to-rose-800/20', text: 'text-rose-400', glow: 'shadow-rose-500/20' },
  CSS: { bg: 'from-sky-900/30 to-sky-800/20', text: 'text-sky-400', glow: 'shadow-sky-500/20' },
  'C++': { bg: 'from-indigo-900/30 to-indigo-800/20', text: 'text-indigo-400', glow: 'shadow-indigo-500/20' },
  'C#': { bg: 'from-violet-900/30 to-violet-800/20', text: 'text-violet-400', glow: 'shadow-violet-500/20' },
  PHP: { bg: 'from-purple-900/30 to-purple-800/20', text: 'text-purple-400', glow: 'shadow-purple-500/20' },
  Ruby: { bg: 'from-red-900/30 to-red-800/20', text: 'text-red-400', glow: 'shadow-red-500/20' },
  Go: { bg: 'from-cyan-900/30 to-cyan-800/20', text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  Shell: { bg: 'from-lime-900/30 to-lime-800/20', text: 'text-lime-400', glow: 'shadow-lime-500/20' },
  Vue: { bg: 'from-teal-900/30 to-teal-800/20', text: 'text-teal-400', glow: 'shadow-teal-500/20' },
  default: { bg: 'from-slate-800/30 to-slate-700/20', text: 'text-slate-400', glow: 'shadow-slate-500/20' }
};

// Animated hexagon SVG for decoration
const HexagonDecor = memo(({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 100 100"
    className={className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.15, scale: 1 }}
    transition={{ duration: 1.5, delay }}
  >
    <motion.polygon
      points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: delay + 0.5, ease: "easeInOut" }}
    />
  </motion.svg>
));

HexagonDecor.displayName = 'HexagonDecor';

// Atmospheric background with cursed energy aesthetic
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
    {/* Cursed energy gradient orbs */}
    <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.08] bg-gradient-to-br from-violet-600 to-purple-900" />
    <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.06] bg-gradient-to-br from-blue-600 to-indigo-900" />
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-[0.04] bg-gradient-to-br from-rose-600 to-orange-900" />
    
    {/* Floating hexagons */}
    <HexagonDecor className="absolute top-[15%] right-[15%] w-32 h-32 text-violet-500" delay={0} />
    <HexagonDecor className="absolute bottom-[20%] left-[10%] w-24 h-24 text-blue-500" delay={0.3} />
    <HexagonDecor className="absolute top-[60%] right-[8%] w-20 h-20 text-rose-500" delay={0.6} />
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

// Stats card component
const StatCard = memo(({ icon, value, label, delay }: { icon: React.ReactNode; value: number; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative group"
  >
    <div className="relative bg-gradient-to-br from-ghost-black/80 to-deep-charcoal/60 backdrop-blur-sm rounded-xl border border-white/[0.08] p-5 transition-all duration-300 hover:border-white/20 overflow-hidden">
      {/* Subtle animated border glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 via-transparent to-blue-500/10" />
      
      <div className="relative z-10 flex items-center gap-4">
        <div className="p-2.5 rounded-lg bg-gradient-to-br from-violet-500/20 to-blue-500/20 border border-white/10">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-snow-white">{value}</div>
          <div className="text-xs text-ash-gray uppercase tracking-wider">{label}</div>
        </div>
      </div>
    </div>
  </motion.div>
));

StatCard.displayName = 'StatCard';

const Development = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [hoveredRepo, setHoveredRepo] = useState<number | null>(null);

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/mahimrahman/repos?sort=updated&per_page=100');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data: GitHubRepo[] = await response.json();
        
        // Filter out archived and disabled repos, sort by updated date
        const activeRepos = data
          .filter(repo => !repo.archived && !repo.disabled && repo.visibility === 'public')
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        
        setRepos(activeRepos);
      } catch (err) {
        console.error('Error fetching GitHub repos:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Get unique languages from repos
  const languages = Array.from(new Set(repos.map(repo => repo.language).filter(Boolean))) as string[];

  // Filter repositories based on selected language
  const filteredRepos = selectedLanguage === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === selectedLanguage);

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  // Get language styling
  const getLanguageStyle = (language: string | null) => {
    if (!language) return languageColors.default;
    return languageColors[language] || languageColors.default;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black"></div>
        <div className="absolute inset-0 z-[5] pointer-events-none opacity-40">
          <SmokeBackground />
        </div>
        <BackgroundEffects />
        <div className="relative z-30 flex flex-col items-center gap-6">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                  fill="none"
                  stroke="url(#loadingGradient)"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
                <defs>
                  <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Code size={20} className="text-violet-400" />
            </motion.div>
          </div>
          <span className="text-ash-gray text-sm font-medium tracking-widest uppercase">
            Fetching Repositories
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black"></div>
        <div className="absolute inset-0 z-[5] pointer-events-none opacity-40">
          <SmokeBackground />
        </div>
        <BackgroundEffects />
        <div className="relative z-30 flex flex-col items-center max-w-md text-center px-6">
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20">
            <Zap size={36} className="text-rose-400" />
          </div>
          <h2 className="text-2xl font-bold text-snow-white mb-3">
            Connection Failed
          </h2>
          <p className="text-ash-gray text-sm mb-8 leading-relaxed">{error}</p>
          <motion.button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-white/10 text-snow-white rounded-xl text-sm font-medium hover:border-white/20 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Retry Connection
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Section Merge Overlays */}
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />

      {/* Dark theme background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black"></div>

      {/* Smoke Effect Background */}
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-40">
        <SmokeBackground />
      </div>

      <BackgroundEffects />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-ash-gray hover:text-snow-white hover:border-white/20 transition-all duration-300 group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Animated Title */}
          <div className="relative inline-block mb-6">
            <h1 className="section-title mb-0">
              Development Projects
            </h1>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-rose-500/20 blur-2xl -z-10"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <p className="text-ash-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            A showcase of open-source contributions, experiments, and technical explorations
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <StatCard icon={<Github size={20} className="text-violet-400" />} value={repos.length} label="Repositories" delay={0.1} />
            <StatCard icon={<Star size={20} className="text-amber-400" />} value={repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)} label="Total Stars" delay={0.2} />
            <StatCard icon={<GitFork size={20} className="text-emerald-400" />} value={repos.reduce((sum, repo) => sum + repo.forks_count, 0)} label="Forks" delay={0.3} />
            <StatCard icon={<Layers size={20} className="text-blue-400" />} value={languages.length} label="Languages" delay={0.4} />
          </div>
        </motion.div>

        {/* Language Filter Pills */}
        {languages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10"
          >
            <div className="relative bg-gradient-to-br from-ghost-black/80 to-deep-charcoal/60 backdrop-blur-sm rounded-2xl border border-white/[0.08] p-5 overflow-hidden">
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-violet-500/50 via-fuchsia-500/50 to-rose-500/50" />
              
              <div className="flex items-center gap-3 mb-4">
                <Activity size={14} className="text-violet-400" />
                <span className="text-ash-gray text-xs font-medium tracking-widest uppercase">Filter by Technology</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedLanguage('all')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedLanguage === 'all'
                      ? 'bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 text-snow-white border border-violet-500/30'
                      : 'bg-white/5 text-ash-gray hover:bg-white/10 hover:text-snow-white border border-white/[0.08]'
                  }`}
                >
                  All Projects
                </button>
                {languages.map((language) => {
                  const style = getLanguageStyle(language);
                  return (
                    <button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedLanguage === language
                          ? `bg-gradient-to-r ${style.bg} ${style.text} border border-white/20`
                          : 'bg-white/5 text-ash-gray hover:bg-white/10 hover:text-snow-white border border-white/[0.08]'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${selectedLanguage === language ? 'bg-current' : 'bg-white/40'}`} />
                      {language}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Repository Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedLanguage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filteredRepos.map((repo, index) => {
              const langStyle = getLanguageStyle(repo.language);
              const isHovered = hoveredRepo === repo.id;
              
              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                  onMouseEnter={() => setHoveredRepo(repo.id)}
                  onMouseLeave={() => setHoveredRepo(null)}
                  className="group"
                >
                  <div className={`relative h-full rounded-2xl transition-all duration-400 overflow-hidden ${
                    isHovered 
                      ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/20 shadow-2xl shadow-black/40 scale-[1.02]' 
                      : 'bg-gradient-to-br from-white/[0.04] to-transparent border-white/[0.06]'
                  } border backdrop-blur-sm`}>
                    
                    {/* Language color accent - left side bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${langStyle.bg} ${isHovered ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`} />
                    
                    <div className="relative z-10 p-6 pl-7 flex flex-col h-full">
                      {/* Top Row: Language + Stats */}
                      <div className="flex items-center justify-between mb-4">
                        {repo.language ? (
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${langStyle.text} bg-gradient-to-r ${langStyle.bg} border border-white/10`}>
                            <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                            {repo.language}
                          </span>
                        ) : (
                          <span className="text-xs text-ash-gray/50">No language</span>
                        )}
                        
                        <div className="flex items-center gap-3 text-xs text-ash-gray">
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-amber-400" />
                            <span className="font-medium">{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork size={12} className="text-emerald-400" />
                            <span className="font-medium">{repo.forks_count}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Repository Name */}
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isHovered ? 'text-snow-white' : 'text-snow-white/90'}`}>
                        {repo.name}
                      </h3>

                      {/* Description - cleaner, more space */}
                      <p className="text-ash-gray/80 text-sm leading-relaxed line-clamp-2 mb-5 flex-grow">
                        {repo.description || 'No description available'}
                      </p>

                      {/* Footer: Date + Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                        <span className="text-xs text-ash-gray/60 flex items-center gap-1.5">
                          <Calendar size={11} />
                          {formatDate(repo.updated_at)}
                        </span>
                        
                        <div className="flex items-center gap-2">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-ash-gray hover:text-snow-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-200"
                          >
                            <Github size={12} />
                            Code
                          </a>
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium ${langStyle.text} bg-gradient-to-r ${langStyle.bg} border border-white/10 rounded-lg hover:opacity-80 transition-all duration-200`}
                            >
                              <Globe size={12} />
                              Live
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredRepos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="mb-8 relative inline-block">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20">
                <Code size={40} className="text-violet-400" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl bg-violet-500/20 blur-xl -z-10"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            <h3 className="text-2xl font-bold text-snow-white mb-3">
              No Repositories Found
            </h3>
            <p className="text-ash-gray text-base max-w-md mx-auto mb-8">
              No projects match the selected technology filter. Try exploring other languages.
            </p>


            <button
              onClick={() => setSelectedLanguage('all')}
              className="px-6 py-3 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 text-snow-white rounded-xl text-sm font-medium hover:border-violet-500/50 transition-all duration-300"
            >
              View All Projects
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Development;
