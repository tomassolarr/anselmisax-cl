export const SITE = {
  title: 'Javiera Anselmi | Saxofonista',
  description:
    'Saxofonista en Chile. Música en vivo para matrimonios, cócteles y eventos corporativos. Clases de saxofón presenciales y online.',
};

export const ARTIST = {
  name: 'Javiera Anselmi',
  alias: 'Anselmi Sax',
  email: 'hola@anselmisax.cl',
  phoneDisplay: '+56 9 5003 2876',
  phoneRaw: '56950032876',
  instagram: '@javiera.anselmi.saxo',
  city: 'Chile',
  web: 'www.anselmisax.cl',
};

export const SOCIAL = {
  instagram: 'https://instagram.com/javiera.anselmi.saxo',
  tiktok: 'https://tiktok.com/@javiera.anselmi.saxo',
  youtube: 'https://youtube.com/@anselmisax',
  spotify: 'https://open.spotify.com/artist/anselmisax',
};

export function waLink(message: string) {
  return `https://wa.me/${ARTIST.phoneRaw}?text=${encodeURIComponent(message)}`;
}