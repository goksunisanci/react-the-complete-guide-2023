import DataList from "./DataList";


// datalist has all data, data has just data which i want to show on App. Do it filtering here if you need!

const Data = (props) => {
    return (
        <DataList data={props.data}></DataList>
    )
};

export default Data