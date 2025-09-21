import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const DevelopmentRecord: React.FC = () => (
  <section className="min-h-screen relative flex items-center justify-center">
    {/* Back to Portfolio Button */}
    <motion.div
      className="absolute top-6 left-6 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/#portfolio"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-deep-charcoal/90 to-ghost-black/90 backdrop-blur-xl border border-white/20 rounded-xl text-zenitsu-lightning hover:text-snow-white transition-all duration-300 font-medium shadow-lg group"
      >
        <motion.div
          whileHover={{ x: -2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowLeft size={18} />
        </motion.div>
        <span className="group-hover:underline">Back to Portfolio</span>
      </Link>
    </motion.div>

    <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-rengoku-flame to-domain-violet bg-clip-text text-transparent text-center drop-shadow-lg animate-pulse">
      Development
    </h1>
  </section>
);

export default DevelopmentRecord; 