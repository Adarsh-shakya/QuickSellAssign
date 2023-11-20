import './App.css';
import {  Routes, Route } from "react-router-dom";
import DisplayButton from './Components/DisplayButton/DisplayButton';

import Priority from './Components/Pages/Priority/Priority';
import Status from './Components/Pages/Status/Status';
import User from './Components/Pages/User/User';



function App() {
  return (
   <div>
    <DisplayButton/>
    <Routes>
        <Route>
          <Route path="/" element={<Status/>}/>
          <Route path="status" element={<User />} />
          <Route path="priority" element={<Priority />} />
        </Route>
      </Routes>  

    
   </div>
  );
}

export default App;
