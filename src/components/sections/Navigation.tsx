import { ChangeEvent, FC } from 'react';
import useLanguage from '../../hooks/useLanguage';
import { Language } from '../../types';
import GitHub from '../../assets/icons/GitHub';
import Linkedin from '../../assets/icons/Linkedin';
import LinkSite from '../LinkSite';
import Download from '../../assets/icons/Download';

export interface NavigationProps {
  isTriggerVisible: boolean;
  isAffix: boolean;
}

const Navigation: FC<NavigationProps> = ({ isTriggerVisible, isAffix }) => {
  const { language, setLanguage, getLabel } = useLanguage();
  // const isAffixed = useAffix(64);

  const extraClassHeader = `${isAffix ? 'navigation-affix' : ''} ${!isTriggerVisible ? 'navigation-contacts' : ''}`;

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log('onChange :>> ', e.target.value);
    setLanguage(e.target.value as Language);
  };

  return (
    <header className={`navigation ${extraClassHeader}`}>
      <div className="navigation-area">
        <div>
          <div className="navigation-title">
            <LinkSite
              link="https://github.com/angel-luis-dev"
              icon={<GitHub color="rgb(255,255,255)" />}
            />
            <LinkSite
              link="https://www.linkedin.com/in/angel-luis-rodr%C3%ADguez-molina-9574a11bb/"
              icon={<Linkedin color="rgb(255,255,255)" />}
            />
            <LinkSite
              link="../../assets/document/CV.pdf"
              icon={<Download color="rgb(255,255,255)" />}
            />
          </div>
        </div>
        <div className="navigation-menu">
          <a href="#tecnologies">{getLabel('tecnologies')}</a>
          <a href="#experience">{getLabel('experience')}</a>
          <a href="#projects">{getLabel('projects')}</a>
          <a href="#formation">{getLabel('formation')}</a>
          <a href="#about-me">{getLabel('aboutMe')}</a>
          <select
            id="select-language"
            className="language-select"
            value={language}
            onChange={onChange}
          >
            <option value="es">{getLabel('spanish')}</option>
            <option value="en">{getLabel('english')}</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
