'use client';

import cx from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BiLogoTwitch } from 'react-icons/bi';

import { IProject } from 'common/types';
import Button from 'components/Button';
import { getFirebaseCollection } from 'utils/firestore';
import { lato } from 'utils/fonts';

import styles from './Projects.module.scss';

const ProjectCard = ({ project, index }: { project: IProject; index: number }) => {
  const { backend, description, frontend, name, year, technologies, twitch } = project;
  const projectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ['0 1', '1 1']
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <motion.div
      ref={projectRef}
      style={{ scale: scaleProgress, opacity: scrollYProgress }}
      className={styles.projectCard}
    >
      <div className={styles.header}>
        <span className={cx(styles.projectNumber, lato.className)} style={{ color: 'white' }}>
          {index >= 10 ? `${index}` : `0${index + 1}`}
        </span>
        <div className={styles.info}>
          <span className={styles.projectName}>{name}</span>
          <span className={cx(styles.year, lato.className)}>{year}</span>
        </div>
      </div>
      <p className={cx(styles.description, lato.className)}>{description}</p>
      {technologies && (
        <div className={styles.technologies} style={{ marginBottom: !twitch ? `50px` : 0 }}>
          {technologies?.map((technology, index) => (
            <div key={index} className={cx(styles.technology, lato.className)}>
              {technology}
            </div>
          ))}
        </div>
      )}
      {twitch && (
        <a
          href="https://www.twitch.tv/nunodcastro"
          target="_blank"
          className={cx(styles.twicth, lato.className)}
          rel="noreferrer"
        >
          <BiLogoTwitch className={styles.icon} size={20} />
          <span>Follow on live</span>
        </a>
      )}
      {(frontend || backend) && (
        <div className={styles.repositoryBtns}>
          {frontend && <Button href={frontend} text="Frontend" />}
          {backend && <Button href={backend} text="Backend" />}
        </div>
      )}
    </motion.div>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    const fetchProjects = async () =>
      setProjects(await getFirebaseCollection<IProject>('projects'));

    fetchProjects();
  }, []);

  return (
    <div className={styles.wrapper}>
      {projects?.map((project, index) => (
        <ProjectCard key={`project-${index}`} project={project} index={index} />
      ))}
    </div>
  );
}
