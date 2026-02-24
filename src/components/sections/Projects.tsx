import useLanguage from '../../hooks/useLanguage';
import CardProject from '../commons/CardProject';
import ModalProjectDetails from '../commons/ModalProjectDetails';
import { useState } from 'react';
import { ProjectType } from '@/types';
import receta from '../../assets/image/receta.png';
import {
  distra1,
  distra2,
  distra3,
  distra4,
  distra5,
} from '../../assets/image/distra';

const Projects = () => {
  const { getLabel } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  const projects: ProjectType[] = [
    {
      title: 'DuesMaster',
      description: getLabel('finanzasDescription'),
      photo: '',
      tecnologies: ['React', 'NestJs'],
      type: 'PERSONAL',
    },
    {
      title: 'RECETA',
      description: getLabel('recetaDescription'),
      photo: receta,
      tecnologies: ['React', 'Spring-boot'],
      type: 'PERSONAL',
    },
    {
      title: 'DGSIC',
      description: getLabel('dgesicDescription'),
      photo: '',
      tecnologies: ['ExtJs', 'Django'],
      type: 'UCI',
    },
    {
      title: 'DISTRA-CRM',
      description: getLabel('distraDescription'),
      photo: distra1,
      tecnologies: ['ExtJs', 'PHP'],
      type: 'UCI',
      examples: [
        { type: 'PHOTO', content: distra1 },
        { type: 'PHOTO', content: distra2 },
        { type: 'PHOTO', content: distra3 },
        { type: 'PHOTO', content: distra4 },
        { type: 'PHOTO', content: distra5 },
      ],
    },
    {
      title: 'TRAZAS',
      description: getLabel('trazasDescription'),
      photo: '',
      tecnologies: ['React', 'Node'],
      type: 'UCI',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="title-section">{getLabel('projects')}</h2>
      <div
        style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        }}
      >
        {projects.map((x) => (
          <CardProject
            key={x?.title}
            photo={x?.photo}
            title={x?.title}
            description={x?.description}
            tecnologies={x?.tecnologies}
            type={x?.type}
            onClick={() => {
              console.log('open modal :>> ', x);
              setSelectedProject(x);
            }}
          />
        ))}
      </div>
      <ModalProjectDetails
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </section>
  );
};

export default Projects;
