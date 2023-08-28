'use client';

import cx from 'classnames';
import { useEffect, useState } from 'react';
import { BiLogoTwitch } from 'react-icons/bi';

import { IProject } from 'common/types';
import Button from 'components/Button';
import { getFirebaseCollection } from 'utils/firestore';

import styles from './Projects.module.scss';

const ProjectCard = ({ project, index }: { project: IProject; index: number }) => {
  const { backend, description, frontend, name, year, technologies, twitch } = project;

  return (
    <div className={styles.projectCard}>
      <div className={styles.header}>
        <span className={styles.projectNumber} style={{ color: 'white' }}>
          {index >= 10 ? `${index}` : `0${index + 1}`}
        </span>
        <div className={styles.info}>
          <span className={styles.projectName}>{name}</span>
          <span className={styles.year}>{year}</span>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      {technologies && (
        <div className={styles.technologies} style={{ marginBottom: !twitch ? `50px` : 0 }}>
          {technologies?.map((technology, index) => (
            <div key={index} className={styles.technology}>
              {technology}
            </div>
          ))}
        </div>
      )}
      {twitch && (
        <a
          href="https://www.twitch.tv/nunodcastro"
          target="_blank"
          className={styles.twicth}
          rel="noreferrer"
        >
          <BiLogoTwitch clasName={styles.icon} size={20} />
          <span>Follow on live</span>
        </a>
      )}
      {(frontend || backend) && (
        <div className={styles.repositoryBtns}>
          {frontend && <Button href={frontend} text="Frontend" />}
          {backend && <Button href={backend} text="Backend" />}
        </div>
      )}
    </div>
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
