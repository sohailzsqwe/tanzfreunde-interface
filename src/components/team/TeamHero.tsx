
import React from 'react';
import { motion } from 'framer-motion';

const TeamHero: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unser Team
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Bei uns unterrichten ausschließlich qualifizierte Tanzlehrer mit langjähriger Erfahrung und Leidenschaft für ihren Beruf.
            </p>
            <p className="text-lg text-gray-600">
              Jeder bringt seine eigene Persönlichkeit und Expertise ein, um dir ein abwechslungsreiches und professionelles Tanzerlebnis zu bieten.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamHero;
