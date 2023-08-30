import { Lato, Oswald } from 'next/font/google';

export const oswald = Oswald({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zillaSlab'
});

export const lato = Lato({
  weight: ['300', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});
