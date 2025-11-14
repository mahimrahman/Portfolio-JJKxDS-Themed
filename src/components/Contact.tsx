import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Instagram, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen py-16 px-4 relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ghost-black via-deep-charcoal/50 to-ghost-black"></div>
        
        {/* Floating glass orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Subtle particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-zenitsu-lightning/40 to-domain-violet/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-ash-gray max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's discuss how we can collaborate and create something extraordinary together.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:items-start">
          
          {/* Contact Form - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl h-full flex flex-col">
              {/* Glass card header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-snow-white mb-2">Send a Message</h3>
                <p className="text-ash-gray">Fill out the form and I'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                {/* Name Field */}
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-snow-white placeholder-ash-gray focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300"
                    placeholder="Your Name"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rengoku-flame/20 to-domain-violet/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-snow-white placeholder-ash-gray focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="relative flex-grow">
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-full min-h-[120px] px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-snow-white placeholder-ash-gray focus:outline-none focus:ring-2 focus:ring-zenitsu-lightning/50 focus:border-zenitsu-lightning/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-full flex flex-col"
          >
            {/* Quick Contact Info */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl flex-grow mb-6">
              <h3 className="text-2xl font-bold text-snow-white mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rengoku-flame/20 to-zenitsu-lightning/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-zenitsu-lightning" />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-lg mb-1">Email</p>
                    <p className="text-ash-gray text-base">mahimrk.a@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cursed-blue/20 to-domain-violet/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-domain-violet" />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-lg mb-1">Location</p>
                    <p className="text-ash-gray text-base">Montreal, QC, Canada</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-checkered-green/20 to-zenitsu-lightning/20 flex items-center justify-center flex-shrink-0">
                    <motion.div
                      className="w-3 h-3 bg-checkered-green rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-snow-white font-semibold text-lg mb-1">Status</p>
                    <p className="text-ash-gray text-base">Available for new projects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-snow-white mb-6">Connect on Social</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { 
                    icon: <Linkedin size={24} />, 
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/mahimurrahman-khan",
                    gradient: "from-cursed-blue to-domain-violet"
                  },
                  { 
                    icon: <MessageSquare size={24} />, 
                    name: "Discord",
                    url: "https://discord.com/users/1196964174530629725",
                    gradient: "from-domain-violet to-cursed-blue"
                  },
                  { 
                    icon: <Instagram size={24} />, 
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
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative"
                  >
                    <div className={`relative bg-gradient-to-br ${social.gradient} p-1 rounded-2xl`}>
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-snow-white group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                          </div>
                          <span className="text-snow-white text-sm font-medium">{social.name}</span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Professional Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 px-8 py-4">
            <p className="text-ash-gray">
              <span className="text-snow-white font-medium">Response Time:</span> Usually within 24 hours • 
              <span className="text-snow-white font-medium ml-2">Time Zone:</span> EST (UTC-5)
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact; 