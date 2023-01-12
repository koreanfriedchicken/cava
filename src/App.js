import './App.css';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />    
      <Menu />
    </div>
  );
}

export default App;
