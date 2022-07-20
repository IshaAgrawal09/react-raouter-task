import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contacts from './Contacts';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/ContactUs' element ={<Contacts />}/>
      </Routes>
    </div>
  );
}


export default App;
