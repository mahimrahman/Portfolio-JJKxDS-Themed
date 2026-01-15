/**
 * @fileoverview Contact Section Component
 * @description Contact form with manga/anime-styled visual effects,
 * social media links, and form validation
 */
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

// ThemeMode enum matching reference
enum ThemeMode {
  JUJUTSU = 'JUJUTSU',
  SLAYER = 'SLAYER'
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  technique: string;
}

interface MessageData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  // Using JUJUTSU theme by default (matching portfolio theme)
  const theme = ThemeMode.JUJUTSU;

  const [formData, setFormData] = useState<MessageData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiMessage, setAiMessage] = useState<string>("Available and ready to connect!");

  const socials: SocialLink[] = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mahimurrahman-khan',
      icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      technique: 'LINK'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/mahimurrahman',
      icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
      technique: 'FORGE'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/1196964174530629725',
      icon: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.666 4.37a.071.071 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z',
      technique: 'GUILD'
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setAiMessage('Message received! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const accentClass = 'text-purple-300';
  const inputClasses = `w-full bg-gradient-to-br from-purple-50/10 to-white/[0.05] border-2 rounded-lg py-2 px-3 transition-all duration-300 outline-none text-sm font-body placeholder:text-purple-200/50 border-purple-400/40 focus:border-purple-300 focus:bg-purple-50/15 text-white focus:shadow-lg focus:shadow-purple-400/30`;
  const labelClasses = 'text-xs font-subtitle uppercase tracking-[0.2em] text-purple-200 mb-2 block font-semibold';

  return (
    <div className="w-full transition-colors duration-1000 bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#16213e] overflow-x-hidden">
      {/* Anime-Style Background FX */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating sakura petals / anime particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-purple-300/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 + 50],
                x: [0, Math.random() * 50 - 25],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Soft anime glow pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle, rgba(216,180,254,0.15) 2px, transparent 2px)`,
          backgroundSize: '30px 30px'
        }}></div>

        {/* Large purple magical glow */}
        <div className="absolute -right-40 -bottom-40 w-[50vw] h-[50vw] rounded-full blur-[250px] opacity-[0.15] bg-purple-500"></div>
        <div className="absolute -left-40 -top-40 w-[40vw] h-[40vw] rounded-full blur-[200px] opacity-[0.1] bg-pink-400"></div>

        {/* Anime border effects - softer */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-1 bg-purple-300"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-300"></div>
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-purple-300"></div>
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-purple-300"></div>
        </div>
      </div>

      <main className="relative z-10 py-12 sm:py-16 px-4 sm:px-6">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">

          {/* LEFT: INFO & SOCIALS */}
          <div className="space-y-3 sm:space-y-4 lg:pr-4">
            <div className="space-y-2 sm:space-y-3">
              {/* Anime-style header */}
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-0.5" style={{ textShadow: '2px 2px 8px rgba(168, 85, 247, 0.6), 0px 0px 20px rgba(216, 180, 254, 0.3)' }}>
                  Let's
                </h2>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-0 ${accentClass}`} style={{ textShadow: '2px 2px 8px rgba(168, 85, 247, 0.6), 0px 0px 20px rgba(216, 180, 254, 0.4)' }}>
                  Connect
                </h2>
                {/* Magical sparkle effect */}
                <motion.div
                  className="absolute -right-8 top-1/2 w-3 h-3 rounded-full bg-purple-400"
                  animate={{
                    scale: [0.5, 1.2, 0.5],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <div className="relative pl-2 sm:pl-3 border-l-2 sm:border-l-3 border-purple-400">
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-body max-w-md">
                  Ready to collaborate and bring your ideas to life. Let's create something amazing together!
                </p>
              </div>
            </div>

            {/* Anime-style Social Grid */}
            <div>
              <p className="text-[10px] sm:text-xs font-subtitle uppercase tracking-[0.25em] text-purple-300/60 mb-1.5 sm:mb-2">✦ Find Me On</p>
              <div className="flex gap-2 sm:gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 border-2 rounded-lg flex items-center justify-center transition-all duration-300 relative group border-purple-400/50 hover:border-purple-300 bg-purple-900/30 hover:bg-purple-800/40 text-purple-300 hover:text-purple-200 hover:shadow-lg hover:shadow-purple-500/40"
                    style={{
                      boxShadow: '0 4px 15px rgba(168, 85, 247, 0.2)'
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                    {/* Magical glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-purple-400 opacity-0 group-hover:opacity-20 blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Status Card - Anime Style */}
            <div className="pt-2">
              <div className="p-3 rounded-xl border-2 transition-all duration-500 relative border-purple-400/50 bg-gradient-to-br from-purple-900/40 to-purple-950/20 shadow-lg shadow-purple-900/30"
                style={{
                  boxShadow: '0 8px 32px rgba(168, 85, 247, 0.2)'
                }}
              >
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-base border-purple-400/50 bg-purple-500/20 text-purple-300">
                    ✦
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-subtitle tracking-[0.3em] text-purple-300/60 mb-1 uppercase">✦ Based in Canada</p>
                    <p className="text-sm font-body leading-tight text-purple-100">
                      {aiMessage}
                    </p>
                  </div>
                </div>
                {/* Soft sparkle corner */}
                <motion.div 
                  className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-300"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: ANIME-STYLE FORM */}
          <div className="form-container p-4 sm:p-5 rounded-xl border-2 transition-all duration-500 relative border-purple-400/50 bg-gradient-to-br from-purple-900/40 to-indigo-950/50 shadow-2xl shadow-purple-900/30"
            style={{
              boxShadow: '0 10px 40px rgba(168, 85, 247, 0.3)'
            }}
          >
            {/* Soft corner sparkles */}
            <motion.div 
              className="absolute top-4 left-4 w-3 h-3 rounded-full bg-purple-300/50"
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            />
            <motion.div 
              className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-pink-300/50"
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 relative z-10">
              <div>
                <label className={labelClasses}>✦ Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name..."
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>✦ Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email..."
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>✦ Your Message</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts..."
                  className={`${inputClasses} resize-none`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-subtitle uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-300 border-2 relative overflow-hidden font-bold ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                } bg-gradient-to-r from-purple-600 to-pink-600 border-purple-400 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-900/60`}
                style={{
                  boxShadow: '0 8px 30px rgba(168, 85, 247, 0.4)'
                }}
              >
                <span className="relative z-10">
                  {isSubmitting ? '✦ Sending...' : '✦ Send Message ✦'}
                </span>
                {/* Action effect */}
                {!isSubmitting && (
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.2 }}
                  />
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </main>

      <footer className="relative z-50 p-2 sm:p-3 pb-6 text-center">
        <div className="inline-block border-2 border-purple-400/20 bg-purple-900/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full" style={{ boxShadow: '0 4px 20px rgba(168, 85, 247, 0.15)' }}>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-subtitle uppercase tracking-[0.2em] sm:tracking-[0.3em] text-purple-300/50">✦ Open for Collaboration ✦</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
