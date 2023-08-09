'use client';
import cx from 'classnames';
import { BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedin } from 'react-icons/bi';

import useScrollPosition from 'hooks/useScrollPosition';
import { zillaSlab } from 'utils/fonts';

import styles from './Navbar.module.scss';

interface ISocialMedia {
  name: 'github' | 'linkedin' | 'instagram';
  link: string;
  icon: JSX.Element;
}

export default function Navbar() {
  const labelLinks = ['home', 'about me', 'projects', 'contact me'];
  const scrollPos = useScrollPosition();

  //FIXME
  //change color prop
  const socialMedia: ISocialMedia[] = [
    {
      name: 'github',
      link: 'https://github.com/nunof-castro',
      icon: <BiLogoGithub className={styles.icon} color="#666666" size={25} title={'github'} />
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/nunof-castro/',
      icon: <BiLogoLinkedin className={styles.icon} color="#666666" size={25} title={'linkedin'} />
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/nunocosta.13/',
      icon: (
        <BiLogoInstagramAlt className={styles.icon} color="#666666" size={25} title={'instagram'} />
      )
    }
  ];

  return (
    <div
      className={cx(styles.navbar, zillaSlab.className, {
        [styles.scrolled]: scrollPos > 0
      })}
    >
      <div className={styles.socialMediaIcons}>
        {socialMedia.map(({ name, link, icon }) => (
          <a key={name} href={link} target="_blank" rel="noreferrer">
            {icon}
          </a>
        ))}
      </div>
      <ul className={styles.navLinks}>
        {labelLinks.map((link) => (
          <li key={link} className={styles.link}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
