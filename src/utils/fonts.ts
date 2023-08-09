import { Montserrat, Zilla_Slab } from 'next/font/google';

export const zillaSlab = Zilla_Slab({
  weight: ['300', '400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zillaSlab'
});

export const montserrat = Montserrat({
  weight: ['300', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});
