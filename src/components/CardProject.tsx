interface CardProjectProps {
  title: string;
  description: string;
  photo?: string;
  tecnologies?: string[];
  type?: string;
}

const CardProject = ({
  title,
  description,
  photo,
  tecnologies,
  type,
}: CardProjectProps) => {
  return (
    <div key={title} className="card-project">
      {type ? <div className="card-type">{type}</div> : null}
      <img
        src={photo}
        alt={title}
        style={{
          border: '1px solid var(--highlight-color)',
          height: 180,
          width: '100%',
          minHeight: 180,
          minWidth: '100%',
          objectFit: 'cover',
        }}
      />
      <h4 style={{ margin: '1rem 0 0' }}>{title}</h4>
      <p style={{ color: 'var(--secondary-color)', fontSize: '0.9rem' }}>
        {description}
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        {tecnologies?.map((x) => (
          <div
            style={{
              borderRadius: 4,
              color: 'var(--highlight-color)',
              border: '2px solid var(--highlight-color)',
              padding: '2px 8px',
              fontSize: '0.8rem',
            }}
          >
            {x}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardProject;
