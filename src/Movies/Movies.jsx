import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, * as others from "axios";
import { Container, Card, Spinner, Row } from "react-bootstrap";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://gogoanime.consumet.org/anime-movies")
      .then((response) => setMovies(response.data));
  }, []);
  return (
    <Container fluid>
      {movies.length > 0 > 0 ? (
        <Container className="content">
          <h1>Movies</h1>
          <Row>
            {movies.map((anime) => (
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
export default Movies;
