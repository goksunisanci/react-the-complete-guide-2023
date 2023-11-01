import User from "./User";

const UserList = (props) => {
    console.log(props.users)
    return (
        props.users.map(user => <User userName={user.userName} age={user.age}></User>)
        )
}

export default UserList; 