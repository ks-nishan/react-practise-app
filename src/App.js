import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <p>
        <a href="home">Home</a>
      </p>
      <p>
        <a href="about">About</a>
      </p>
      <p>
        <a href="dashboard">Dashboard</a>
      </p>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
