interface CardProjectProps{
    title: string;
    description: string;
    photo?: string;
    tecnologies?: string[];
}

const CardProject = ({title, description, photo, tecnologies}:CardProjectProps) => {
    return ( <div key={title} className="card-project">
        <img src={photo} style={{border: '1px solid #fff', height: 180}}/>
        <h4 style={{margin: '1rem 0 0'}}>{title}</h4>
        <p style={{color: 'var(--secondary-color)', fontSize: '0.9rem'}}>{description}</p>
        <div style={{display: 'flex', gap: 8}}>{tecnologies?.map((x) => (<div style={{
            borderRadius: 4,
            color: 'var(--highlight-color)',
            border: '2px solid var(--highlight-color)',
            padding: '2px 8px',
            fontSize: '0.8rem'
        }}>{x}</div>) )}</div>
    </div> );
}
 
export default CardProject;