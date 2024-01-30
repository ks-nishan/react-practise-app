import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Dashboard from "./components/dashboard";

function App() {
  const greeting = {text: "Welcome", color: "red"};
  const user = "Nishan";
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
          <Route exact path="/home" element={<Home greeting={greeting} user={user}/>} />
          <Route exact path="/about" element={<About> <p>This is a paragraph tag passed as a props from App</p> </About>} /> {/*passing the html tag as props*/}
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
