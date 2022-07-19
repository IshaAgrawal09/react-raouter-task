import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Gallery from "./Components/Gallery";
import Event from "./Components/Event"
import Home from "./Components/Home"
import Feedback from "./Components/Feedback"
import Contact from "./Components/Contact";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Gallery" element={<Gallery />}/>
        <Route path="/Event" element={<Event />}/>
        <Route path="/Feedback" element={<Feedback />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
