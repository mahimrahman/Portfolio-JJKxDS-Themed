import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, GitFork, Calendar, Code, Globe, Github, Zap, Trophy, Filter, Sparkles, Swords, RotateCcw } from 'lucide-react';
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

// Language colors mapping
const languageColors: { [key: string]: string } = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  Java: '#ed8b00',
  React: '#61dafb',
  HTML: '#e34f26',
  CSS: '#1572b6',
  'C++': '#00599c',
  'C#': '#239120',
  PHP: '#777bb4',
  Ruby: '#cc342d',
  Go: '#00add8',
  Rust: '#000000',
  Swift: '#fa7343',
  Kotlin: '#7f52ff',
  Dart: '#0175c2',
  Shell: '#89e051',
  Vue: '#4fc08d',
  Svelte: '#ff3e00',
  default: '#8b5cf6'
};

// Subtle background effects - more professional
const BackgroundEffects = memo(() => (
  <div className="absolute inset-0 z-[5] pointer-events-none">
    {/* Subtle purple orb */}
    <motion.div
      className="absolute top-[15%] left-[10%] w-[450px] h-[450px] rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, rgba(127, 0, 255, 0.12) 0%, rgba(127, 0, 255, 0.06) 40%, transparent 70%)'
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.4, 0.6, 0.4],
        x: [0, 40, 0],
        y: [0, -25, 0],
      }}
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Subtle orange/flame orb */}
    <motion.div
      className="absolute top-[60%] right-[15%] w-[420px] h-[420px] rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, rgba(255, 78, 0, 0.12) 0%, rgba(255, 208, 0, 0.06) 40%, transparent 70%)'
      }}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.35, 0.55, 0.35],
        x: [0, -35, 0],
        y: [0, 35, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }}
    />

    {/* Subtle blue orb */}
    <motion.div
      className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] rounded-full blur-3xl"
      style={{
        background: 'radial-gradient(circle, rgba(58, 134, 255, 0.12) 0%, rgba(58, 134, 255, 0.06) 40%, transparent 70%)'
      }}
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 25, 0],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />

    {/* Subtle dot pattern */}
    <motion.div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(127, 0, 255, 0.3) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '50px 50px'],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
));

BackgroundEffects.displayName = 'BackgroundEffects';

// Professional instruction box
const InstructionBox = memo(() => (
  <motion.div
    className="mb-8 max-w-5xl mx-auto"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-4 border border-white/10 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Filter className="text-zenitsu-lightning" size={18} />
        <p className="text-center text-sm md:text-base text-snow-white/80 font-medium leading-relaxed">
          Filter by language or activity • Click any card to view repository details
        </p>
        <Code className="text-domain-violet" size={18} />
      </div>
    </div>
  </motion.div>
));

InstructionBox.displayName = 'InstructionBox';

