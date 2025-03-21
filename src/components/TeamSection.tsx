
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  specialties: string[];
  social?: {
    instagram?: string;
    facebook?: string;
  };
}

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Uwe Höftmann',
      role: 'ADTV-Tanzlehrer, ZUMBA-Instructor',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
      description: 'Mit über 20 Jahren Erfahrung leitet Uwe die Tanzschule mit Leidenschaft und Expertise.',
      specialties: ['Standardtänze', 'Zumba', 'Fitnesskurse'],
      social: {
        instagram: '#',
        facebook: '#'
      }
    },
    {
      name: 'Laura Schmidt',
      role: 'ADTV-Tanzlehrerin',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80',
      description: 'Laura begeistert besonders Kinder und Jugendliche mit ihrem modernen Unterrichtsstil.',
      specialties: ['Kindertanz', 'Hip Hop', 'Hochzeitskurse'],
      social: {
        instagram: '#'
      }
    },
    {
      name: 'Michael Becker',
      role: 'Tanzlehrer, Hip-Hop-Spezialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      description: 'Michael bringt frischen Wind und urbane Tanzstile in unser Kursprogramm.',
      specialties: ['Hip Hop', 'Breakdance', 'Urban Styles'],
      social: {
        instagram: '#',
        facebook: '#'
      }
    },
    {
      name: 'Sabine Müller',
      role: 'Seniorentanz-Expertin',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      description: 'Mit viel Geduld und Herzlichkeit leitet Sabine unsere beliebten Seniorenkurse.',
      specialties: ['Seniorentanz', 'Discofox', 'Gesellschaftstänze'],
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Unser Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lerne unsere erfahrenen und qualifizierten Tanzlehrer kennen, die dich mit Leidenschaft und Expertise begleiten
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
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
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
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
              to="/team"
              className="btn-primary inline-flex items-center"
            >
              Ganzes Team kennenlernen
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
