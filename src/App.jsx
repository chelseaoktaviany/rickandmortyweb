import { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/header/Header";

import "bootstrap/dist/css/bootstrap.min.css";

import CharacterCard from "./components/characterCard/CharacterCard";

function App() {
  const [charData, setCharData] = useState([]);

  const getAllCharData = async () => {
    await axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        setCharData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCharData();
  }, []);

  return (
    <>
      <Header />
      <Container className="d-flex justify-content-start px-xxl-0 px-lg-0 px-md-0 px-sm-0 px-xs-0 my-3">
        <Container className="my-3">
          <h1 className="py-2 h3">Characters</h1>

          <Row>
            {charData.map((item) => (
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
}

export default App;
