
import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarCheck, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
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
                Kontakt & Anfahrt
              </h1>
              <p className="text-xl text-gray-600">
                Wir freuen uns auf dich! Besuche uns in der Tanzschule oder kontaktiere uns für weitere Informationen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">So erreichst du uns</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-50 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Adresse</h3>
                      <p className="text-gray-600">Georg-Fuhg-Straße 6</p>
                      <p className="text-gray-600">24537 Neumünster</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-50 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telefon</h3>
                      <p className="text-gray-600">
                        <a href="tel:043211490" className="hover:text-teal-600 transition-colors">
                          04321 - 1 49 00
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-50 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">E-Mail</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@tanzschule-family-and-friends.de" className="hover:text-teal-600 transition-colors break-words">
                          info@tanzschule-family-and-friends.de
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-50 p-3 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Öffnungszeiten</h3>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mo - Fr:</span>
                          <span className="text-gray-600">15:00 - 22:00 Uhr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sa:</span>
                          <span className="text-gray-600">10:00 - 16:00 Uhr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">So:</span>
                          <span className="text-gray-600">Nach Vereinbarung</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Unterricht nach Stundenplan. Büro besetzt: Mo-Fr 15:00-20:00 Uhr.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">So findest du uns</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.7738459552164!2d9.97511731558952!3d53.99873448011237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b21aad66b1dfd7%3A0x27c1c96e97eae6c7!2sGeorg-Fuhg-Str.%206%2C%2024537%20Neum%C3%BCnster%2C%20Germany!5e0!3m2!1sen!2s!4v1651234567890!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort der Tanzschule"
                    className="w-full h-full"
                  />
                </div>
                <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Anfahrt</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Mit dem Auto: Kostenlose Parkplätze direkt vor der Tanzschule verfügbar.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">•</span>
                      <span>Mit öffentlichen Verkehrsmitteln: Bushaltestelle "Großflecken" in 5 Gehminuten erreichbar.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4 text-4xl text-teal-500">
                    <MessageSquare className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Kontaktiere uns</h2>
                    <p className="text-gray-600">Wir antworten so schnell wie möglich</p>
                  </div>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors"
                        placeholder="Dein Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors"
                        placeholder="deine@email.de"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors"
                      placeholder="Deine Telefonnummer"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Betreff</label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors"
                      required
                    >
                      <option value="">Bitte auswählen</option>
                      <option value="kursinfo">Kursinfos</option>
                      <option value="probestunde">Probestunde</option>
                      <option value="anmeldung">Anmeldung</option>
                      <option value="gutschein">Gutschein</option>
                      <option value="other">Sonstiges</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors resize-none"
                      placeholder="Deine Nachricht an uns..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-primary"
                    >
                      Nachricht senden
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="mt-10 bg-coral-50 p-8 rounded-xl border border-coral-100">
                <div className="flex items-center mb-4">
                  <CalendarCheck className="w-8 h-8 text-coral-500 mr-3" />
                  <h2 className="text-2xl font-bold">Probestunde buchen</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Du möchtest unsere Tanzschule kennenlernen? Buche eine unverbindliche Probestunde und überzeuge dich selbst von unserem Angebot.
                </p>
                <a
                  href="/probestunde"
                  className="btn-accent w-full inline-block text-center"
                >
                  Jetzt Probestunde vereinbaren
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Häufige Fragen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Antworten auf die am häufigsten gestellten Fragen
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-6">
                <h3 className="text-lg font-bold mb-2">
                  Wie kann ich mich für einen Kurs anmelden?
                </h3>
                <p className="text-gray-600">
                  Du kannst dich direkt in unserer Tanzschule, telefonisch unter 04321 - 1 49 00 oder über unser Online-Formular anmelden. Wir empfehlen, vorher eine unverbindliche Probestunde zu besuchen.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-bold mb-2">
                  Muss ich mit einem Partner/einer Partnerin kommen?
                </h3>
                <p className="text-gray-600">
                  Für Paartanzkurse ist ein Tanzpartner empfehlenswert, aber nicht zwingend erforderlich. Wir versuchen, Singles zu vermitteln. Für Kurse wie Zumba, Hip Hop oder Kindertanz benötigst du keinen Partner.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-bold mb-2">
                  Welche Kleidung ist für den Tanzkurs geeignet?
                </h3>
                <p className="text-gray-600">
                  Trage bequeme Kleidung, in der du dich gut bewegen kannst. Für Standard- und Lateintänze sind Schuhe mit glatter Sohle ideal. Für Zumba und Hip Hop eignen sich Sportschuhe. Spezielle Tanzschuhe sind nicht erforderlich.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-bold mb-2">
                  Kann ich eine Stunde nachholen, wenn ich einmal fehle?
                </h3>
                <p className="text-gray-600">
                  Versäumte Stunden können in einem parallel laufenden Kurs nachgeholt werden. Bitte melde dich vorher im Büro an, damit wir sicherstellen können, dass genügend Platz vorhanden ist.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-bold mb-2">
                  Gibt es Rabatte für Schüler, Studenten oder Gruppen?
                </h3>
                <p className="text-gray-600">
                  Ja, wir bieten verschiedene Ermäßigungen an. Schüler und Studenten erhalten gegen Vorlage eines entsprechenden Ausweises Rabatt. Für Gruppen gelten besondere Konditionen, je nach Gruppengröße.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
