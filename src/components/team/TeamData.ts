
import { TeamMember } from './TeamMemberCard';

// Team members data moved to a separate file
export const teamMembers: TeamMember[] = [
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
