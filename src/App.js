import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Builder from './pages/Builder';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MenuPage />}/>
          <Route path='/builder' element={<Builder />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
