
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Music, Star } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Kurse für alle Altersgruppen',
      description: 'Von Kindertanz über Jugendkurse bis zu Seniorentanz – bei uns tanzt jeder!'
    },
    {
      icon: Music,
      title: 'Moderne Tanzsäle',
      description: 'Drei klimatisierte Säle mit erstklassiger Licht- und Tontechnik für das beste Tanzerlebnis.'
    },
    {
      icon: Heart,
      title: 'Freundliche Atmosphäre',
      description: 'Familiäres Ambiente mit persönlicher Betreuung durch unser erfahrenes Team.'
    },
    {
      icon: Star,
      title: 'Gruppenrabatte',
      description: 'Attraktive Rabatte für Neukunden und Gruppen. Gemeinsam tanzen, gemeinsam sparen!'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Unsere Highlights</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Was uns als Tanzschule besonders macht und warum du dich bei uns wohlfühlen wirst
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
