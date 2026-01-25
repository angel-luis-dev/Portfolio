import { FC, RefObject } from 'react';
import GitHub from '../../assets/icons/GitHub';
import Linkedin from '../../assets/icons/Linkedin';
import photo from '../../assets/image/photo.png';
import LinkSite from '../LinkSite';
import useLanguage from '../../hooks/useLanguage';

export interface PresentationProps {
  triggerRef: RefObject<HTMLDivElement>;
}

const Presentation: FC<PresentationProps> = ({triggerRef}) => {
    const {getLabel} = useLanguage();

    return ( <section id='presentation' className="presentation">
        <div className='area-data'>
            <div className='box-title'><div className='primary'>Angel Luis Rodríguez Molina</div></div>
            <div className='secondary'>{getLabel('developer')}</div>
            <div className='extra'>angelluis35207@gmail.com</div>
            <div ref={triggerRef} className='links'>
                <LinkSite link='https://github.com/angel-luis-dev' icon={<GitHub color='rgb(255,255,255)'/>} text='GitHub'/>
                <LinkSite link='https://www.linkedin.com/in/angel-luis-rodr%C3%ADguez-molina-9574a11bb/' icon={<Linkedin color='rgb(255,255,255)'/>} text='Linkedin'/>
                <LinkSite link='../../assets/document/CV.pdf' icon={<Linkedin color='rgb(255,255,255)'/>} text='CV' download={'CV Angel Luis Rodriguez Molina.pdf'}/>
            </div>
        </div>
        <div className="area-image">
            <img className="image-me" src={photo}/>
        </div>
    </section> );
}
 
export default Presentation;