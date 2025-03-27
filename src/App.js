import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Signup from './components/Signup';
import Pagenotfound from './components/Pagenotfound';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Mencomponents from './components/Mencomponents';
import Womencomponent from './components/Womencomponent';
import Kidscomponent from './components/Kidscomponent';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';
import About from './components/About';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1><span><img src="images/carousel/gift2.jpeg" alt="" height="160x" width="280x" className='me-5'/></span><span className='gifted'>GIFTED ONLINE SHOPPING STORE</span></h1>
      </header>
       {/* <Navcomponent/> */}

      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/addproduct' element={<Addproduct/>}></Route>
          <Route path='/getproducts' element={<Getproducts/>}></Route>
          <Route path='/mencomponents' element={<Mencomponents/>}></Route>
          <Route path='/womencomponent' element={<Womencomponent/>}></Route>
          <Route path='/kidscomponent' element={<Kidscomponent/>}></Route>
          <Route path='/makepayment' element={<Makepayment/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/' element={<Getproducts/>}></Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
        </Routes>
      </Router>

      <div>
      <span><Footer/></span>
        <footer><p class="text-light bg-dark text-center " width="100%">2025 GSS.All Rights Reserved</p></footer>

      </div>
    </div>
  );
}

export default App;
