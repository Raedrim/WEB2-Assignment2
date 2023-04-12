import React, { useState, useEffect } from "react";
import PokeCard from "./PokeCard";
import { Container, Row, Col, Button } from "react-bootstrap";

function PokeList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(20);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${
          (currentPage - 1) * pokemonPerPage
        }`
      );
      const data = await response.json();
      setPokemonList(data.results);
      setLoaded(true);
    };

    getPokemon();
  }, [currentPage, pokemonPerPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const pokemonCards = pokemonList.map((pokemon, index) => (
    <Col key={index} sm={6} md={4} lg={3} className="mb-3">
      <PokeCard pokemon={pokemon} id={(currentPage - 1) * pokemonPerPage + index + 1} />
    </Col>
  ));

  return (
    <Container>
      <Row>
        {loaded ? (
          pokemonCards
        ) : (
          <Col>
            <p>Loading...</p>
          </Col>
        )}
      </Row>
      <Row>
        <Col className="text-center">
          <Button variant="primary" onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </Button>{" "}
          <Button variant="primary" onClick={handleNextPage}>
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PokeList;
