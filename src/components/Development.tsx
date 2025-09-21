import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, GitFork, Eye, Calendar, Code, Globe, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const Development: React.FC = () => {
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-zenitsu-lightning/30 border-t-zenitsu-lightning rounded-full"
        />
        <span className="ml-4 text-snow-white text-xl">Loading repositories...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-snow-white mb-2">Failed to Load Repositories</h2>
        <p className="text-ash-gray mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white rounded-lg hover:scale-105 transition-transform duration-300"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ghost-black via-deep-charcoal to-ghost-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Back Button */}
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-zenitsu-lightning hover:text-snow-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Development Arsenal
          </h1>
          <p className="text-lg text-ash-gray max-w-3xl mx-auto leading-relaxed">
            Explore my coding journey through {repos.length} repositories. From web applications to experimental projects, 
            each repository represents hours of learning, problem-solving, and innovation.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'Total Repositories', value: repos.length, icon: <Github size={24} /> },
            { label: 'Total Stars', value: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0), icon: <Star size={24} /> },
            { label: 'Total Forks', value: repos.reduce((sum, repo) => sum + repo.forks_count, 0), icon: <GitFork size={24} /> },
            { label: 'Languages Used', value: languages.length, icon: <Code size={24} /> }
          ].map((stat, index) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center">
              <div className="text-zenitsu-lightning mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-snow-white mb-1">{stat.value}</div>
              <div className="text-ash-gray text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            {['all', 'recent', 'popular', 'languages'].map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption as any)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  filter === filterOption
                    ? 'bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white shadow-lg'
                    : 'bg-white/10 text-ash-gray hover:bg-white/20 hover:text-snow-white'
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </button>
            ))}
          </div>

          {/* Language Filter */}
          {languages.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedLanguage('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedLanguage === 'all'
                    ? 'bg-zenitsu-lightning text-ghost-black'
                    : 'bg-white/10 text-ash-gray hover:bg-white/20 hover:text-snow-white'
                }`}
              >
                All Languages
              </button>
              {languages.map((language) => (
                <button
                  key={language}
                  onClick={() => setSelectedLanguage(language)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedLanguage === language
                      ? 'bg-zenitsu-lightning text-ghost-black'
                      : 'bg-white/10 text-ash-gray hover:bg-white/20 hover:text-snow-white'
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getLanguageColor(language) }}
                  />
                  {language}
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Repository Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filter}-${selectedLanguage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredRepos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/* Repository Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-snow-white mb-2 group-hover:text-zenitsu-lightning transition-colors duration-300">
                      {repo.name}
                    </h3>
                    {repo.language && (
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        />
                        <span className="text-ash-gray text-sm">{repo.language}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-ash-gray text-sm mb-4 line-clamp-3">
                  {repo.description || 'No description available'}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-domain-violet/20 text-domain-violet text-xs rounded-lg"
                      >
                        {topic}
                      </span>
                    ))}
                    {repo.topics.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-ash-gray text-xs rounded-lg">
                        +{repo.topics.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-ash-gray text-sm">
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(repo.updated_at)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white rounded-lg hover:scale-105 transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-snow-white rounded-lg hover:bg-white/20 transition-all duration-300 text-sm font-medium"
                    >
                      <Globe size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredRepos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-snow-white mb-2">No repositories found</h3>
            <p className="text-ash-gray">Try adjusting your filters to see more results.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Development;
