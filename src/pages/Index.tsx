
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
      image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      link: '/kurse/kinder'
    },
    {
      title: 'Hip Hop für Jugendliche',
      description: 'Coole Moves, aktuelle Trends und mitreißende Choreographien für alle Teens.',
      image: 'https://images.unsplash.com/photo-1535571393827-f529d567569a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: '/kurse/jugendliche'
    },
    {
      title: 'Standard & Latein',
      description: 'Von Langsamer Walzer bis Jive – klassische Tänze für Paare jeden Alters.',
      image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      link: '/kurse/erwachsene'
    },
    {
      title: 'Zumba Fitness',
      description: 'Das beliebte Tanz-Fitness-Workout mit mitreißenden lateinamerikanischen Rhythmen.',
      image: 'https://images.unsplash.com/photo-1523007806405-59e0a3e12f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      link: '/tanzarten/zumba'
    },
    {
      title: 'Discofox',
      description: 'Der vielseitige Paartanz für alle Musikrichtungen von Schlager bis Charts.',
      image: 'https://images.unsplash.com/photo-1532635248-cdd3d399f56c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      link: '/tanzarten/discofox'
    },
    {
      title: 'Seniorentanz',
      description: 'Altersgerechtes Tanzen mit Freude an der Bewegung und in geselliger Runde.',
      image: 'https://images.unsplash.com/photo-1536825919521-ab78fea0a76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      link: '/kurse/senioren'
    },
    {
      title: 'Hochzeitskurse',
      description: 'Perfekte Vorbereitung für den großen Tag – vom ersten Tanz bis zur Mitternachtsquadrille.',
      image: 'https://images.unsplash.com/photo-1541250848049-b4f9979fe9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      link: '/tanzarten/hochzeitskurse'
    },
    {
      title: 'Spezialkurse',
      description: 'Von Kanga über Parkinson-Tanz bis zu Ladies Dance – für besondere Interessen.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
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
          <img
            src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="Tanzende Gruppe"
            className="w-full h-full object-cover object-center"
          />
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
