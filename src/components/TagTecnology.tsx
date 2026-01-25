export type TagTecnologyProps = {
    text: string;
}

const TagTecnology = ({text}:TagTecnologyProps) => {
    return ( <div className="tag-tecnology">{text}</div> );
}
 
export default TagTecnology;