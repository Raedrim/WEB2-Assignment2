import React, { useState, useEffect } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import "./PokeCard.css"; // import CSS file


const PokeCard = ({ pokemon, id }) => {
  const { name } = pokemon;

  const [pokemonData, setPokemonData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleCardClick = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const { types, sprites, stats, abilities, height, weight } = pokemonData;

  // Create an array of background colors for each type of the Pokemon
  const typeColors = types.map((type) => {
    switch (type.type.name) {
      case "normal":
        return "#A8A878";
      case "fire":
        return "#F08030";
      case "water":
        return "#6890F0";
      case "grass":
        return "#78C850";
      case "electric":
        return "#F8D030";
      case "ice":
        return "#98D8D8";
      case "fighting":
        return "#C03028";
      case "poison":
        return "#A040A0";
      case "ground":
        return "#E0C068";
      case "flying":
        return "#A890F0";
      case "psychic":
        return "#F85888";
      case "bug":
        return "#A8B820";
      case "rock":
        return "#B8A038";
      case "ghost":
        return "#705898";
      case "dragon":
        return "#7038F8";
      case "dark":
        return "#705848";
      case "steel":
        return "#B8B8D0";
      case "fairy":
        return "#EE99AC";
      default:
        return "#68A090";
    }
  });

  // If the Pokemon has multiple types, create a gradient background
  const bgColor =
    typeColors.length > 1
      ? `linear-gradient(to right, ${typeColors.join(", ")})`
      : typeColors[0];

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{ background: bgColor }}
    >
      {sprites && <img src={sprites.front_default} alt={name} />}
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>ID: {id}</p>
      {types && (
        <p>
          Type:{" "}
          {types.map((type, index) => (
            <span
              key={type.type.name}
              className={`type-${type.type.name}`}
              style={{ background: typeColors[index] }}
            >
              {type.type.name}
            </span>
          ))}
        </p>
      )}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={4}>
              {sprites && (
                <img
                  src={sprites.front_default}
                  alt={name}
                  className="modal-image"
                />
              )}
            </Col>
            <Col xs={8}>
              {types && (
                <p>
                  <strong>Type:</strong>{" "}
                  {types.map((type) => (
                    <span
                      key={type.type.name}
                    >
                      {type.type.name + ", "}
                    </span>
                  ))}
                </p>
              )}
              {stats && (
                <div>
                  <strong>Stats:</strong>
                  <ul>
                    {stats.map((stat) => (
                      <li key={stat.stat.name}>
                        <span className="stat-name">{stat.stat.name}:</span>{" "}
                        {stat.base_stat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {abilities && (
                <p>
                  <strong>Abilities:</strong>{" "}
                  {abilities.map((ability) => (
                    <span key={ability.ability.name}>
                      {ability.ability.name + ", "}
                    </span>
                  ))}
                </p>
              )}
              {height && (
                <p>
                  <strong>Height:</strong> {height / 10} m
                </p>
              )}
              {weight && (
                <p>
                  <strong>Weight:</strong> {weight / 10} kg
                </p>
              )}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PokeCard;
