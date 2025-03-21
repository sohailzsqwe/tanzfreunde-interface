
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  specialties: string[];
  bio?: string;
  social?: {
    instagram?: string;
    facebook?: string;
    email?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-center"
        />
        {member.social && (
          <div className="absolute top-4 right-4 flex space-x-2">
            {member.social.instagram && (
              <a 
                href={member.social.instagram} 
                className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                aria-label={`${member.name} auf Instagram`}
              >
                <Instagram className="w-4 h-4 text-gray-800" />
              </a>
            )}
            {member.social.facebook && (
              <a 
                href={member.social.facebook} 
                className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                aria-label={`${member.name} auf Facebook`}
              >
                <Facebook className="w-4 h-4 text-gray-800" />
              </a>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-teal-500 font-medium text-sm mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.bio || member.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member.specialties.map((specialty, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        {member.social?.email && (
          <a 
            href={`mailto:${member.social.email}`} 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Kontakt aufnehmen</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
