import useLanguage from "../../hooks/useLanguage";
import CardProject from "../CardProject";

const Projects = () => {
    const {getLabel} = useLanguage();
    const projects = [
        {title: 'RECETA', description: getLabel('recetaDescription'), photo: '', tecnologies: ['React','Spring-boot']},
        {title: 'Finanzas', description: getLabel('finanzasDescription'), photo: '', tecnologies: ['React', 'NestJs']},
    ];

    return ( <section  id="projects" className="projects">
        <h2 className="title-section">{getLabel('projects')}</h2>
        <div style={{display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
            {projects.map((x) => <CardProject key={x?.title} title={x?.title} description={x?.description} tecnologies={x?.tecnologies}/> )}
        </div>
    </section> );
}
 
export default Projects;