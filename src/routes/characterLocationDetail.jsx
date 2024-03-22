import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/header/Header";
import CharacterCard from "../components/characterCard/CharacterCard";

const characterLocation = () => {
  const { locationId } = useParams();

  const [locationData, setLocationData] = useState({
    name: "",
    type: "",
    dimension: "",
    residents: [],
  });

  const [characterData, setCharacterData] = useState([]);

  const getLocation = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then((res) => {
        const data = res.data;

        setLocationData({
          name: data.name,
          type: data.type,
          dimension: data.dimension,
          residents: data.residents,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // getting location ID from location url
  const residentArr = locationData.residents;
  const charID = residentArr.map((str) => {
    return str.substring(str.lastIndexOf("/") + 1);
  });

  const charIDStr = charID.toString();

  console.log(charIDStr);
  console.log(`https://rickandmortyapi.com/api/character/${charIDStr}`);

  const getAllCharByLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${charIDStr}`)
      .then((res) => {
        setCharacterData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getLocation();
    getAllCharByLocation();
  }, []);

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-start px-xxl-0 px-lg-0 px-md-0 px-sm-0 px-xs-0 my-3">
        <Container className="my-3">
          <Link style={{ color: "#0a0a0a" }} to="/">
            Back
          </Link>

          <h1 className="py-2 h3">Location</h1>
          <Row>
            <Col md={8}>
              <p>Name: {locationData.name}</p>
              <p>Type of location: {locationData.type}</p>
              <p>Dimension: {locationData.dimension}</p>
            </Col>
          </Row>
          <h1 className="py-2 h3">Residents</h1>
          <Row>
            {characterData.map((item) => (
              <Col md={4} key={item.id}>
                <CharacterCard
                  id={item.id}
                  name={item.name}
                  image={item.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default characterLocation;
