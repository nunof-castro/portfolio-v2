'use client';

import cx from 'classnames';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
// import { useEffect,  useState } from 'react';
// import { ICertificate } from 'common/types';

import Button from 'components/Button';
import TextLoop from 'components/TextLoop';
import { lato } from 'utils/fonts';
// import { getFirebaseCollection } from 'utils/firestore';

import styles from './About.module.scss';

export default function About() {
  // const [certificates, setCertificates] = useState<ICertificate[]>();

  // useEffect(() => {
  //   const getCertificates = async () =>
  //     setCertificates(await getFirebaseCollection<ICertificate>('certificates'));

  //   getCertificates();
  // }, []);

  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['0 1', '1.33 1']
  });

  const loopWords: Array<string> = ['ambitious', 'devoted', 'motivated'];

  return (
    <motion.section
      style={{
        opacity: scrollYProgress
      }}
      className={styles.wrapper}
      ref={aboutRef}
    >
      <div className={styles.loopWrapper}>
        <TextLoop words={loopWords} className={styles.loopText} />
      </div>
      <p className={cx(styles.description, lato.className)}>
        are traits that define my work ethic and modus operandi. I will always reach for a great
        work environment as my social soft skills combined with my commitment, make business and
        inter-personal relationships natural.
      </p>
      <p className={cx(styles.description, styles.secondParagraph, lato.className)}>
        I present myself as a full-stack developer with experience on web development and API
        integration.
      </p>
      <Button
        href="assets/curriculum_vitae.pdf"
        text="Curriculum Vitae"
        className={styles.button}
      />
    </motion.section>
  );
}
