import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from '../login/login';
import Register from '../register/register.js';
import TopMenu from "../menu/topmenu.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            Lets Create a <code>Sign in/up</code> pages
        </p>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopMenu/>}>
          <Route index element={<Login />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
       
      </header>
    </div>
  );
}

export default App;
