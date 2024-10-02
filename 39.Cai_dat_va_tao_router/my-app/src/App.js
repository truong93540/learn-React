import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/News" >News</Link>
          </li>
          <li>
            <Link to="/Contact" >Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/News" element={<News></News>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
