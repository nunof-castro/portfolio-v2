import cx from 'classnames';
import Image from 'next/image';

import { montserrat } from 'utils/fonts';

import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.imgWrapper}>
          <Image
            src="/images/profile.jpeg"
            alt="profile picture"
            fill
            className={styles.profileImg}
          />
        </div>
        <div className={cx(styles.bio, montserrat.className)}>
          <h2 className={styles.position}>Full-Stack Developer</h2>
          <div className={styles.name}>
            <label>nu</label>
            <label>no</label>
          </div>
        </div>
      </div>
    </div>
  );
}
