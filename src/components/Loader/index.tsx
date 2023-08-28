import { motion } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';

import styles from './Loader.module.scss';

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Loader({ setLoading }: Props) {
  const container = {};

  const image = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2
      }
    }
  };

  return (
    <motion.div
      className={styles.wrapper}
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
    >
      <motion.div className={styles.imgWrapper} variants={image} layoutId="imgWrapper">
        <Image
          src="/images/profile.jpeg"
          alt="profile picture"
          className={styles.profileImg}
          fill
        ></Image>
      </motion.div>
    </motion.div>
  );
}
