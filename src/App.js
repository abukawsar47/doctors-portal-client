import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Appointment from './Pages/Home/Appointment';
import ContactUs from './Pages/Home/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Home/Login';
import Reviews from './Pages/Home/Reviews';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={<Appointment></Appointment>}></Route>
        <Route path='review' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
