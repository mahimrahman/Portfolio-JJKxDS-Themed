import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Instagram, MessageSquare, Send } from 'lucide-react';
import SmokeBackground from './SmokeBackground';
import SectionMerge from './SectionMerge';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen py-16 px-6 md:px-8 lg:px-12 relative overflow-hidden flex items-center">
      {/* Subtle Section Merge Overlay - only top since this is the last section */}
      <SectionMerge position="top" intensity="light" />
      {/* Dark theme background with transparency for smoke */}
      <div className="absolute inset-0 bg-gradient-to-br from-ghost-black/95 via-deep-charcoal/95 to-ghost-black/95 backdrop-blur-sm"></div>
      {/* Smoke Effect Background */}
      <SmokeBackground />
      {/* Background Effects - Brought Forward */}
      <div className="absolute inset-0 z-[25]">
        {/* Hexagonal sacred geometry pattern with animation */}
        <motion.div 
          className="absolute inset-0 opacity-8"
          animate={{
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexContact" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <path d="M30 0 L45 13 L45 39 L30 52 L15 39 L15 13 Z" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-domain-violet"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexContact)" />
          </svg>
        </motion.div>

        {/* Ritual circle background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
          <svg viewBox="0 0 800 800" className="w-full h-full">
            <motion.circle
              cx="400"
              cy="400"
              r="350"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-domain-violet"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ originX: '400px', originY: '400px' }}
            />
            <motion.circle
              cx="400"
              cy="400"
              r="300"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-cursed-blue"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              style={{ originX: '400px', originY: '400px' }}
            />
            <motion.circle
              cx="400"
              cy="400"
              r="250"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-zenitsu-lightning"
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              style={{ originX: '400px', originY: '400px' }}
            />
          </svg>
        </div>

        {/* Ambient glows - Enhanced */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(127, 0, 255, 0.18) 0%, rgba(58, 134, 255, 0.12) 50%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 78, 0, 0.15) 0%, rgba(255, 208, 0, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating cursed energy particles - reduced for performance */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-zenitsu-lightning/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-[40] w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="section-title">
            Domain Invitation
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-zenitsu-lightning to-transparent"></div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-zenitsu-lightning">
                <polygon points="12,2 18,7 22,12 18,17 12,22 6,17 2,12 6,7" fill="currentColor" />
              </svg>
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-r from-zenitsu-lightning via-transparent to-transparent"></div>
          </div>

          <p className="text-sm text-ash-gray max-w-2xl mx-auto leading-relaxed">
            Enter the domain of collaboration. Whether you seek a partner for your next project
            or wish to discuss ideas, the gateway is open.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:items-stretch">

          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex"
          >
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 p-6 shadow-2xl w-full overflow-hidden flex flex-col">

              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rengoku-flame via-domain-violet to-cursed-blue"></div>

              {/* Sacred geometry decoration */}
              <div className="absolute top-4 right-4 opacity-5">
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <polygon points="50,10 80,30 80,70 50,90 20,70 20,30" fill="none" stroke="currentColor" strokeWidth="1" className="text-domain-violet"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-cursed-blue"/>
                </svg>
              </div>

              {/* Header */}
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent mb-2">
                  Initiate Contact
                </h3>
                <p className="text-ash-gray text-sm leading-relaxed">
                  Fill the ritual with your message. I typically respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10 flex-grow flex flex-col">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-snow-white text-xs font-medium mb-1.5">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-snow-white placeholder-ash-gray/50 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300 text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-snow-white text-xs font-medium mb-1.5">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-snow-white placeholder-ash-gray/50 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="group flex-grow flex flex-col">
                  <label className="block text-snow-white text-xs font-medium mb-1.5">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-snow-white placeholder-ash-gray/50 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300 resize-none text-sm flex-grow min-h-[120px]"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-rengoku-flame via-domain-violet to-cursed-blue text-snow-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group text-sm"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>

                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Contact Methods */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 p-5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cursed-blue to-domain-violet"></div>

              <h3 className="text-lg font-bold text-snow-white mb-4">Contact Nodes</h3>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-domain-violet/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rengoku-flame/20 to-zenitsu-lightning/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-zenitsu-lightning" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-snow-white font-semibold text-xs mb-0.5">Email</p>
                    <p className="text-ash-gray text-xs break-all">mahimrk.a@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-cursed-blue/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cursed-blue/20 to-domain-violet/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-domain-violet" />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-xs mb-0.5">Location</p>
                    <p className="text-ash-gray text-xs">Montreal, QC, Canada</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-checkered-green/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-checkered-green/20 to-zenitsu-lightning/20 flex items-center justify-center flex-shrink-0">
                    <motion.div
                      className="w-2.5 h-2.5 bg-checkered-green rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-xs mb-0.5">Status</p>
                    <p className="text-ash-gray text-xs">Available for projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/20 p-5 shadow-2xl relative overflow-hidden flex-grow flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-domain-violet to-rengoku-flame"></div>

              <h3 className="text-lg font-bold text-snow-white mb-4">Social Connections</h3>

              <div className="space-y-3 flex-grow flex flex-col justify-center">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/mahimurrahman-khan",
                    gradient: "from-cursed-blue to-domain-violet"
                  },
                  {
                    icon: <MessageSquare size={20} />,
                    name: "Discord",
                    url: "https://discord.com/users/1196964174530629725",
                    gradient: "from-domain-violet to-cursed-blue"
                  },
                  {
                    icon: <Instagram size={20} />,
                    name: "Instagram",
                    url: "https://www.instagram.com/snazzy_memories/",
                    gradient: "from-rengoku-flame to-cursed-blue"
                  }
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-domain-violet/30 transition-all duration-300 group"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center`}>
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </div>
                    <span className="text-snow-white font-medium text-xs">{social.name}</span>
                    <motion.span
                      className="ml-auto text-ash-gray group-hover:text-zenitsu-lightning transition-colors"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default Contact;
