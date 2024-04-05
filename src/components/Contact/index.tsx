'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { BiLogoInstagramAlt, BiLogoLinkedin } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

import TextLoop from 'components/TextLoop';
import { ISocialMedia } from 'types/common';

import styles from './Contact.module.scss';

export default function Contact() {
  const words: Array<string> = ['Web Development', 'Web Design', 'SEO Optimization'];

  const contactRef = useRef<HTMLElement>(null);
  const sectionUseScroll = useScroll({
    target: contactRef,
    offset: ['0 1', '0.5 1']
  });

  const socialMedia: ISocialMedia[] = [
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/nunof-castro/',
      icon: <BiLogoLinkedin className={styles.icon} size={25} title={'linkedin'} />
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/nunocosta.13/',
      icon: <BiLogoInstagramAlt className={styles.icon} size={25} title={'instagram'} />
    },
    {
      name: 'email',
      link: 'mailto: nunocos125@gmail.com',
      icon: <MdEmail className={styles.icon} size={25} title={'email'} />
    }
  ];

  return (
    <motion.section
      className={styles.wrapper}
      ref={contactRef}
      style={{
        opacity: sectionUseScroll.scrollYProgress
      }}
    >
      <p className={styles.title}>fall in my dms</p>
      <p className={styles.msg}>even if you only need someone to talk</p>
      <div className={styles.rightBlock}>
        <TextLoop words={words} className={styles.textLoop} />
        <div className={styles.socialMediaIcons}>
          {socialMedia.map(({ name, link, icon }) => (
            <a key={name} href={link} target="_blank" rel="noreferrer">
              {icon}
            </a>
          ))}
        </div>
        {/* <a href="mailto: nunocos125@gmail.com" className={styles.email}>
          nunocos125@gmail.commmm
        </a> */}
      </div>
    </motion.section>
  );
}
