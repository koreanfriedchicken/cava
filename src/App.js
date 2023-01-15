import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Builder from './pages/Builder';
import MenuPage from './pages/MenuPage';
import BagContext from './context/BagContext';
import OrderModal from './components/OrderModal';
import { useState } from 'react';

function App() {
  const [orderModal, setOrderModal] = useState(true)

  return (
    <div className="App">
      <BagContext>
      <BrowserRouter>
        <Navbar setOrderModal={setOrderModal}/>
        {orderModal && <OrderModal setOrderModal={setOrderModal} />}
        <Routes>
          <Route path='/' element={<MenuPage />}/>
          <Route path='/builder' element={<Builder />} />
          <Route path='*' element={<MenuPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </BagContext>
    </div>
  );
}

export default App;