const Development = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'recent' | 'popular' | 'languages'>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');

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

  // Filter repositories based on selected filter
  const filteredRepos = repos.filter(repo => {
    if (selectedLanguage !== 'all' && repo.language !== selectedLanguage) {
      return false;
    }

    switch (filter) {
      case 'recent':
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return new Date(repo.updated_at) > oneMonthAgo;
      case 'popular':
        return repo.stargazers_count > 0 || repo.forks_count > 0;
      case 'languages':
        return repo.language !== null;
      default:
        return true;
    }
  });

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get language color
  const getLanguageColor = (language: string | null) => {
    if (!language) return languageColors.default;
    return languageColors[language] || languageColors.default;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Dark theme background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-deep-charcoal/95 via-ghost-black/95 to-deep-charcoal/95"></div>

        {/* Smoke Effect Background */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <SmokeBackground />
        </div>

        <BackgroundEffects />

        <div className="relative z-30 flex flex-col items-center gap-4">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-zenitsu-lightning/30 border-t-zenitsu-lightning rounded-full"
          />
          <motion.span
            className="text-snow-white text-xl font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Manifesting Technique Scrolls...
          </motion.span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Dark theme background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-deep-charcoal/95 via-ghost-black/95 to-deep-charcoal/95"></div>

        {/* Smoke Effect Background */}
        <div className="absolute inset-0 z-[5] pointer-events-none">
          <SmokeBackground />
        </div>

        <BackgroundEffects />

        <div className="relative z-30 flex flex-col items-center">
          <motion.div
            className="mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap size={64} className="text-zenitsu-lightning" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-snow-white mb-3 text-center bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Domain Expansion Failed
          </h2>
          <p className="text-ash-gray mb-8 text-center max-w-md px-4">{error}</p>
          <motion.button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white rounded-xl font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Retry Manifestation
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle Section Merge Overlays */}
      <SectionMerge position="top" intensity="light" />
      <SectionMerge position="bottom" intensity="light" />

      {/* Dark theme background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-deep-charcoal/95 via-ghost-black/95 to-deep-charcoal/95"></div>

      {/* Smoke Effect Background */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        <SmokeBackground />
      </div>

      <BackgroundEffects />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-zenitsu-lightning/20 rounded-xl text-zenitsu-lightning hover:text-snow-white hover:border-zenitsu-lightning/40 transition-all duration-300 font-medium shadow-lg group"
          >
            <motion.div
              whileHover={{ x: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowLeft size={18} />
            </motion.div>
            <span className="group-hover:underline">Return to Portfolio</span>
          </Link>
        </motion.div>

        {/* Header - Professional */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-rengoku-flame via-zenitsu-lightning to-domain-violet bg-clip-text text-transparent tracking-wide anime-heading">
            Development Portfolio
          </h1>

          <p className="text-base md:text-lg text-ash-gray max-w-4xl mx-auto leading-relaxed mb-6">
            Explore <span className="text-zenitsu-lightning font-semibold">{repos.length}</span> repositories featuring
            <span className="text-rengoku-flame font-semibold"> {repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)}</span> stars across
            <span className="text-domain-violet font-semibold"> {languages.length}</span> programming languages.
          </p>

          <InstructionBox />

          {/* Simple divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-zenitsu-lightning/40 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-zenitsu-lightning/60"></div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-domain-violet/40 to-transparent"></div>
          </div>
        </motion.div>

        {/* Stats Banner - Professional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative">
            <div className="relative bg-gradient-to-br from-deep-charcoal/80 via-ghost-black/80 to-deep-charcoal/80 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
                {[
                  { label: 'Total Repositories', value: repos.length, icon: <Github size={24} />, color: 'domain-violet' },
                  { label: 'Stars', value: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0), icon: <Star size={24} />, color: 'zenitsu-lightning' },
                  { label: 'Forks', value: repos.reduce((sum, repo) => sum + repo.forks_count, 0), icon: <GitFork size={24} />, color: 'cursed-blue' },
                  { label: 'Languages', value: languages.length, icon: <Code size={24} />, color: 'rengoku-flame' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative bg-gradient-to-br from-deep-charcoal/60 to-ghost-black/60 backdrop-blur-xl p-6 group/stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                  >
                    <div className="relative flex flex-col items-center text-center gap-2.5">
                      <div className={`text-${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold text-${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-ash-gray font-medium uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters - Professional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 space-y-6"
        >
          {/* Main Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { key: 'all', label: 'All Projects', icon: <Code size={16} />, gradient: 'from-domain-violet to-cursed-blue' },
              { key: 'recent', label: 'Recent', icon: <Zap size={16} />, gradient: 'from-rengoku-flame to-zenitsu-lightning' },
              { key: 'popular', label: 'Popular', icon: <Trophy size={16} />, gradient: 'from-zenitsu-lightning to-rengoku-flame' },
              { key: 'languages', label: 'By Language', icon: <Filter size={16} />, gradient: 'from-cursed-blue to-domain-violet' }
            ].map((filterOption) => (
              <motion.button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key as any)}
                className="relative group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {filter === filterOption.key && (
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${filterOption.gradient} rounded-xl blur opacity-40`}></div>
                )}
                <div className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === filterOption.key
                    ? `bg-gradient-to-r ${filterOption.gradient} text-ghost-black shadow-lg`
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-ash-gray hover:border-white/20 hover:text-snow-white'
                }`}>
                  {filterOption.icon}
                  {filterOption.label}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Language Element Filter - Pill Style */}
          {languages.length > 0 && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zenitsu-lightning/10 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative bg-deep-charcoal/40 backdrop-blur-xl rounded-2xl border border-zenitsu-lightning/20 p-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  <motion.button
                    onClick={() => setSelectedLanguage('all')}
                    className={`relative group px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                      selectedLanguage === 'all'
                        ? 'bg-gradient-to-r from-zenitsu-lightning to-rengoku-flame text-ghost-black shadow-xl shadow-zenitsu-lightning/40'
                        : 'bg-white/5 text-ash-gray hover:bg-white/10 hover:text-snow-white border border-white/10'
                    }`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Sparkles size={16} />
                    All Elements
                  </motion.button>
                  {languages.slice(0, 10).map((language) => (
                    <motion.button
                      key={language}
                      onClick={() => setSelectedLanguage(language)}
                      className={`relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                        selectedLanguage === language
                          ? 'bg-gradient-to-r from-cursed-blue to-domain-violet text-snow-white shadow-xl shadow-domain-violet/40 border-2 border-cursed-blue/50'
                          : 'bg-white/5 text-ash-gray hover:bg-white/10 hover:text-snow-white border border-white/10'
                      }`}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="w-3 h-3 rounded-full shadow-lg"
                        style={{
                          backgroundColor: getLanguageColor(language),
                          boxShadow: `0 0 10px ${getLanguageColor(language)}`
                        }}
                        animate={selectedLanguage === language ? {
                          scale: [1, 1.3, 1],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {language}
                    </motion.button>
                  ))}
                  {languages.length > 10 && (
                    <span className="px-5 py-3 bg-white/5 border border-white/10 text-ash-gray rounded-xl text-sm font-medium">
                      +{languages.length - 10} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Enhanced Technique Scroll Grid - Bento Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${selectedLanguage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {filteredRepos.map((repo, index) => {
              // ...existing code...
              const getCardTheme = () => {
                const lang = repo.language || 'default';
                if (['TypeScript', 'JavaScript'].includes(lang)) {
                  return { gradient: 'from-zenitsu-lightning/20 via-rengoku-flame/15 to-domain-violet/10', border: 'border-zenitsu-lightning/40', glow: 'shadow-zenitsu-lightning/30' };
                } else if (['Python', 'Java'].includes(lang)) {
                  return { gradient: 'from-cursed-blue/20 via-domain-violet/15 to-cursed-blue/10', border: 'border-cursed-blue/40', glow: 'shadow-cursed-blue/30' };
                } else if (['HTML', 'CSS', 'Vue', 'React'].includes(lang)) {
                  return { gradient: 'from-rengoku-flame/20 via-zenitsu-lightning/15 to-rengoku-flame/10', border: 'border-rengoku-flame/40', glow: 'shadow-rengoku-flame/30' };
                }
                return { gradient: 'from-domain-violet/20 via-cursed-blue/15 to-domain-violet/10', border: 'border-domain-violet/40', glow: 'shadow-domain-violet/30' };
              };

              const theme = getCardTheme();

              return (
                <motion.div
                  key={repo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.4) }}
                  className="group relative"
                  whileHover={{ scale: 1.02, y: -8 }}
                >
                  {/* Outer glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${theme.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500`}></div>

                  <div className={`relative bg-gradient-to-br ${theme.gradient} backdrop-blur-2xl rounded-3xl border-2 ${theme.border} p-7 overflow-hidden transition-all duration-300 group-hover:${theme.glow} group-hover:shadow-2xl h-full`}>
                    {/* Animated background pattern */}
                    <motion.div
                      className="absolute inset-0 opacity-5"
                      style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                      animate={{
                        backgroundPosition: ['0px 0px', '20px 20px'],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* Energy corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Repository Header with Icon */}
                      <div className="mb-5">
                        <div className="flex items-start gap-3 mb-3">
                          <motion.div
                            className="mt-1 p-2 rounded-xl bg-white/10 backdrop-blur-sm"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Github className="text-snow-white" size={20} />
                          </motion.div>
                          <div className="flex-1">
                            <h3 className="text-xl font-extrabold text-snow-white mb-2 leading-tight group-hover:text-zenitsu-lightning transition-colors duration-300">
                              {repo.name}
                            </h3>
                            {repo.language && (
                              <div className="flex items-center gap-2">
                                <motion.div
                                  className="w-3.5 h-3.5 rounded-full shadow-lg"
                                  style={{
                                    backgroundColor: getLanguageColor(repo.language),
                                    boxShadow: `0 0 10px ${getLanguageColor(repo.language)}`
                                  }}
                                  whileHover={{ scale: 1.4, rotate: 180 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                />
                                <span className="text-snow-white/80 text-sm font-semibold">{repo.language}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-5 flex-1">
                        <p className="text-snow-white/70 text-sm leading-relaxed line-clamp-3">
                          {repo.description || 'A sealed technique shrouded in mystery, waiting to be unveiled...'}
                        </p>
                      </div>

                      {/* Topics - Vibrant Tags */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-5">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <motion.span
                              key={topic}
                              className="px-3 py-1.5 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 text-snow-white text-xs rounded-lg font-bold uppercase tracking-wide shadow-lg"
                              whileHover={{ scale: 1.08, y: -2 }}
                            >
                              {topic}
                            </motion.span>
                          ))}
                          {repo.topics.length > 3 && (
                            <span className="px-3 py-1.5 bg-white/10 border border-white/20 text-snow-white/60 text-xs rounded-lg font-medium">
                              +{repo.topics.length - 3}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Stats - Enhanced Power Display */}
                      <div className="flex items-center gap-5 mb-6 pb-5 border-b border-white/10">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.15 }}
                        >
                          <Star size={16} className="text-zenitsu-lightning drop-shadow-lg" fill="currentColor" />
                          <span className="font-bold text-snow-white">{repo.stargazers_count}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.15 }}
                        >
                          <GitFork size={16} className="text-cursed-blue drop-shadow-lg" />
                          <span className="font-bold text-snow-white">{repo.forks_count}</span>
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2 ml-auto"
                          whileHover={{ scale: 1.15 }}
                        >
                          <Calendar size={16} className="text-domain-violet drop-shadow-lg" />
                          <span className="text-xs font-semibold text-snow-white/70">{formatDate(repo.updated_at)}</span>
                        </motion.div>
                      </div>

                      {/* Action Buttons - Enhanced Style */}
                      <div className="flex gap-3 mt-auto">
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 relative group/btn"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-rengoku-flame to-domain-violet rounded-xl blur opacity-70 group-hover/btn:opacity-100 transition-opacity"></div>
                          <div className="relative flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-rengoku-flame to-domain-violet text-ghost-black rounded-xl text-sm font-extrabold shadow-xl">
                            <Github size={16} />
                            <span>View Code</span>
                          </div>
                        </motion.a>
                        {repo.homepage && (
                          <motion.a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group/btn"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-zenitsu-lightning to-cursed-blue rounded-xl blur opacity-50 group-hover/btn:opacity-100 transition-opacity"></div>
                            <div className="relative flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-snow-white rounded-xl text-sm font-bold">
                              <Globe size={16} />
                            </div>
                          </motion.a>
                        )}
                      </div>

                      {/* Energy particles */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            background: i % 2 === 0 ? '#FFD000' : '#7F00FF',
                            top: `${20 + i * 30}%`,
                            right: `${10 + i * 5}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 2 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        ></motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results - Enhanced Design */}
        {filteredRepos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <div className="relative inline-block mb-8">
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-rengoku-flame/20 via-zenitsu-lightning/20 to-domain-violet/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <Swords size={96} className="text-rengoku-flame" />
              </motion.div>
            </div>

            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-rengoku-flame via-zenitsu-lightning to-domain-violet bg-clip-text text-transparent">
                Domain Void
              </span>
            </h3>
            <p className="text-snow-white/70 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              No techniques match your current filters. The scrolls you seek lie beyond this domain.
              <br />
              <span className="text-zenitsu-lightning font-semibold">Adjust your elemental focus to reveal hidden powers.</span>
            </p>

            <motion.button
              onClick={() => {
                setFilter('all');
                setSelectedLanguage('all');
              }}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-zenitsu-lightning via-rengoku-flame to-domain-violet rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-zenitsu-lightning via-rengoku-flame to-domain-violet text-ghost-black rounded-2xl font-extrabold text-lg shadow-2xl flex items-center gap-3 justify-center">
                <RotateCcw size={20} />
                Reset All Filters
              </div>
            </motion.button>
          </motion.div>
        )}
      </div>
      </div>
  );
}

export default Development;
