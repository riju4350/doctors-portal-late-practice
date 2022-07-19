import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navber from './Shared/Navber/Navber';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className="px-12">
      <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/appointment' element={<Appointment/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      {/* <Route path='/review' element={<Review/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route> */}
     </Routes>
    </div>
  );
}

export default App;
