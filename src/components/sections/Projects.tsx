import useLanguage from '../../hooks/useLanguage';
import CardProject from '../commons/CardProject';
import ModalProjectDetails from '../commons/ModalProjectDetails';
import { useState } from 'react';
import { ProjectType } from '@/types';
import {
  bankRegister1,
  // bankRegister2,
  bankRegister3,
  bankRegister4,
  bankRegister5,
  bankRegister6,
  bankRegister7,
} from '../../assets/image/bankregister';
import {
  distra1,
  distra2,
  distra3,
  distra4,
  distra5,
} from '../../assets/image/distra';
import {
  duesmaster1,
  duesmaster2,
  duesmaster3,
  duesmaster4,
  duesmaster5,
  duesmaster6,
} from '../../assets/image/duesmaster';
import { receta1, receta2, receta3, receta4 } from '../../assets/image/receta';

const Projects = () => {
  const { getLabel } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null,
  );

  const projects: ProjectType[] = [
    {
      title: 'DuesMaster',
      description: getLabel('finanzasDescription'),
      photo: duesmaster1,
      tecnologies: ['React', 'NestJs'],
      type: 'PERSONAL',
      examples: [
        { type: 'PHOTO', content: duesmaster1 },
        { type: 'PHOTO', content: duesmaster2 },
        { type: 'PHOTO', content: duesmaster3 },
        { type: 'PHOTO', content: duesmaster4 },
        { type: 'PHOTO', content: duesmaster5 },
        { type: 'PHOTO', content: duesmaster6 },
      ],
    },
    {
      title: 'Bank Register',
      description: getLabel('bankRegisterDescription'),
      photo: bankRegister1,
      tecnologies: ['React'],
      type: 'PERSONAL',
      examples: [
        { type: 'PHOTO', content: bankRegister1 },
        // { type: 'VIDEO', content: bankRegister2 },
        { type: 'PHOTO', content: bankRegister3 },
        { type: 'PHOTO', content: bankRegister4 },
        { type: 'PHOTO', content: bankRegister5 },
        { type: 'PHOTO', content: bankRegister6 },
        { type: 'PHOTO', content: bankRegister7 },
      ],
    },
    {
      title: 'RECETA',
      description: getLabel('recetaDescription'),
      photo: receta1,
      tecnologies: ['React', 'Spring-boot'],
      type: 'PERSONAL',
      examples: [
        { type: 'PHOTO', content: receta1 },
        { type: 'PHOTO', content: receta2 },
        { type: 'PHOTO', content: receta3 },
        { type: 'PHOTO', content: receta4 },
      ],
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
    // {
    //   title: 'TRAZAS',
    //   description: getLabel('trazasDescription'),
    //   photo: '',
    //   tecnologies: ['React', 'Node'],
    //   type: 'UCI',
    // },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="title-section">{getLabel('projects')}</h2>
      <div
        style={{
          display: 'grid',
          padding: '4px 16px',
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
