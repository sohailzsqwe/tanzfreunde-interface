
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import Highlights from '../components/Highlights';
import TeamSection from '../components/TeamSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Index = () => {
  const courses = [
    {
      title: 'Kindertanz',
      description: 'Spielerisch die Freude am Tanzen entdecken und dabei motorische Fähigkeiten entwickeln.',
      image: '/images/courses/children-dance.jpg',
      link: '/kurse/kinder'
    },
    {
      title: 'Hip Hop für Jugendliche',
      description: 'Coole Moves, aktuelle Trends und mitreißende Choreographien für alle Teens.',
      image: '/images/courses/hiphop-youth.jpg',
      link: '/kurse/jugendliche'
    },
    {
      title: 'Standard & Latein',
      description: 'Von Langsamer Walzer bis Jive – klassische Tänze für Paare jeden Alters.',
      image: '/images/courses/ballroom.jpg',
      link: '/kurse/erwachsene'
    },
    {
      title: 'Zumba Fitness',
      description: 'Das beliebte Tanz-Fitness-Workout mit mitreißenden lateinamerikanischen Rhythmen.',
      image: '/images/courses/zumba.jpg',
      link: '/tanzarten/zumba'
    },
    {
      title: 'Discofox',
      description: 'Der vielseitige Paartanz für alle Musikrichtungen von Schlager bis Charts.',
      image: '/images/courses/discofox.jpg',
      link: '/tanzarten/discofox'
    },
    {
      title: 'Seniorentanz',
      description: 'Altersgerechtes Tanzen mit Freude an der Bewegung und in geselliger Runde.',
      image: '/images/courses/senior-dance.jpg',
      link: '/kurse/senioren'
    },
    {
      title: 'Hochzeitskurse',
      description: 'Perfekte Vorbereitung für den großen Tag – vom ersten Tanz bis zur Mitternachtsquadrille.',
      image: '/images/courses/wedding-dance.jpg',
      link: '/tanzarten/hochzeitskurse'
    },
    {
      title: 'Spezialkurse',
      description: 'Von Kanga über Parkinson-Tanz bis zu Ladies Dance – für besondere Interessen.',
      image: '/images/courses/special-courses.jpg',
      link: '/kurse/spezialkurse'
    }
  ];

  return (
    <Layout>
      <HeroSection />
      
      {/* Course Overview */}
      <section id="course-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Unsere Kurse</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Für jedes Alter und jeden Geschmack das passende Angebot – entdecke die Vielfalt unserer Tanzschule
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                description={course.description}
                image={course.image}
                link={course.link}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/kurse"
                className="btn-primary inline-flex items-center"
              >
                Alle Kurse anzeigen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Highlights />
      
      {/* Special Offer */}
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
              to="/angebote"
              className="inline-block px-8 py-3 bg-white text-teal-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Jetzt Gruppe anmelden
            </Link>
          </motion.div>
        </div>
      </section>
      
      <TeamSection />
      <GallerySection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
