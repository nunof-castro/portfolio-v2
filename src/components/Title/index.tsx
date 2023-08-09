import cx from 'classnames';

import { montserrat, zillaSlab } from 'utils/fonts';

import styles from './Title.module.scss';

interface IProps {
  title: string;
  subtitle?: string;
}

export default function Title({ title, subtitle }: IProps) {
  return (
    <div className={styles.titleWrapper}>
      {subtitle && <p className={cx(styles.subtitle, montserrat.className)}>{subtitle}</p>}
      <h3 className={cx(styles.title, zillaSlab.className)}>{title}</h3>
    </div>
  );
}
