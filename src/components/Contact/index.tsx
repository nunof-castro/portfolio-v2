'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

import TextLoop from 'components/TextLoop';

import styles from './Contact.module.scss';

export default function Contact() {
  const words: Array<string> = ['Web Development', 'Web Design', 'SEO Optimization'];

  const contactRef = useRef<HTMLElement>(null);
  const sectionUseScroll = useScroll({
    target: contactRef,
    offset: ['0 1', '0.5 1']
  });

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
        <a href="mailto: nunocos125@gmail.com" className={styles.email}>
          nunocos125@gmail.com
        </a>
      </div>
    </motion.section>
  );
}
