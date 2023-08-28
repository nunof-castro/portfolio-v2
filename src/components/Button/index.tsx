import cx from 'classnames';

import styles from './Button.module.scss';

interface Props {
  text: string;
  href?: string;
  className?: string;
}

export default function Button({ text, href, className }: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={cx(styles.btn, className)}>
      {text}
    </a>
  );
}
