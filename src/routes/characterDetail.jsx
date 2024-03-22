import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Header from "../components/header/Header";

const characterDetail = () => {
  const { id } = useParams();

  const [charData, setCharData] = useState({
    name: "",
    image: "",
    status: "",
    gender: "",
    origin: "",
    location: "",
    locationURL: "",
  });

  const getCharacter = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        const data = res.data;

        setCharData({
          name: data.name,
          image: data.image,
          gender: data.gender,
          origin: data.origin.name,
          location: data.location.name,
          locationURL: data.location.url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  // getting location ID from location url
  const locationId = charData.locationURL.charAt(
    charData.locationURL.length - 1
  );

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-start px-xxl-0 px-lg-0 px-md-0 px-sm-0 px-xs-0 my-3">
        <Container className="my-3">
          <Link style={{ color: "#0a0a0a" }} to="/">
            Back
          </Link>

          <h1 className="py-2 h3">Character detail</h1>
          <Row>
            <Col md={4}>
              <img src={charData.image} alt={charData.name} />
            </Col>
            <Col md={8}>
              <h3 className="mb-3">{charData.name}</h3>
              <p>Name: {charData.name}</p>
              <p>Status: {charData.status}</p>
              <p>Gender: {charData.gender}</p>
              <p>Origin: {charData.origin}</p>
              <p>Location: {charData.location}</p>
              <Button variant="dark">
                <Link style={{ color: "#fff" }} to={`/locations/${locationId}`}>
                  Find the location
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default characterDetail;
