import useLanguage from '../../hooks/useLanguage';

const Paragraph = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <p style={{ marginBottom: 8 }}>
      <span style={{ color: 'var(--highlight-color)' }}>{`${title} `}</span>
      {description}
    </p>
  );
};

const AboutMe = () => {
  const { getLabel } = useLanguage();

  return (
    <section id="about-me" className="about-me">
      <div style={{ display: 'flex', flexFlow: 'column', gap: '0.5em' }}>
        <h2 className="title-section">{getLabel('aboutMe')}</h2>
        <Paragraph
          title={getLabel('aboutMe1Title')}
          description={getLabel('aboutMe1')}
        />
        <Paragraph
          title={getLabel('aboutMe2Title')}
          description={getLabel('aboutMe2')}
        />
        <Paragraph
          title={getLabel('aboutMe3Title')}
          description={getLabel('aboutMe3')}
        />
        {/* <p>{getLabel('aboutMe1')}</p> */}
        {/* <p>{getLabel('aboutMe2')}</p> */}
        {/* <p>{getLabel('aboutMe3')}</p> */}
      </div>
    </section>
  );
};

export default AboutMe;
