import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Navber from './Shared/Navber/Navber';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import ProtectedRoute from './Shared/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div className="px-12">
      <Navber></Navber>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='appointment' element={<ProtectedRoute><Appointment/></ProtectedRoute>}></Route>
      <Route path='about' element={<About/>}></Route>
      {/* <Route path='review' element={<Review/>}></Route>
      <Route path='contact' element={<Contact/>}></Route> */}
      <Route path='login' element={<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
