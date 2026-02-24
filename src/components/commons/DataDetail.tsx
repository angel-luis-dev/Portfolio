export type DataDetailProps = {
    title: string;
    data: string;
}

const DataDetail = ({title, data}:DataDetailProps) => {
    return ( <div className="data-detail">
        <text className="title">{`${title} :`}</text>
        <text className="data">{data}</text>
    </div> );
}
 
export default DataDetail;