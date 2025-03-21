
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { X, Music, Users, Coffee } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'saal1' | 'saal2' | 'saal3' | 'foyer';
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const images: GalleryImage[] = [
    // Saal 1
    {
      src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      alt: 'Tanzsaal 1 - Hauptansicht',
      title: 'Saal 1 - Hauptsaal',
      description: 'Unser größter Saal bietet Platz für bis zu 40 Paare und ist perfekt für Standard- und Lateintänze. Der hochwertige Schwingboden schont die Gelenke und sorgt für optimalen Tanzkomfort.',
      category: 'saal1'
    },
    {
      src: 'https://images.unsplash.com/photo-1504884790557-50a2361fab87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: 'Tanzsaal 1 - Abendbeleuchtung',
      title: 'Saal 1 - Abendstimmung',
      description: 'Mit unserer modernen Lichtanlage schaffen wir die perfekte Atmosphäre für Tanzabende und Veranstaltungen. Die stimmungsvolle Beleuchtung lässt sich individuell an jede Veranstaltung anpassen.',
      category: 'saal1'
    },
    {
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Tanzsaal 1 - Bühnenansicht',
      title: 'Saal 1 - Bühnenbereich',
      description: 'Die integrierte Bühne im Hauptsaal eignet sich perfekt für Vorführungen, Präsentationen oder als DJ-Bereich bei Tanzveranstaltungen.',
      category: 'saal1'
    },
    
    // Saal 2
    {
      src: 'https://images.unsplash.com/photo-1504639725590-34d094e3909d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      alt: 'Tanzsaal 2 - Spiegelwand',
      title: 'Saal 2 - Spiegelwand',
      description: 'Der zweite Saal ist mit einer großzügigen Spiegelwand ausgestattet, die besonders für Hip Hop, Zumba und andere moderne Tanzstile optimal ist. Die Teilnehmer können ihre Bewegungen direkt kontrollieren und verbessern.',
      category: 'saal2'
    },
    {
      src: 'https://images.unsplash.com/photo-1578496479932-9444dc56f5d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: 'Tanzsaal 2 - Gesamtansicht',
      title: 'Saal 2 - Gesamtansicht',
      description: 'Ein flexibler Raum für verschiedene Tanzstile und Gruppengrößen. Der hochwertige Parkettboden bietet optimale Bedingungen für alle Arten von Tänzen, von Hip Hop bis Ballett.',
      category: 'saal2'
    },
    
    // Saal 3
    {
      src: 'https://images.unsplash.com/photo-1594125894500-5143e9673a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: 'Tanzsaal 3 - Gemütliche Atmosphäre',
      title: 'Saal 3 - Gemütlicher Raum',
      description: 'Unser intimster Saal bietet eine gemütliche Atmosphäre für kleinere Gruppen und individuelle Trainingseinheiten. Ideal für Privatstunden oder spezielle Kurse wie Seniorentanz.',
      category: 'saal3'
    },
    {
      src: 'https://images.unsplash.com/photo-1533531727135-6e5d00bf97b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: 'Tanzsaal 3 - Detailansicht',
      title: 'Saal 3 - Lichtkonzept',
      description: 'Die warme Beleuchtung sorgt für eine angenehme Atmosphäre und lässt sich individuell dimmen. Perfekt für konzentriertes Üben oder entspannte Tanzstunden.',
      category: 'saal3'
    },
    
    // Foyer
    {
      src: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Foyer - Empfangsbereich',
      title: 'Foyer - Empfangsbereich',
      description: 'Unser großzügiges Foyer dient als zentraler Treffpunkt und Empfangsbereich. Hier kannst du dich vor oder nach dem Unterricht in entspannter Atmosphäre aufhalten.',
      category: 'foyer'
    },
    {
      src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: 'Foyer - Bar',
      title: 'Foyer - Café & Bar',
      description: 'An unserer Bar kannst du verschiedene Getränke und kleine Snacks genießen. Der ideale Ort, um nach dem Tanzen zu entspannen oder neue Kontakte zu knüpfen.',
      category: 'foyer'
    },
    {
      src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      alt: 'Foyer - Sitzbereich',
      title: 'Foyer - Sitzbereich',
      description: 'Gemütliche Sitzecken laden zum Verweilen ein. Hier kannst du dich mit anderen Tänzern austauschen oder einfach eine Pause machen.',
      category: 'foyer'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const filters = [
    { id: 'all', label: 'Alle Räume' },
    { id: 'saal1', label: 'Saal 1', icon: Music },
    { id: 'saal2', label: 'Saal 2', icon: Music },
    { id: 'saal3', label: 'Saal 3', icon: Music },
    { id: 'foyer', label: 'Foyer & Bar', icon: Coffee }
  ];

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
                Unsere Räumlichkeiten
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Entdecke unsere modernen, klimatisierten Tanzsäle und das gemütliche Foyer mit Bar.
              </p>
              <p className="text-lg text-gray-600">
                Drei hochwertig ausgestattete Säle mit erstklassiger Licht- und Tontechnik bieten optimale Bedingungen für alle Tanzarten und Altersgruppen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar space-x-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.icon && <filter.icon className="w-4 h-4 mr-2" />}
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">Keine Bilder für diese Kategorie gefunden.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer shadow-md group"
                  onClick={() => openLightbox(image)}
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-lg font-bold">{image.title}</h3>
                      <p className="text-sm text-white/80 mt-1 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info Sections */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ausstattung & Technik</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unsere Tanzsäle sind mit modernster Technik für ein optimales Tanzerlebnis ausgestattet
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-500">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professionelle Soundanlage</h3>
              <p className="text-gray-600">
                Hochwertige Beschallung in allen Sälen für ein optimales Klangerlebnis. Ausgewogener Sound für jede Musikrichtung, von klassischen Walzern bis zu modernen Beats.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-500">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tanzböden</h3>
              <p className="text-gray-600">
                Schwingböden und hochwertiges Parkett in allen Sälen schonen die Gelenke und bieten optimalen Tanzkomfort. Alle Böden werden regelmäßig gepflegt und gewartet.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-500">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Café & Bar</h3>
              <p className="text-gray-600">
                Unser gemütliches Café mit Bar bietet eine Auswahl an Getränken und kleinen Snacks. Der perfekte Ort, um nach dem Tanzen zu entspannen oder sich mit anderen Tanzbegeisterten auszutauschen.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative max-w-4xl w-full rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
