
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, link, delay = 0 }) => {
  // Check if this is one of our placeholder images
  const isPlaceholder = image.startsWith('/images');
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ y: -5 }}
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        {isPlaceholder || imageError ? (
          <div className="w-full h-full bg-gradient-to-br from-teal-400/30 to-teal-500/40 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-white/80 flex items-center justify-center">
                <span className="text-2xl text-teal-600">{title.charAt(0)}</span>
              </div>
              <span className="text-teal-800 font-medium">{title}</span>
            </div>
          </div>
        ) : (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <Link
          to={link}
          className="group flex items-center font-medium text-teal-500 hover:text-teal-600 transition-colors"
        >
          <span>Mehr erfahren</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
