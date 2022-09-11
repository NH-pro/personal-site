import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Component Imports
import NavBar from "../Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

// MUI Imports
import { Grid } from "@mui/material";

function App() {
  return (
    <Router>
      <div className="App">
        <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
          >
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route exact path="/" element={ <About /> } />
            <Route exact path="/projects" element={ <Projects /> } />
          </Routes>
          <Footer />
        </Grid>
      </div>
    </Router>
  );
}

export default App;
