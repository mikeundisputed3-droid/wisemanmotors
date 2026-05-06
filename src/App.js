import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesapayment from './components/Mpesapayment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
function App() {
  return (
    <BrowserRouter>

      <div className="App">
        {/* navbar goes here  */}
        <Navbar />
        <header className="App-header">
          <h1 className='text-primary'>Welcome to wiseman motors</h1>
        </header>

        <nav>
          <Link to="/" className='btn  btn-success  m-1' >Get prodcts</Link>
          <Link to="/signup" className='btn  btn-success  m-1'>Signup</Link>
          <Link to="/signin" className='btn  btn-success   m-1'>Signin</Link>
          <Link to="/addproduct" className='btn  btn-success  m-1'>Addproduct</Link>
          <Link to="/checkout" className='btn btn-primary m-1'>Checkout</Link>

        </nav>
        <Routes>
          <Route path='/' element={< Getproduct />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/Addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Mpesapayment />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        {/* footer goes here  */}
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
