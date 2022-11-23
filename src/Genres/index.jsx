import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, * as others from "axios";
import { Container, Card, Row, Spinner } from "react-bootstrap";

import "./style.css";

export default function Genres() {
  const [actions, setActions] = useState([]);
  const [adventure, setAdventure] = useState([]);
  const [comedy, setComedy] = useState([]);

  useEffect(() => {
    axios
      .get("https://gogoanime.consumet.org/genre/action?page=10")
      .then((response) => setActions(response.data));
    axios
      .get("https://gogoanime.consumet.org/genre/adventure?page=10")
      .then((response) => setAdventure(response.data));
    axios
      .get("https://gogoanime.consumet.org/genre/comedy?page=10")
      .then((response) => setComedy(response.data));
  }, []);

  return (
    <Container fluid>
      {actions.length > 0 && comedy.length > 0 && adventure.length > 0 ? (
        <Container className="content">
          <h1>Actions</h1>
          <Row>
            {actions.map((anime) => (
              <Card
                className="Cards"
                style={{
                  width: "150px",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: "10px",
                }}
                key={anime.animeId}
              >
                <Link to={`/AnimePage/${anime.animeId}`}>
                  <Card.Img className="car-photo" src={anime.animeImg} />
                </Link>

                <Card.Body
                  style={{
                    fontSize: "10px",
                  }}
                >
                  <Card.Title>{anime.animeTitle}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <h1>Adventure</h1>
          <Row>
            {adventure.map((anime) => (
              <Card
                className="Cards"
                style={{
                  width: "150px",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: "10px",
                }}
                key={anime.animeId}
              >
                <Link to={`/AnimePage/${anime.animeId}`}>
                  <Card.Img className="car-photo" src={anime.animeImg} />
                </Link>

                <Card.Body
                  style={{
                    fontSize: "10px",
                  }}
                >
                  <Card.Title>{anime.animeTitle}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <h1>Comedy</h1>
          <Row>
            {comedy.map((anime) => (
              <Card
                className="Cards"
                style={{
                  width: "150px",
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: "10px",
                }}
                key={anime.animeId}
              >
                <Link to={`/AnimePage/${anime.animeId}`}>
                  <Card.Img className="car-photo" src={anime.animeImg} />
                </Link>

                <Card.Body
                  style={{
                    fontSize: "10px",
                  }}
                >
                  <Card.Title>{anime.animeTitle}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      ) : (
        <Spinner
          animation="border"
          role="status"
          style={{ color: "yellow", fontSize: "100px", marginTop: "20%" }}
        />
      )}
    </Container>
  );
}
