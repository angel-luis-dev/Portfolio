import useLanguage from '../../hooks/useLanguage';
import CardProject from '../CardProject';
import receta from '../../assets/image/receta.png';

const Projects = () => {
  const { getLabel } = useLanguage();

  const projects = [
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
      photo: '',
      tecnologies: ['ExtJs', 'PHP'],
      type: 'UCI',
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
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
