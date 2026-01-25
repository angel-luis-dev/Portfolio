export type TecnologySectionTitleProps = {
    children: string;
}

const TecnologySectionTitle = ({children}:TecnologySectionTitleProps) => {
    return ( <div className="tecnology-section">
        <div className="tecnology-section-title">{children}</div>
        </div> );
}
 
export default TecnologySectionTitle;