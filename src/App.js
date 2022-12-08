import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ChooseALender from './pages/ChooseALender';
import ApplyForFunding from './pages/ApplyForFunding';
import ChoosingTheBestRealtor from './pages/ChoosingTheBestRealtor';
import FunFacts from './pages/FunFacts';
import ContactUs from './pages/ContactUs';
import AllUsers from './pages/AllUsers';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/applyforfunding' element={<ApplyForFunding/>}/>
        <Route path='/choosealender' element={<ChooseALender/>}/>
        <Route path='/allusers' element={<AllUsers/>}/>
        <Route path='/funfacts' element={<FunFacts/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/realtor' element={<ChoosingTheBestRealtor />}/>

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
