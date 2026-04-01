import { FC, RefObject } from 'react';
import GitHub from '../../assets/icons/GitHub';
import Linkedin from '../../assets/icons/Linkedin';
import photo from '../../assets/image/photo.webp';
import LinkSite from '../commons/LinkSite';
import useLanguage from '../../hooks/useLanguage';
import Download from '../../assets/icons/Download';

export interface PresentationProps {
  triggerRef: RefObject<HTMLDivElement>;
}

const Presentation: FC<PresentationProps> = ({ triggerRef }) => {
  const { getLabel } = useLanguage();

  return (
    <section id="presentation" className="presentation">
      <div className="area-data">
        <div className="box-title">
          <div className="primary">Angel Luis Rodríguez Molina</div>
        </div>
        <div className="secondary">{getLabel('developer')}</div>
        <div className="extra">angelluis35207@gmail.com</div>
        <div ref={triggerRef} className="links">
          <LinkSite
            link="https://github.com/angel-luis-dev"
            icon={<GitHub color="rgb(255,255,255)" />}
            text="GitHub"
          />
          <LinkSite
            link="https://www.linkedin.com/in/angel-luis-dev/"
            icon={<Linkedin color="rgb(255,255,255)" />}
            text="Linkedin"
          />
          <LinkSite
            link="../../assets/document/CV - Angel Luis Rodriguez Molina.pdf"
            icon={<Download color="rgb(255,255,255)" />}
            text="CV"
            download={'CV Angel Luis Rodriguez Molina.pdf'}
          />
        </div>
      </div>
      <div className="area-image">
        <img
          className="image-me"
          src={photo}
          alt="Photo Angel Luis Rodriguez Molina"
        />
      </div>
    </section>
  );
};

export default Presentation;
