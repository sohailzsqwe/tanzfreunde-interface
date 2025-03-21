
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Kontakt & Anfahrt</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wir freuen uns auf dich! Buche eine Probestunde oder kontaktiere uns für weitere Informationen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
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
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">So findest du uns</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">Georg-Fuhg-Straße 6</p>
                    <p className="text-gray-600">24537 Neumünster</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:043211490" className="text-gray-600 hover:text-teal-500 transition-colors">04321 - 1 49 00</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <a href="mailto:info@tanzschule-family-and-friends.de" className="text-gray-600 hover:text-teal-500 transition-colors break-words">
                      info@tanzschule-family-and-friends.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-teal-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Öffnungszeiten</p>
                    <p className="text-gray-600">Mo - Fr: 15:00 - 22:00 Uhr</p>
                    <p className="text-gray-600">Sa: 10:00 - 16:00 Uhr</p>
                    <p className="text-gray-600">So: Nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-4">Probestunde buchen</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Kurs</label>
                <select
                  id="course"
                  name="course"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors"
                  required
                >
                  <option value="">Bitte auswählen</option>
                  <option value="standard">Standard & Latein</option>
                  <option value="discofox">Discofox</option>
                  <option value="hiphop">Hip Hop</option>
                  <option value="zumba">Zumba</option>
                  <option value="kinder">Kindertanz</option>
                  <option value="senioren">Seniorentanz</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-200 focus:border-teal-500 transition-colors"
                  placeholder="Deine Nachricht an uns..."
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Probestunde anfragen
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
