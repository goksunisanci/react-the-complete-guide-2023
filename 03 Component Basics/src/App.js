import { Fragment } from 'react';
import Concepts from './components/Concepts';
import Header from './components/Header/Header';
import Examples from './components/Examples';


function App() {

  return (
    <Fragment>
      <Header></Header>
      <main>
        <Concepts></Concepts>
        <Examples></Examples>
      </main>
    </Fragment>
  );
}

export default App;
