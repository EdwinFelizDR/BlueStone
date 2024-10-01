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
import CartItems from './components/CartItems';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // Add search query state

  return (
    <>
      <UserProvider>
        <Router>
          <div className='container'>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Pass search props */}
            <Routes>
              <Route path='/' element={<ProductCard />}></Route>
              <Route path='/ShopAll' element={<ShopAll searchQuery={searchQuery}/>} ></Route> {/* Pass search query */}
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/Blog' element={<Blog />} ></Route>
              <Route path='/Contact' element={<Contact />} ></Route>
              <Route path='/About' element={<About />} ></Route>
              <Route path='/Login' element={<LoginForm />} ></Route>
              <Route path='/Profile' element={<Profile />} ></Route>
              <Route path='/cart' element={<CartItems/>}></Route>
              <Route path='/showUser' element={<ShowUser />} ></Route>
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </>
  );
}

export default App


