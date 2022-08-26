import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Component Imports
import NavBar from "../Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Routes>
          <Route exact path="/" element={ <About /> } />
          <Route exact path="/projects" element={ <Projects /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
