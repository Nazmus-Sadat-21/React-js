import './App.css';
import Form from './component/Form';
import Text from './component/Text';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>    
        <Routes>
          <Route path="/" element={
            <div>        
              <div className="hedaing my-2" style={{ textAlign: 'center' }}>
                <h1>Submit your information</h1>
              </div>
              <div className='cont' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                <div className="container" style={{ height: '500px', width: '450px' }}>
                  <Form />
                </div>
              </div>
            </div>
          } />
          <Route path="/text" element={
              <div>
                <h2 className="my-3s"style={{textAlign:'center'}}>Here is your drop Application </h2>
              <div className='sizing my-2'>
                <div className="textarea">
                   <Text />
                </div>
              </div>
              </div>


          } />
        </Routes>
      </Router>
    </>
  );
}
 
export default App;

