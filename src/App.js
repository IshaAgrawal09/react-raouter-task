import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import City from "./Components/City";
import Drive from "./Components/Drive";
import Blog from "./Components/Blog";
import Partners from "./Components/Partners";
import Help from "./Components/Help";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<City />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
