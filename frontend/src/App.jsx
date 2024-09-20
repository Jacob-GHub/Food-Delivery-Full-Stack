import { React, useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  // Keep-alive functionality
  useEffect(() => {
    const keepAlive = () => {
      fetch('https://food-del-s2l8.onrender.com')
        .then(response => console.log('Pinged backend:', response.status))
        .catch(error => console.error('Keep-alive error:', error));
    };

    // Ping the backend every 10 minutes (600,000 ms)
    const interval = setInterval(keepAlive, 10 * 60 * 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <ToastContainer />
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
