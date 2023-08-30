import cx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from './TextLoop.module.scss';

interface Props {
  words: Array<string>;
  className?: string;
}

export default function TextLoop({ words, className }: Props) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      const next = index + 1;
      setIndex(next % words.length);
    }, 3 * 1000);
  }, [index, setIndex, words.length]);

  const variants = {
    initial: {
      opacity: 0,
      height: 0
    },
    animate: {
      zIndex: 1,
      opacity: 1,
      height: 'auto'
    },
    exit: {
      zIndex: 0,
      opacity: 0,
      height: 0
    }
  };

  return (
    <AnimatePresence initial={false}>
      <motion.span
        className={cx(styles.loopWord, className)}
        key={index}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          opacity: { duration: 0.2 }
        }}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  );
}
