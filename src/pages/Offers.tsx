
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const Offers = () => {
  const specialOffers = [
    {
      title: 'Gruppenrabatt für Neukunden',
      description: 'Gemeinsam tanzen, gemeinsam sparen! Bis zu 15% Rabatt bei Gruppenanmeldungen.',
      image: '/images/offers/group-discount.jpg',
      cta: 'Jetzt Gruppe anmelden',
      link: '/kontakt'
    },
    {
      title: 'Schnupperstunde gratis',
      description: 'Unentschlossen? Teste einen Kurs kostenlos und unverbindlich, bevor du dich anmeldest.',
      image: '/images/offers/trial-lesson.jpg',
      cta: 'Probestunde buchen',
      link: '/kontakt'
    },
    {
      title: 'Hochzeitspakete',
      description: 'Spezielle Pakete für Brautpaare und Hochzeitsgäste - perfekt für den großen Tag!',
      image: '/images/courses/wedding-dance.jpg',
      cta: 'Hochzeitsangebot entdecken',
      link: '/tanzarten/hochzeitskurse'
    }
  ];

  return (
    <Layout>
      {/* Header */}
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
                Aktuelle Angebote
              </h1>
              <p className="text-xl text-gray-600">
                Entdecke unsere speziellen Angebote und Rabatte für Neukunden und Stammkunden.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <Link
                    to={offer.link}
                    className="group flex items-center font-medium text-teal-500 hover:text-teal-600 transition-colors"
                  >
                    <span>{offer.cta}</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Group Discount */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/90 to-coral-400/90 z-10" />
          <div className="absolute inset-0 bg-[url('/images/backgrounds/group-dance.jpg')] bg-cover bg-center z-0" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Gruppenrabatt für Neukunden</h2>
            <p className="text-xl mb-6">
              Gemeinsam tanzen, gemeinsam sparen!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <span className="block text-2xl font-bold">5%</span>
                  <span className="text-sm">ab 2 Paaren</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold">10%</span>
                  <span className="text-sm">ab 3 Paaren</span>
                </div>
                <div className="text-center">
                  <span className="block text-4xl font-bold">15%</span>
                  <span className="text-sm">ab 5 Paaren</span>
                </div>
              </div>
              <p className="text-sm">
                Rabatt pro Person bei gleichzeitiger Anmeldung. Gültig für alle Gruppenkurse.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="inline-block px-8 py-3 bg-white text-teal-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Jetzt Gruppe anmelden
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Häufig gestellte Fragen</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Wie kann ich einen Gruppenrabatt beantragen?</h3>
                <p className="text-gray-600">
                  Kommen Sie einfach gemeinsam in die Tanzschule oder melden Sie sich telefonisch unter 04321 - 1 49 00. 
                  Unser Team wird alle Details mit Ihnen klären.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Gibt es Rabatte für Schüler, Studenten oder Azubis?</h3>
                <p className="text-gray-600">
                  Ja, wir bieten spezielle Ermäßigungen für Schüler, Studenten und Auszubildende. 
                  Bitte bringen Sie einen gültigen Ausweis mit.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Kann ich einen Kurs verschenken?</h3>
                <p className="text-gray-600">
                  Natürlich! Wir bieten Geschenkgutscheine für alle unsere Kurse an. 
                  Ein ideales Geschenk für jeden Anlass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
