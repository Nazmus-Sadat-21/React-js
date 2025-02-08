// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Text from './component/Text'
import About from './component/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode,setmode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='dark'){
      setmode('light')
      document.body.style.backgroundColor  = 'white';
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor  = 'black';
    }
  }

  return (
    <>
{/* <Router>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Routes>
          <Route  exact path="/about">
           element={  <About  style={{marginLeft:45+'rem'}} />}
          </Route>        
          <Route exact path="/">
            <div className="container my-3" >
             <Text mode={mode}/>
            </div>
          </Route>
    </Routes>
   
 </Router> */}

<Router>
  <Navbar mode={mode} toggleMode={toggleMode} />
  <Routes>
    {/* Route for About */}
    <Route
      path="/about"
      element={ 
      <div className='about' style={{marginLeft: 45+'rem',marginTop: 10+'px'}}>
        <About />
      </div>}
    />

    {/* Route for Home */}
    <Route
      path="/"
      element={
        <div className="container my-3">
          <Text mode={mode} />
        </div>
      }
    />
  </Routes>
</Router>



    </>
  );
}

export default App;
