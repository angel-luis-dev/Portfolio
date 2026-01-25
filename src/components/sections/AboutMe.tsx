import useLanguage from "../../hooks/useLanguage";

const AboutMe = () => {
    const {getLabel} = useLanguage();

    return ( <section id="about-me" className="about-me">
        <div style={{display: 'flex', flexFlow: 'column', gap: '0.5em'}}>
            <h2 className="title-section">{getLabel('aboutMe')}</h2>
            <p>{getLabel('aboutMe1')}</p>
            <p>{getLabel('aboutMe2')}</p>
        </div>
    </section> );
}
 
export default AboutMe;