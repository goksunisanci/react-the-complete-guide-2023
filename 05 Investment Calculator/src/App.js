import React, { useState } from "react";
import NewData from './components/NewData/NewData';
import Data from "./components/Data/Data";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState([])

  const AddDataHandler = (yearlyData) => {
    setData((prevData) => { return [...yearlyData, ...prevData] })
  };


  return (
    <div>
      <Header></Header>
      <NewData onAddData={AddDataHandler}></NewData>
      <Data data={data}></Data>
    </div>
  );
}

export default App;
