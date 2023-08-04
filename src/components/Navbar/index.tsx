'use client';

import cx from 'classnames';
import { useEffect } from 'react';

import useScrollPosition from 'hooks/useScrollPosition';
import { zillaSlab } from 'utils/fonts';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const labelLinks = ['home', 'about me', 'projects', 'contact me'];
  const scrollPos = useScrollPosition();

  return (
    <div
      className={cx(styles.navbar, zillaSlab.className, {
        [styles.scrolled]: scrollPos > 0
      })}
    >
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
