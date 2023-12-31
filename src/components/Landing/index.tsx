'use client';

import cx from 'classnames';
import { AnimatePresence, LayoutGroup, easeIn, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BiLogoGithub, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitch } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

import Loader from 'components/Loader';
import useWindowSize from 'hooks/useWindowSize';
import { ISocialMedia } from 'types/common';

import styles from './Landing.module.scss';

export default function Landing() {
  const [loading, setLoading] = useState<boolean>(true);
  const { width } = useWindowSize();

  const socialMedia: ISocialMedia[] = [
    {
      name: 'github',
      link: 'https://github.com/nunof-castro',
      icon: (
        <BiLogoGithub
          className={styles.icon}
          size={width && width > 480 ? 25 : 20}
          title={'github'}
        />
      )
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/nunof-castro/',
      icon: (
        <BiLogoLinkedin
          className={styles.icon}
          size={width && width > 480 ? 25 : 20}
          title={'linkedin'}
        />
      )
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/nunocosta.13/',
      icon: (
        <BiLogoInstagramAlt
          className={styles.icon}
          size={width && width > 480 ? 25 : 20}
          title={'instagram'}
        />
      )
    },
    {
      name: 'twitch',
      link: 'https://www.twitch.tv/nunodcastro',
      icon: (
        <BiLogoTwitch
          className={styles.icon}
          size={width && width > 480 ? 25 : 20}
          title={'twitch'}
        />
      )
    }
  ];

  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = 'hidden';
    } else {
      const arrowText = document.querySelector('.arrowText p') as HTMLElement;
      document.body.style.overflowY = 'scroll';

      arrowText.innerHTML = arrowText?.innerText
        .split('')
        .map((char, index) => `<span style="transform:rotate(${index * 16}deg)">${char}</span>`)
        .join('');
    }
  }, [loading]);

  const letters = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const lettersItem = {
    initial: {
      x: 450,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: easeIn,
        duration: 0.6
      }
    }
  };

  const bars = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        ease: easeIn,
        duration: 1
      }
    }
  };

  return (
    <LayoutGroup>
      <AnimatePresence mode="popLayout" initial={false}>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <div className={styles.wrapper}>
            <motion.div
              variants={bars}
              initial="initial"
              animate="animate"
              className={styles.topBar}
            >
              <div className={styles.socialMediaIcons}>
                {socialMedia.map(({ name, link, icon }) => (
                  <a key={name} href={link} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                ))}
              </div>
              {width && width > 480 && <p className={styles.location}>based in OPorto</p>}
            </motion.div>
            <div className={styles.content}>
              <motion.h1
                variants={letters}
                initial="initial"
                animate="animate"
                className={styles.name}
              >
                <motion.span variants={lettersItem} className={styles.nameSpan}>
                  NU
                </motion.span>
                <motion.span variants={lettersItem} className={styles.nameSpan}>
                  NO
                </motion.span>
              </motion.h1>
              {width && width <= 480 && <h2 className={styles.role}>Software Developer</h2>}
              <motion.div className={styles.imgWrapper} layoutId="imgWrapper">
                <Image
                  src="/images/profile.jpeg"
                  alt="profile picture"
                  className={styles.profileImg}
                  fill
                />
              </motion.div>
            </div>
            <motion.div
              variants={bars}
              initial="initial"
              animate="animate"
              className={styles.bottomBar}
            >
              {width && width > 480 && <h2 className={styles.role}>Software Developer</h2>}
              <span className={styles.circle}>
                <div className={styles.arrow}>
                  <FiChevronDown size={25} />
                </div>
                <div className={cx(styles.text, 'arrowText')}>
                  <p>About Me - About Me -</p>
                </div>
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
