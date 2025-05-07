import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/yourusername',
      color: 'from-ghost-black to-domain-violet',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/yourusername',
      color: 'from-cursed-blue to-domain-violet',
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourusername',
      color: 'from-domain-violet to-rengoku-flame',
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/yourusername',
      color: 'from-rengoku-flame to-zenitsu-lightning',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-deep-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-domain-violet/2 via-deep-charcoal to-deep-charcoal pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent">
            Summon Me
          </h2>
          <div className="w-24 h-1 bg-zenitsu-lightning mx-auto mb-8" />
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
                  className="w-full px-4 py-3 bg-ghost-black/50 border border-zenitsu-lightning/20 rounded-lg text-snow-white placeholder-ash-gray focus:outline-none focus:border-zenitsu-lightning/40 transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-ghost-black/50 border border-zenitsu-lightning/20 rounded-lg text-snow-white placeholder-ash-gray focus:outline-none focus:border-zenitsu-lightning/40 transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-ghost-black/50 border border-zenitsu-lightning/20 rounded-lg text-snow-white placeholder-ash-gray focus:outline-none focus:border-zenitsu-lightning/40 transition-colors duration-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-rengoku-flame to-domain-violet text-snow-white rounded-lg hover:opacity-90 transition-opacity duration-300"
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
                    className={`p-4 rounded-lg bg-gradient-to-r ${link.color} border border-zenitsu-lightning/20 hover:border-zenitsu-lightning/40 transition-colors duration-300`}
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
                Currently residing in the Digital Realm, ready to answer your summons from anywhere in the world.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 