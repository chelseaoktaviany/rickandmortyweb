import { useState, useEffect } from "react";

import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/header/Header";
import LocationCard from "../components/locationCard/LocationCard";

const CharacterLocation = () => {
  const [locationData, setLocationData] = useState([]);

  const getAllLocationData = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/location/")
      .then((res) => {
        setLocationData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllLocationData();
  }, []);

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-start px-xxl-0 px-lg-0 px-md-0 px-sm-0 px-xs-0 my-3">
        <Container className="my-3">
          <h1 className="py-2 h3">Locations</h1>

          <Row>
            {locationData.map((item) => (
              <Col md={4} key={item.id}>
                <LocationCard
                  locationId={item.id}
                  name={item.name}
                  type={item.type}
                  dimension={item.dimension}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CharacterLocation;
