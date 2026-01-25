import uciLogo from '../../assets/icons/logo_01.svg';
import useLanguage from '../../hooks/useLanguage';

const Experience = () => {
    const {getLabel} = useLanguage();

    return ( <section id="experience">
        <h2 className="title-section">{getLabel('experience')}</h2>
        <div className="card-info" >
            <img src={uciLogo} style={{width: 160}}/>
            <div style={{flex: 1}}>
                <div style={{fontSize: '1.2rem'}}>Universidad de Ciencias Informáticas (2014-2024)</div>
                <div style={{color: 'var(--highlight-color)'}}>{getLabel('fullStackDeveloper')}</div>
            </div>
        </div>
    </section> );
}
 
export default Experience;