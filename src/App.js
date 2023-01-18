import './App.css';

import { useState, useEffect } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OrderModal from './components/OrderModal';

import Builder from './pages/Builder';
import MenuPage from './pages/MenuPage';
import BagContext from './context/BagContext';
import Checkout from './pages/Checkout';

function App() {
  const [orderModal, setOrderModal] = useState(false)

  //scroll to top of page on route change
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return (
    <div className="App">
      <BagContext>
        <Navbar setOrderModal={setOrderModal}/>
        {orderModal && <OrderModal setOrderModal={setOrderModal} />}
        <Routes>
          <Route path='/' element={<MenuPage />}/>
          <Route path='/builder' element={<Builder />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<MenuPage />} />
        </Routes>
        <Footer />
      </BagContext>
    </div>
  );
}

export default App;
