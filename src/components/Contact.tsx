import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Instagram, MessageSquare, Send } from 'lucide-react';

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
    <section className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Hexagonal sacred geometry pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexContact" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                <path d="M30 0 L45 13 L45 39 L30 52 L15 39 L15 13 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-domain-violet"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexContact)" />
          </svg>
        </div>

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

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-domain-violet/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cursed-blue/10 rounded-full blur-3xl animate-pulse"></div>

        {/* Floating cursed energy particles */}
        {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rengoku-flame via-domain-violet to-cursed-blue bg-clip-text text-transparent">
            Domain Invitation
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
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

          <p className="text-lg text-ash-gray max-w-3xl mx-auto leading-relaxed">
            Enter the domain of collaboration. Whether you seek a partner for your next project
            or wish to discuss ideas, the gateway is open.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">

          {/* Contact Form - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl h-full overflow-hidden">

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
              <div className="mb-8 relative z-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent mb-3">
                  Initiate Contact
                </h3>
                <p className="text-ash-gray leading-relaxed">
                  Fill the ritual with your message. I typically respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-snow-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-snow-white placeholder-ash-gray/50 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-snow-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-snow-white placeholder-ash-gray/50 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-snow-white text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-snow-white placeholder-ash-gray/50 focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-rengoku-flame via-domain-violet to-cursed-blue text-snow-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
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
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cursed-blue to-domain-violet"></div>

              <h3 className="text-xl font-bold text-snow-white mb-6">Contact Nodes</h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-domain-violet/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rengoku-flame/20 to-zenitsu-lightning/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-zenitsu-lightning" />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-sm mb-1">Email</p>
                    <p className="text-ash-gray text-xs break-all">mahimrk.a@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cursed-blue/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cursed-blue/20 to-domain-violet/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-domain-violet" />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-sm mb-1">Location</p>
                    <p className="text-ash-gray text-xs">Montreal, QC, Canada</p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-checkered-green/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-checkered-green/20 to-zenitsu-lightning/20 flex items-center justify-center flex-shrink-0">
                    <motion.div
                      className="w-3 h-3 bg-checkered-green rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-sm mb-1">Status</p>
                    <p className="text-ash-gray text-xs">Available for projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-ghost-black/95 to-deep-charcoal/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-domain-violet to-rengoku-flame"></div>

              <h3 className="text-xl font-bold text-snow-white mb-6">Social Connections</h3>

              <div className="space-y-3">
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
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-domain-violet/30 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center`}>
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </div>
                    <span className="text-snow-white font-medium text-sm">{social.name}</span>
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

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-ghost-black/80 to-deep-charcoal/80 backdrop-blur-sm rounded-full border border-white/10 shadow-xl">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-rengoku-flame rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-domain-violet rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-cursed-blue rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <span className="text-ash-gray text-sm font-medium">
              Response Time: 24 hours • Time Zone: EST (UTC-5)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
