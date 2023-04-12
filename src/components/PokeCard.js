import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const PokeCard = ({ pokemon, id }) => {
  const { name } = pokemon;
  const [pokemonData, setPokemonData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Modal closed");
    setIsModalOpen(false);
  };

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const { types, sprites, stats, abilities, height, weight } = pokemonData;

  // Long switch statement to set background color based on the Pokemon's type
  let bgColor = "";
  switch (types[0].type.name) {
    case "normal":
      bgColor = "#A8A878";
      break;
    case "fire":
      bgColor = "#F08030";
      break;
    case "water":
      bgColor = "#6890F0";
      break;
    case "grass":
      bgColor = "#78C850";
      break;
    case "electric":
      bgColor = "#F8D030";
      break;
    case "ice":
      bgColor = "#98D8D8";
      break;
    case "fighting":
      bgColor = "#C03028";
      break;
    case "poison":
      bgColor = "#A040A0";
      break;
    case "ground":
      bgColor = "#E0C068";
      break;
    case "flying":
      bgColor = "#A890F0";
      break;
    case "psychic":
      bgColor = "#F85888";
      break;
    case "bug":
      bgColor = "#A8B820";
      break;
    case "rock":
      bgColor = "#B8A038";
      break;
    case "ghost":
      bgColor = "#705898";
      break;
    case "dragon":
      bgColor = "#7038F8";
      break;
    case "dark":
      bgColor = "#705848";
      break;
    case "steel":
      bgColor = "#B8B8D0";
      break;
    case "fairy":
      bgColor = "#EE99AC";
      break;
    default:
      bgColor = "#68A090";
  }

  return (
    <div
      className="card"
      onClick={handleCardClick}
      style={{ backgroundColor: bgColor }}
    >
      {sprites && <img src={sprites.front_default} alt={name} />}
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
      <p>ID: {id}</p>
      {types && <p>Type: {types[0].type.name}</p>}
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sprites && (
            <img
              src={sprites.front_default}
              alt={name}
              className="modal-image"
            />
          )}
          {types && (
            <p>
              Type:
              {types.map((type) => (
                <span key={type.type.name}> {type.type.name}</span>
              ))}
            </p>
          )}
          {stats && (
            <p>
              Stats:
              {stats.map((stat) => (
                <span key={stat.stat.name}>
                  {" "}
                  {stat.stat.name}:{stat.base_stat}
                </span>
              ))}
            </p>
          )}
          {abilities && (
            <p>
              Abilities:
              {abilities.map((ability) => (
                <span key={ability.ability.name}> {ability.ability.name}</span>
              ))}
            </p>
          )}
          {height && <p>Height: {height / 10} m</p>}
          {weight && <p>Weight: {weight / 10} kg</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleCloseModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PokeCard;
