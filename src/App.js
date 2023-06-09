import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PokeList from "./components/PokeList";
import About from "./components/About";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter basename="/WEB2-Assignment2">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/pokedex">
              Pokedex
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/pokedex" element={<PokeList />} />
        <Route path="/about" element={<About />} />
        {/* default redirect to home page */}
        <Route path="*" element={<PokeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
