import React from "react";
import {action,originals} from './urls'
import './App.css';
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import RowPost from "./components/RowPost/RowPost";




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='NetFlix Originals'/>
      <RowPost  url={action} title='Action' isSmall/>
      <RowPost  url={action} title='Action' isSmall/>
   

    </div>
  );
}

export default App;
