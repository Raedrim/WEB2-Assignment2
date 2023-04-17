import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PokeList from "./components/PokeList";
import About from "./components/About";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/WEB2-Assignment2/pokedex">
              Pokedex
            </Link>
            <Link className="nav-link" to="/WEB2-Assignment2/about">
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/WEB2-Assignment2/pokedex" element={<PokeList />} />
        <Route path="/WEB2-Assignment2/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
