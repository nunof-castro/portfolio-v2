'use client';

import cx from 'classnames';
import { useEffect, useState } from 'react';

import { ICertificate } from 'common/types';
import Title from 'components/Title';
import { getFirebaseCollection } from 'utils/firestore';
import { zillaSlab } from 'utils/fonts';

import styles from './About.module.scss';

export default function About() {
  const [certificates, setCertificates] = useState<ICertificate[]>();

  useEffect(() => {
    const getCertificates = async () =>
      setCertificates(await getFirebaseCollection<ICertificate>('certificates'));

    getCertificates();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title title="Who Am I" />
      <div className={styles.bio}>
        <div className={styles.info}>
          <p>
            I have been part of <a href="https://www.mog-technologies.com/">MOG Technologies</a>{' '}
            team since early 2022. Ambitious, devoted and motivated are traits that define my work
            ethic and modus operandi. I will always reach for a great work environment as my social
            soft skills combined with my commitment, make business and inter-personal relationships
            natural.
          </p>
          <p>
            I present myself as a full-stack developer with experience on web development and API
            integration. I will develop responsive and high performance web projects and help you
            with deployment. I can also create clean and modern deigns and improve SEO to make your
            projects grow in search engines. So, if you&apos;re looking for a developer to grow your
            projects, you can hit me up!
          </p>
        </div>
      </div>

      <div className={styles.skills}>
        <p className={cx(styles.blockTitle, zillaSlab.className)}>Main Skills</p>
        <p className={styles.technologies}>React, Next.js, Strapi, Node, Git & SQL</p>
      </div>

      <div className={styles.certificates}>
        <p className={cx(styles.blockTitle, zillaSlab.className)}>Certificates</p>
        <ul className={styles.certificates}>
          {certificates?.map(({ id, name, year }) => (
            <li key={id}>
              {`- ${name}, `} <span>{year}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
