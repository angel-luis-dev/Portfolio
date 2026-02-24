import useLanguage from '../../hooks/useLanguage';
import TagTecnology from '../commons/TagTecnology';
import TecnologySectionTitle from '../commons/TecnologySectionTitle';

const Tecnologies = () => {
  const { getLabel } = useLanguage();

  return (
    <section id="tecnologies">
      <h2 className="title-section">{getLabel('tecnologies')}</h2>
      <TecnologySectionTitle>Frontend</TecnologySectionTitle>
      <div className="tecnologies-area">
        <TagTecnology text="React" />
        <TagTecnology text="Vue" />
        <TagTecnology text="Angular" />
      </div>
      <TecnologySectionTitle>Backend</TecnologySectionTitle>
      <div className="tecnologies-area">
        <TagTecnology text="NestJs" />
        <TagTecnology text="Spring Boot" />
        <TagTecnology text="Node" />
      </div>
      <TecnologySectionTitle>{getLabel('dataBase')}</TecnologySectionTitle>
      <div className="tecnologies-area">
        <TagTecnology text="PostgreSQL" />
        <TagTecnology text="MariaDB" />
        <TagTecnology text="MongoDB" />
      </div>
      <TecnologySectionTitle>Extra</TecnologySectionTitle>
      <div className="tecnologies-area">
        <TagTecnology text="Git" />
        <TagTecnology text="Docker" />
      </div>
    </section>
  );
};

export default Tecnologies;
