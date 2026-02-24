import { FC, ReactElement } from "react";

interface LinkSiteProps{
    link: string,
    icon: ReactElement,
    text?: string,
    download?: string,
}

const LinkSite: FC<LinkSiteProps> = ({link, icon, text, download}) => {
    return ( <a className="link-site" href={link} target='_blank' rel='noopener noreferrer' download={download}>{icon} {text}</a> );
}
 
export default LinkSite;