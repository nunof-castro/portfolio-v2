'use client';

import cx from 'classnames';
import { useEffect, useState } from 'react';
import { FaRegSquareFull } from 'react-icons/fa6';

import { IProject } from 'common/types';
import Title from 'components/Title';
import { getFirebaseCollection } from 'utils/firestore';
import { zillaSlab } from 'utils/fonts';

import styles from './Projects.module.scss';

export default function Projects() {
  const [projects, setProjects] = useState<IProject[]>();

  useEffect(() => {
    const fetchProjects = async () =>
      setProjects(await getFirebaseCollection<IProject>('projects'));

    fetchProjects();
  }, []);

  useEffect(() => {
    console.log(projects);
  }, [projects]);

  const Accordion = ({ project }: { project: IProject }) => {
    const { id, backend, description, frontend, name, year } = project;

    return (
      <div className={styles.accordion}>
        <div className={styles.header}>
          <FaRegSquareFull className={styles.icon} size={20} />
          <div className={cx(styles.info, zillaSlab.className)}>
            <span className={styles.projectName}>{name}</span>
            <span className={styles.projectYear}>{year}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <Title title="Projects" subtitle="Developed in College" />

      <div className={styles.projects}>
        {projects?.map((project) => (
          <Accordion project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
