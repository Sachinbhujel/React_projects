import { Routes, Route } from 'react-router-dom'; 
import './App.css'
import Home from './Home';
import Favourite from './Favourite';
import Cart from './Cart';

function App() {

  return (
    <div>
      <nav className='navbar'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
      </nav>
    </div>
  )
}

export default App
