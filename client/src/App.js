import './App.css';
import Allstud from './component/Allstud';
import Navbar from './component/Navbar';
import Count from './component/Count';
import Admin from './component/Admin';
import Date from './component/Date';



import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import View from './component/View';
import Addstud from './component/Addstud';
import Edit from './component/Edit';
import Home from './component/Home';


function App() {
  return (
  <BrowserRouter>
      <Navbar />
      <Routes >
      <Route  path='/' element={<Home />} />
          <Route  path='/allstud' element={<Allstud />} />
          <Route  path='/addstud' element={<Addstud />} />
          <Route  path="/view/:id" element={<View />} />
          <Route  path="/edit/:id" element={<Edit />} />
          <Route  path="/Count" element={<Count />} />
          <Route  path="/admin" element={<Admin />} />
          <Route  path="/date" element={<Date />} />


         
      </Routes>
   
  </BrowserRouter>
  );
}

export default App;
