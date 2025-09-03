import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/mahim',
      color: 'from-ghost-black to-domain-violet',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/mahimur-rahman-khan-50a553183/',
      color: 'from-cursed-blue to-domain-violet',
    },
    {
      name: 'Behance',
      icon: '🎨',
      url: 'https://www.behance.net/mahimrk',
      color: 'from-domain-violet to-cursed-blue',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/mahimrk.agm',
      color: 'from-cursed-blue to-domain-violet',
    },
  ];

  return (
    <section className="min-h-[80vh] py-12 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-domain-violet to-cursed-blue bg-clip-text text-transparent">
            Summon the Sorcerer
          </h2>
          <span className="block w-24 h-1 mx-auto mb-8 bg-domain-violet rounded-full animate-pulse" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-snow-white mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-ghost-black/50 border border-domain-violet/20 rounded-lg text-snow-white placeholder-ash-gray focus:outline-none focus:border-domain-violet/40 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-ghost-black/50 border border-domain-violet/20 rounded-lg text-snow-white placeholder-ash-gray focus:outline-none focus:border-domain-violet/40 transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-ghost-black/50 border border-domain-violet/20 rounded-lg text-snow-white placeholder-ash-gray focus:outline-none focus:border-domain-violet/40 transition-colors duration-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-domain-violet to-cursed-blue text-snow-white rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-snow-white mb-4">Connect with Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-lg bg-gradient-to-r ${link.color} border border-domain-violet/20 hover:border-domain-violet/40 transition-colors duration-300`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{link.icon}</span>
                      <span className="text-snow-white font-medium">{link.name}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-snow-white mb-4">Location</h3>
              <p className="text-ash-gray">
                Montreal, QC, Canada<br />
                <span className='block'>Email: <a href="mailto:mahimrk.a@gmail.com" className="text-domain-violet">mahimrk.a@gmail.com</a></span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 