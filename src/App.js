import {BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Styles.css';
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import UserApplication from './pages/UserApplication'
import CheckList from './pages/CheckList'
import ChooseALender from './pages/ChooseALender';
import ApplyForFunding from './pages/ApplyForFunding'
import FunFacts from './pages/FunFacts'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/checklist' element={<CheckList/>}/>
        <Route path='/userapplication' element={<UserApplication/>}/>
        <Route path='/applyforfunding' element={<ApplyForFunding/>}/>
        <Route path='/choosealender' element={<ChooseALender/>}/>
        <Route path='/applyforfunding' element={<ApplyForFunding/>}/>
        <Route path='/funfacts' element={<FunFacts/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
