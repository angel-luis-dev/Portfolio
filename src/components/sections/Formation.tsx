import uciLogo from '../../assets/icons/logo_01.svg';
import useLanguage from '../../hooks/useLanguage';

const Formation = () => {
    const {getLabel} = useLanguage();

    return ( 
    <section id="formation" className="formation">
        <h2 className="title-section">{getLabel('formation')}</h2>
        <div className="card-info" >
            <img src={uciLogo} style={{width: 120}}/>
            <div style={{flex: 1}}>
                <div style={{fontSize: '1.2rem'}}>Universidad de Ciencias Informáticas</div>
                <div style={{color: 'var(--highlight-color)'}}>2009-2014</div>
            </div>
        </div>
    </section> );
}
 
export default Formation;