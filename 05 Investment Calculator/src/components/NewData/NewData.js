import DataForm from "./DataForm";

const NewData = (props) => {
    const onSaveDataHandler = (yearlyData) => {
        props.onAddData(yearlyData)
    };
    return (
        <DataForm onSaveData={onSaveDataHandler}></DataForm>
    );
};

export default NewData;