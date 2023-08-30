import type { Metadata } from 'next';

import 'styles/globals.scss';
import { lato, oswald } from 'utils/fonts';

export const metadata: Metadata = {
  title: 'Nuno de Castro - Full-Stack Developer',
  description: 'desc'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={(lato.className, oswald.className)}>{children}</body>
    </html>
  );
}
