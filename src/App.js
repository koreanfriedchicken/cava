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
import BalsamicDateChicken from './pages/BalsamicDateChicken';
import HarissaAvocadoBowl from './pages/HarissaAvocadoBowl';
import LentilAvocadoBowl from './pages/LentilAvocadoBowl';
import ChickenRightRice from './pages/ChickenRightRice';
import GreekSalad from './pages/GreekSalad';

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
          <Route path='/checkout' element={<Checkout setOrderModal={setOrderModal} />} />
          <Route path='/balsamicdatechicken' element={<BalsamicDateChicken />}/>
          <Route path='/harissaavocadobowl' element={<HarissaAvocadoBowl />}/>
          <Route path='/lentilavocadobowl' element={<LentilAvocadoBowl />}/>
          <Route path='/chickenrightricebowl' element={<ChickenRightRice />}/>
          <Route path='/greeksalad' element={<GreekSalad />}/>

          <Route path='*' element={<MenuPage />} />
        </Routes>
        <Footer />
      </BagContext>
    </div>
  );
}

export default App;
