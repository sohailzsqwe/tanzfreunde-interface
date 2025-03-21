
import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Mail } from 'lucide-react';

interface TeamMember {
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

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Uwe Höftmann',
      role: 'ADTV-Tanzlehrer, ZUMBA-Instructor',
      image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
      description: 'Mit über 20 Jahren Erfahrung leitet Uwe die Tanzschule mit Leidenschaft und Expertise.',
      bio: 'Uwe Höftmann gründete die Tanzschule Family & Friends im Jahr 2002 und hat seitdem tausende Schüler für das Tanzen begeistert. Er ist zertifizierter ADTV-Tanzlehrer und ZUMBA-Instructor. Seine besondere Stärke liegt in der Vermittlung von Standard- und Lateintänzen sowie in der motivierenden Leitung von Fitnesskursen wie Zumba.',
      specialties: ['Standardtänze', 'Zumba', 'Fitnesskurse'],
      social: {
        instagram: '#',
        facebook: '#',
        email: 'uwe@tanzschule-family-and-friends.de'
      }
    },
    {
      name: 'Laura Schmidt',
      role: 'ADTV-Tanzlehrerin',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80',
      description: 'Laura begeistert besonders Kinder und Jugendliche mit ihrem modernen Unterrichtsstil.',
      bio: 'Laura ist seit 2015 Teil unseres Teams. Mit ihrer offenen und herzlichen Art schafft sie es besonders gut, Kinder und Jugendliche für das Tanzen zu begeistern. Laura hat eine Ausbildung zur ADTV-Tanzlehrerin absolviert und bildet sich kontinuierlich in modernen Tanzstilen weiter. Ihre Hip-Hop-Kurse sind regelmäßig ausgebucht.',
      specialties: ['Kindertanz', 'Hip Hop', 'Hochzeitskurse'],
      social: {
        instagram: '#',
        email: 'laura@tanzschule-family-and-friends.de'
      }
    },
    {
      name: 'Michael Becker',
      role: 'Tanzlehrer, Hip-Hop-Spezialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      description: 'Michael bringt frischen Wind und urbane Tanzstile in unser Kursprogramm.',
      bio: 'Bevor Michael zu unserer Tanzschule kam, war er bereits erfolgreich als Street-Dance-Performer und Choreograph tätig. Er bringt frischen Wind und die neuesten Trends aus der urbanen Tanzszene in unser Kursprogramm. Seine Breakdance- und Hip-Hop-Kurse sind besonders bei Jugendlichen und jungen Erwachsenen beliebt.',
      specialties: ['Hip Hop', 'Breakdance', 'Urban Styles'],
      social: {
        instagram: '#',
        facebook: '#',
        email: 'michael@tanzschule-family-and-friends.de'
      }
    },
    {
      name: 'Sabine Müller',
      role: 'Seniorentanz-Expertin',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
      description: 'Mit viel Geduld und Herzlichkeit leitet Sabine unsere beliebten Seniorenkurse.',
      bio: 'Sabine hat sich auf altersgerechtes Tanzen spezialisiert und leitet mit viel Geduld und Herzlichkeit unsere beliebten Seniorenkurse. Sie legt besonderen Wert auf die gesundheitlichen Aspekte des Tanzens und passt die Choreographien individuell an die Bedürfnisse der Teilnehmer an. Ihre Kurse verbinden Tanzen mit sozialer Interaktion und haben eine treue Anhängerschaft.',
      specialties: ['Seniorentanz', 'Discofox', 'Gesellschaftstänze'],
      social: {
        email: 'sabine@tanzschule-family-and-friends.de'
      }
    },
    {
      name: 'Thomas Weber',
      role: 'Tanzlehrer für Standard & Latein',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      description: 'Als ehemaliger Turniertänzer bringt Thomas Präzision und Eleganz in unsere Standard- und Lateinkurse.',
      bio: 'Thomas blickt auf eine erfolgreiche Karriere als Turniertänzer zurück und hat zahlreiche regionale und überregionale Wettbewerbe gewonnen. Seine fundierte Technik und sein Auge für Details machen ihn zum perfekten Lehrer für ambitionierte Paare und diejenigen, die Wert auf eine präzise Ausführung der Tänze legen.',
      specialties: ['Standard', 'Latein', 'Turniervorbereitung'],
      social: {
        facebook: '#',
        email: 'thomas@tanzschule-family-and-friends.de'
      }
    },
    {
      name: 'Nina Krüger',
      role: 'Tanz- und Fitnesslehrerin',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Nina verbindet in ihren Kursen Tanzelemente mit effektivem Fitnesstraining.',
      bio: 'Nina ist ausgebildete Tanz- und Fitnesslehrerin und verbindet in ihren Kursen das Beste aus beiden Welten. Ihre dynamischen Workouts zu motivierender Musik sind schweißtreibend, machen aber so viel Spaß, dass man die Anstrengung kaum spürt. Neben Zumba und Kanga leitet Nina auch spezielle Kurse für Schwangere und junge Mütter.',
      specialties: ['Zumba', 'Kanga', 'Pre- & Postnatal'],
      social: {
        instagram: '#',
        email: 'nina@tanzschule-family-and-friends.de'
      }
    }
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
                Unser Team
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Bei uns unterrichten ausschließlich qualifizierte Tanzlehrer mit langjähriger Erfahrung und Leidenschaft für ihren Beruf.
              </p>
              <p className="text-lg text-gray-600">
                Jeder bringt seine eigene Persönlichkeit und Expertise ein, um dir ein abwechslungsreiches und professionelles Tanzerlebnis zu bieten.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
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
            ))}
          </div>
        </div>
      </div>

      {/* Join us section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Werde Teil unseres Teams</h2>
            <p className="text-lg text-gray-600 mb-8">
              Du bist Tanzlehrer oder möchtest es werden? Wir sind immer auf der Suche nach talentierten und motivierten Menschen, die unsere Leidenschaft fürs Tanzen teilen.
            </p>
            <a 
              href="mailto:jobs@tanzschule-family-and-friends.de" 
              className="btn-primary inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Initiativbewerbung senden
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
