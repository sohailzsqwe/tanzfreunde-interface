
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';

const Courses = () => {
  const courseCategories = [
    {
      title: 'Nach Altersgruppen',
      courses: [
        {
          title: 'Kindertanz',
          description: 'Spielerisch die Freude am Tanzen entdecken und dabei motorische Fähigkeiten entwickeln.',
          image: '/images/courses/children-dance.jpg',
          link: '/kurse/kinder'
        },
        {
          title: 'Jugendtanz',
          description: 'Coole Moves und aktuelle Trends für Teenager mit viel Energie und Rhythmusgefühl.',
          image: '/images/courses/hiphop-youth.jpg',
          link: '/kurse/jugendliche'
        },
        {
          title: 'Erwachsenenkurse',
          description: 'Von Anfängern bis Fortgeschrittene - die ganze Vielfalt des Tanzens für Erwachsene jeden Alters.',
          image: '/images/courses/ballroom.jpg',
          link: '/kurse/erwachsene'
        },
        {
          title: 'Seniorentanz',
          description: 'Altersgerechtes Tanzen mit Freude an der Bewegung und in geselliger Runde.',
          image: '/images/courses/senior-dance.jpg',
          link: '/kurse/senioren'
        }
      ]
    },
    {
      title: 'Nach Tanzstil',
      courses: [
        {
          title: 'Discofox',
          description: 'Der vielseitige Paartanz für alle Musikrichtungen von Schlager bis Charts.',
          image: '/images/courses/discofox.jpg',
          link: '/tanzarten/discofox'
        },
        {
          title: 'Zumba Fitness',
          description: 'Das beliebte Tanz-Fitness-Workout mit mitreißenden lateinamerikanischen Rhythmen.',
          image: '/images/courses/zumba.jpg',
          link: '/tanzarten/zumba'
        },
        {
          title: 'Hip Hop',
          description: 'Urbane Tanzstile, coole Moves und aktuelle Trends aus der Hip-Hop-Szene.',
          image: '/images/courses/hiphop-youth.jpg',
          link: '/tanzarten/hip-hop'
        },
        {
          title: 'Standard & Latein',
          description: 'Von Langsamer Walzer bis Jive – klassische Tänze für Paare jeden Alters.',
          image: '/images/courses/ballroom.jpg',
          link: '/tanzarten/standard-latein'
        }
      ]
    },
    {
      title: 'Spezialangebote',
      courses: [
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
        },
        {
          title: 'Privatstunden',
          description: 'Individueller Tanzunterricht für Paare oder Einzelpersonen nach Terminabsprache.',
          image: '/images/courses/private-lessons.jpg',
          link: '/kurse/privatstunden'
        },
        {
          title: 'Events & Workshops',
          description: 'Spezielle Veranstaltungen, Themenkurse und intensive Workshops zu bestimmten Tanzstilen.',
          image: '/images/courses/workshops.jpg',
          link: '/kurse/events'
        }
      ]
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
                Unsere Kurse
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Bei Family & Friends findest du eine Vielzahl an Tanzkursen für jedes Alter und jeden Geschmack.
              </p>
              <p className="text-lg text-gray-600">
                Wähle aus über 30 verschiedenen Kursen und entdecke deine Leidenschaft fürs Tanzen oder verbessere deine Fähigkeiten.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Categories */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {courseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.courses.map((course, courseIndex) => (
                  <CourseCard
                    key={courseIndex}
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    link={course.link}
                    delay={courseIndex * 0.1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Noch Fragen zu unseren Kursen?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Unsere Tanzlehrer beraten dich gerne persönlich und helfen dir, den perfekten Kurs zu finden.
            </p>
            <Link
              to="/kontakt"
              className="btn-primary inline-flex items-center"
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
