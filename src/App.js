import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Counter from "./components/counter";
import ClickCounter from "./components/clickCounter";
import MouseHoverCounter from "./components/mouseHover";

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
      <p>
        <a href="counter">Counter</a>
      </p>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/counter"
            element={
              <Counter
                render={(count, incrementCount) => (
                  <ClickCounter count={count} incrementCount={incrementCount} />
                )}
              />
            }
          />
          <Route
            exact
            path="/hover"
            element={
              <Counter
                render={(count, incrementCount) => (
                  <MouseHoverCounter count={count} incrementCount={incrementCount} />
                )}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
