
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Clock, Euro, Users, Star, Phone } from 'lucide-react';

const Course = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, you would fetch the course data based on the ID
  // For now, we'll use mock data
  const courseData = {
    title: 'Zumba Fitness',
    image: 'https://images.unsplash.com/photo-1523007806405-59e0a3e12f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    description: 'Zumba ist ein lateinamerikanisch inspiriertes Tanz-Fitness-Workout, das Tanzen und Aerobic verbindet. Die Choreographien kombinieren Hip-Hop, Samba, Salsa, Merengue, Mambo und Bauchtanz. Zumba ist für jeden geeignet, egal ob Anfänger oder Fortgeschrittene.',
    benefits: [
      'Verbessert die Ausdauer und Fitness',
      'Fördert die Beweglichkeit',
      'Stärkt das Herz-Kreislauf-System',
      'Macht einfach Spaß und hebt die Stimmung'
    ],
    schedule: [
      { day: 'Montag', time: '18:00 - 19:00 Uhr', level: 'Anfänger' },
      { day: 'Mittwoch', time: '19:15 - 20:15 Uhr', level: 'Fortgeschrittene' },
      { day: 'Freitag', time: '17:30 - 18:30 Uhr', level: 'Alle Level' }
    ],
    prices: [
      { title: 'Einzelstunde', price: '12 €' },
      { title: '5er-Karte', price: '55 €' },
      { title: '10er-Karte', price: '100 €' },
      { title: 'Monatskarte', price: '45 €' }
    ],
    instructor: 'Uwe Höftmann',
    testimonials: [
      { name: 'Anna, 34', text: 'Zumba macht einfach Spaß! Die Stunde vergeht wie im Flug und man hat gar nicht das Gefühl zu trainieren.' },
      { name: 'Michael, 42', text: 'Ich war skeptisch, ob Zumba etwas für mich ist, aber nach der ersten Stunde war ich begeistert. Tolle Atmosphäre und super Trainer!' },
      { name: 'Sarah, 28', text: 'Seit ich regelmäßig zum Zumba gehe, habe ich nicht nur abgenommen, sondern fühle mich auch viel energiegeladener. Kann ich nur empfehlen!' }
    ]
  };

  const [activeTab, setActiveTab] = React.useState('info');

  return (
    <Layout>
      {/* Hero */}
      <div className="pt-20">
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10" />
          <img
            src={courseData.image}
            alt={courseData.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {courseData.title}
                </h1>
                <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/10 rounded-full">
                  <span className="text-white">Instructor: {courseData.instructor}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="mb-8 border-b border-gray-200">
              <div className="flex flex-wrap -mb-px">
                <button
                  className={`inline-block py-4 px-6 border-b-2 font-medium text-lg transition-colors ${
                    activeTab === 'info'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('info')}
                >
                  Kursinfo
                </button>
                <button
                  className={`inline-block py-4 px-6 border-b-2 font-medium text-lg transition-colors ${
                    activeTab === 'schedule'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('schedule')}
                >
                  Termine
                </button>
                <button
                  className={`inline-block py-4 px-6 border-b-2 font-medium text-lg transition-colors ${
                    activeTab === 'prices'
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveTab('prices')}
                >
                  Preise
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'info' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Über den Kurs</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {courseData.description}
                  </p>
                  
                  <h3 className="text-xl font-bold mb-3">Vorteile</h3>
                  <ul className="space-y-2 mb-6">
                    {courseData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-bold mb-3">Teilnehmerstimmen</h3>
                  <div className="space-y-4">
                    {courseData.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600 italic mb-2">"{testimonial.text}"</p>
                        <p className="text-gray-500 text-sm">– {testimonial.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'schedule' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Kurszeiten</h2>
                  <div className="space-y-4">
                    {courseData.schedule.map((slot, index) => (
                      <div key={index} className="flex items-start p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                        <div className="mr-4 bg-teal-100 p-3 rounded-full">
                          <Calendar className="w-6 h-6 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{slot.day}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{slot.time}</span>
                          </div>
                          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {slot.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-bold mb-3">Hinweise</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <span className="text-gray-600">Bitte 10 Minuten vor Kursbeginn erscheinen.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <span className="text-gray-600">Sportschuhe und bequeme Kleidung mitbringen.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium mr-2">•</span>
                        <span className="text-gray-600">Handtuch und Getränk empfohlen.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {activeTab === 'prices' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Preise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {courseData.prices.map((price, index) => (
                      <div key={index} className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">{price.title}</h3>
                          <div className="flex items-center">
                            <Euro className="w-5 h-5 text-gray-500 mr-1" />
                            <span className="text-xl font-bold">{price.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 bg-teal-50 rounded-xl border border-teal-100">
                    <h3 className="text-xl font-bold mb-3 text-teal-800">Gruppenrabatte</h3>
                    <p className="text-teal-700 mb-4">
                      Komm mit Freunden und sichert euch attraktive Rabatte:
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="block text-2xl font-bold text-teal-700">5%</span>
                        <span className="text-sm text-teal-600">ab 2 Paaren</span>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="block text-2xl font-bold text-teal-700">10%</span>
                        <span className="text-sm text-teal-600">ab 3 Paaren</span>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="block text-2xl font-bold text-teal-700">15%</span>
                        <span className="text-sm text-teal-600">ab 5 Paaren</span>
                      </div>
                    </div>
                    <p className="text-sm text-teal-600">
                      Rabatt pro Person bei gleichzeitiger Anmeldung.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
              <h3 className="text-xl font-bold mb-4">Jetzt anmelden</h3>
              <p className="text-gray-600 mb-6">
                Melde dich für eine kostenlose Probestunde an oder buche direkt deinen Platz im Kurs.
              </p>
              
              <button className="w-full btn-primary mb-3">
                Zum Kurs anmelden
              </button>
              <button className="w-full px-6 py-2.5 border border-teal-500 rounded-lg text-teal-600 hover:bg-teal-50 transition-colors">
                Probestunde buchen
              </button>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-bold mb-3">Fragen zum Kurs?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Kontaktiere uns gerne telefonisch oder per E-Mail.
                </p>
                <div className="flex items-center text-teal-600 font-medium">
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:043211490">04321 - 1 49 00</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Course;
