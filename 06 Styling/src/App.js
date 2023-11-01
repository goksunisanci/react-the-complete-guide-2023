import React, { useState } from 'react';
import Card from './components/UI/Card';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/Users/UserList';


function App() {
  const [userInfoList, setUserInfoList] = useState([])
  const addUserInfoHandler = (userInfo) => {
    setUserInfoList((prevState) => [...prevState, userInfo])
  }

  return (
    <div>
      <NewUser onAddUserInfo={addUserInfoHandler}></NewUser>
      {userInfoList.length > 0 && <Card><UserList users={userInfoList}></UserList></Card>}
    </div>
  );
}

export default App;
