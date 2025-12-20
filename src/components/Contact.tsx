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
  const [aiMessage, setAiMessage] = useState<string>("Detecting cursors. Ready.");

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
    setAiMessage('Message received. Domain acknowledged.');
    setFormData({ name: '', email: '', message: '' });
  };

  const accentClass = theme === ThemeMode.JUJUTSU ? 'text-[#bc13fe]' : 'text-[#10b981]';
  const inputClasses = `w-full bg-white/[0.02] border-b-4 py-3 px-2 transition-all duration-500 outline-none text-sm font-body placeholder:text-slate-600 ${
    theme === ThemeMode.JUJUTSU
      ? 'border-slate-800 focus:border-[#bc13fe] text-purple-50'
      : 'border-slate-800 focus:border-[#10b981] text-emerald-50'
  }`;
  const labelClasses = 'text-xs font-subtitle uppercase tracking-[0.25em] opacity-50 mb-2 block';

  return (
    <div className="min-h-screen w-full transition-colors duration-1000 flex flex-col bg-[#0a0510] overflow-x-hidden">
      {/* Manga-Style Background FX */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Speed lines */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 bg-white/5"
              style={{
                height: `${Math.random() * 200 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`
              }}
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Halftone pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}></div>

        {/* Large cursed energy glow */}
        <div className="absolute -right-40 -bottom-40 w-[50vw] h-[50vw] rounded-full blur-[200px] opacity-[0.04] bg-[#bc13fe]"></div>

        {/* Comic panel borders effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-2 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white"></div>
          <div className="absolute top-0 bottom-0 left-0 w-2 bg-white"></div>
          <div className="absolute top-0 bottom-0 right-0 w-2 bg-white"></div>
        </div>
      </div>

      <main className="relative z-10 flex-1 flex items-center justify-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">

          {/* LEFT: INFO & SOCIALS */}
          <div className="space-y-5 sm:space-y-6 lg:pr-8">
            <div className="space-y-3 sm:space-y-4">
              {/* Manga-style header */}
              <div className="relative inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title tracking-tighter uppercase leading-none transform -skew-x-6"
                  style={{
                    textShadow: '3px 3px 0px #000, -2px -2px 0px rgba(188, 19, 254, 0.3)'
                  }}
                >
                  Inquire
                </h2>
                {/* Action line effect */}
                <motion.div
                  className="absolute -right-8 top-1/2 w-20 h-1 bg-[#bc13fe]"
                  animate={{
                    scaleX: [0, 1, 0],
                    x: [0, 30, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title tracking-tighter uppercase leading-none transform -skew-x-6 ${accentClass}`}
                style={{
                  textShadow: '3px 3px 0px #000'
                }}
              >
                Directly
              </h2>

              <div className="relative pl-3 sm:pl-4 border-l-3 sm:border-l-4 border-[#bc13fe]">
                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-body max-w-md">
                  {theme === ThemeMode.JUJUTSU
                    ? "Establishing a direct link to the cursed realm. Hollow purple energy verified."
                    : "A message delivered through the forest. The Tanjiro spirit resolve is active."}
                </p>
              </div>
            </div>

            {/* Manga-style Social Grid */}
            <div>
              <p className="text-[10px] sm:text-xs font-subtitle uppercase tracking-[0.25em] opacity-40 mb-2 sm:mb-3">/// CONNECT</p>
              <div className="flex gap-3 sm:gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 border-2 sm:border-3 flex items-center justify-center transition-all duration-300 relative ${
                      theme === ThemeMode.JUJUTSU
                        ? 'border-slate-800 hover:border-[#bc13fe] text-[#bc13fe]/60 hover:text-[#bc13fe]'
                        : 'border-slate-800 hover:border-[#10b981] text-[#10b981]/60 hover:text-[#10b981]'
                    }`}
                    style={{
                      boxShadow: '3px 3px 0px #000'
                    }}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                    {/* Speed line on hover */}
                    <motion.div
                      className="absolute -right-2 top-1/2 w-8 h-0.5 bg-current opacity-0 group-hover:opacity-100"
                      animate={{
                        scaleX: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* AI Helper - Manga Style */}
            <div className="pt-4">
              <div className={`p-4 border-l-4 transition-all duration-500 bg-white/[0.03] relative ${
                theme === ThemeMode.JUJUTSU ? 'border-[#bc13fe]/50' : 'border-[#10b981]/50'
              }`}
                style={{
                  boxShadow: '6px 6px 0px rgba(0,0,0,0.3)'
                }}
              >
                <div className="flex gap-3 items-center">
                  <div className={`w-10 h-10 border-3 border-white/20 flex items-center justify-center text-lg font-black ${
                    theme === ThemeMode.JUJUTSU ? 'text-[#bc13fe]' : 'text-[#10b981]'
                  }`}>
                    {theme === ThemeMode.JUJUTSU ? '●' : '▲'}
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-subtitle tracking-[0.3em] opacity-40 mb-1 uppercase">/// LOCATION: CANADA</p>
                    <p className="text-sm font-body leading-tight text-slate-200">
                      {aiMessage}
                    </p>
                  </div>
                </div>
                {/* Comic panel corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-[#bc13fe] border-r-transparent opacity-30"></div>
              </div>
            </div>
          </div>

          {/* RIGHT: MANGA-STYLE FORM */}
          <div className={`form-container p-4 sm:p-6 md:p-8 border-3 sm:border-4 transition-all duration-500 relative bg-black/40 ${
            theme === ThemeMode.JUJUTSU ? 'border-[#bc13fe]/30' : 'border-[#10b981]/30'
          }`}
            style={{
              boxShadow: '6px 6px 0px rgba(0,0,0,0.5)'
            }}
          >
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] sm:border-t-[30px] border-l-[20px] sm:border-l-[30px] border-t-[#bc13fe] border-l-transparent opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] sm:border-b-[30px] border-r-[20px] sm:border-r-[30px] border-b-[#bc13fe] border-r-transparent opacity-40"></div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 relative z-10">
              <div>
                <label className={labelClasses}>/// IDENTITY</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ENTER NAME"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>/// CHANNEL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ENTER EMAIL"
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label className={labelClasses}>/// INTEL</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="TYPE MESSAGE..."
                  className={`${inputClasses} resize-none`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 sm:py-4 text-xs sm:text-sm font-subtitle uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-500 border-3 sm:border-4 relative overflow-hidden ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                } ${
                  theme === ThemeMode.JUJUTSU
                    ? 'bg-[#bc13fe] border-[#bc13fe] text-black hover:bg-[#bc13fe]/90'
                    : 'bg-[#10b981] border-[#10b981] text-black hover:bg-[#10b981]/90'
                }`}
                style={{
                  boxShadow: '4px 4px 0px #000',
                  transform: isSubmitting ? 'none' : 'skew(-6deg)'
                }}
              >
                <span className="relative z-10 inline-block" style={{ transform: 'skew(6deg)' }}>
                  {isSubmitting ? 'SYNCING...' : '⚡ TRANSMIT ⚡'}
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

      <footer className="relative z-50 p-3 sm:p-4 text-center">
        <div className="inline-block border-2 sm:border-3 md:border-4 border-white/10 px-4 sm:px-6 py-1.5 sm:py-2" style={{ boxShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] font-subtitle uppercase tracking-[0.2em] sm:tracking-[0.3em] opacity-30">/// CONTACT NODE SYNC ACTIVE ///</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
