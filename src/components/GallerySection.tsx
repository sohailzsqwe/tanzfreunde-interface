
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      src: '/images/facilities/dance-hall-1.jpg',
      alt: 'Tanzsaal 1',
      title: 'Saal 1',
      description: 'Unser größter Saal bietet Platz für bis zu 40 Paare und ist perfekt für Standardtänze.'
    },
    {
      src: '/images/facilities/dance-hall-2.jpg',
      alt: 'Tanzsaal 2',
      title: 'Saal 2',
      description: 'Mit modernen Spiegeln und hochwertigem Parkettboden ideal für Hip Hop und moderne Tänze.'
    },
    {
      src: '/images/facilities/dance-hall-3.jpg',
      alt: 'Tanzsaal 3',
      title: 'Saal 3',
      description: 'Unser intimster Saal bietet eine gemütliche Atmosphäre für kleinere Gruppen.'
    },
    {
      src: '/images/facilities/foyer.jpg',
      alt: 'Foyer',
      title: 'Foyer & Bar',
      description: 'Entspanne dich vor oder nach dem Unterricht in unserem gemütlichen Foyer mit Bar.'
    }
  ];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Unsere Räumlichkeiten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Moderne, klimatisierte Tanzsäle mit erstklassiger Ausstattung für das optimale Tanzerlebnis
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden cursor-pointer shadow-md group"
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-w-3 aspect-h-2">
                {image.src.startsWith('/images') ? (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="text-3xl text-gray-500 mb-2">{index + 1}</div>
                      <h3 className="text-lg font-bold text-gray-700">{image.title}</h3>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
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
              to="/gallery"
              className="btn-primary inline-flex items-center"
            >
              Alle Räumlichkeiten ansehen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
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
            {selectedImage.src.startsWith('/images') ? (
              <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300">{selectedImage.description}</p>
                </div>
              </div>
            ) : (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-6">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
