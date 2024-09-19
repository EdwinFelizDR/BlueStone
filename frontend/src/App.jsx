import React from 'react';
import '../src/css/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/about';
import ShopAll from './components/ShopAll';
import Blog from './components/Blog';
import LoginForm from './components/Login';
import Profile from './components/Profile';
import ShowUser from './components/ShowUser';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <>
    <UserProvider>
    <Router>
      <div className='container'>
        <Header/>
        <Routes>
          <Route element={<ProductCard/>} path='/'></Route>
          <Route path='/ShopAll' element={<ShopAll/>} ></Route>
          <Route path='/Blog' element={<Blog/>} ></Route>
          <Route path='/Contact' element={<Contact/>} ></Route>
          <Route path='/About' element={<About/>} ></Route>
          <Route path='/Login' element={<LoginForm/>} ></Route>
          <Route path='/Profile' element={<Profile/>} ></Route>
          <Route path='/showUser' element={<ShowUser/>}></Route>
          {/* <Route path='/ProductCard' element={<ProductCard/>}></Route> */}
        </Routes>        
        <Footer>

        </Footer>
      </div>
    </Router>
    </UserProvider>
    </>
  );
}

export default App


