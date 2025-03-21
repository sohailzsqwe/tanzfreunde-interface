
export interface NavItem {
  title: string;
  link?: string;
  dropdown: boolean;
  id?: string;
  items?: { title: string; link: string }[];
}

export const navLinks: NavItem[] = [
  {
    title: 'Kurse',
    dropdown: true,
    id: 'courses',
    items: [
      { title: 'Kinder', link: '/kurse/kinder' },
      { title: 'Jugendliche', link: '/kurse/jugendliche' },
      { title: 'Erwachsene', link: '/kurse/erwachsene' },
      { title: 'Senioren', link: '/kurse/senioren' },
      { title: 'Spezialkurse', link: '/kurse/spezialkurse' },
    ],
  },
  {
    title: 'Tanzarten',
    dropdown: true,
    id: 'dance-styles',
    items: [
      { title: 'Discofox', link: '/tanzarten/discofox' },
      { title: 'Zumba', link: '/tanzarten/zumba' },
      { title: 'Hip Hop', link: '/tanzarten/hip-hop' },
      { title: 'Standard & Latein', link: '/tanzarten/standard-latein' },
      { title: 'Hochzeitskurse', link: '/tanzarten/hochzeitskurse' },
    ],
  },
  { title: 'Team', link: '/team', dropdown: false },
  { title: 'Räumlichkeiten', link: '/gallery', dropdown: false },
  { title: 'Angebote', link: '/angebote', dropdown: false },
  { title: 'Kontakt', link: '/kontakt', dropdown: false },
];
