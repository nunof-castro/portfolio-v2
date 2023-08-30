import type { Metadata } from 'next';

import 'styles/globals.scss';
import { lato, oswald } from 'utils/fonts';

export const metadata: Metadata = {
  title: 'Nuno de Castro - Full-Stack Developer',
  description:
    'Develop responsive and high performance websites and help you with deployment. I present myself as software developer'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={(lato.className, oswald.className)}>{children}</body>
    </html>
  );
}
