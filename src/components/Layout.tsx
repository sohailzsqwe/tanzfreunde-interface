
import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow"
      >
        {children}
      </motion.main>
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto py-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">ADTV Tanzschule</h3>
              <p className="text-sm text-gray-600">Family & Friends</p>
              <p className="text-sm text-gray-600 mt-2">Mitglied im Allgemeinen Deutschen Tanzlehrerverband e.V.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <p className="text-sm text-gray-600">Georg-Fuhg-Straße 6</p>
              <p className="text-sm text-gray-600">24537 Neumünster</p>
              <p className="text-sm text-gray-600 mt-2">Tel: 04321 - 1 49 00</p>
              <p className="text-sm text-gray-600">info@tanzschule-family-and-friends.de</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Öffnungszeiten</h3>
              <p className="text-sm text-gray-600">Mo - Fr: 15:00 - 22:00 Uhr</p>
              <p className="text-sm text-gray-600">Sa: 10:00 - 16:00 Uhr</p>
              <p className="text-sm text-gray-600">So: Nach Vereinbarung</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Rechtliches</h3>
              <ul className="space-y-2">
                <li><a href="/impressum" className="text-sm text-gray-600 hover:text-teal-500 transition-colors">Impressum</a></li>
                <li><a href="/datenschutz" className="text-sm text-gray-600 hover:text-teal-500 transition-colors">Datenschutz</a></li>
                <li><a href="/agb" className="text-sm text-gray-600 hover:text-teal-500 transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ADTV Tanzschule Family & Friends. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
