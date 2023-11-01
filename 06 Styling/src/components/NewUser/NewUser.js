
import UserForm from "./UserForm";

const NewUser = (props) => {
    const saveUserInfoHandler = (userInfo) => { 
        props.onAddUserInfo(userInfo)
    }

    return (
        <UserForm onSaveUserInfo={saveUserInfoHandler}></UserForm>
    )
};

export default NewUser;