import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Home2 from './Component/Home2'


function App() {
  return (
    <>

      <BrowserRouter>
      
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/home2" element={<Home2/>} />
            
          
          </Routes>
      
      </BrowserRouter>

    </>
  );
}

export default App;
