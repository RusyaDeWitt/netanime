import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, * as others from "axios";
import { Container, Carousel, Card } from "react-bootstrap";
import "./Home.css";

function Home() {
  const [recentReleases, setRecentReleases] = useState([]);

  useEffect(() => {
    axios
      .get("https://gogoanime.consumet.org/recent-release")
      .then((response) => setRecentReleases(response.data));
  }, []);
  return (
    <div className="Home">
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://simkl.in/fanart/11/11670666d07be86985_medium.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Komi Can't Communicate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABddWNPHBX5iJBtMkpKzNe8gWSv6RWERSmSWxtSDXOdJSv5jXblpHCMpfa1WJw9KxSFu_xjpB6jAnZDgWc3lpj3ACB2SW.jpg?r=af8"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Tokyo Ghoul</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images2.alphacoders.com/229/thumb-1920-229932.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>DxD</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="Home-Content">
        <h1>Recent Releases</h1>

        <Container className="List">
          {recentReleases.map((anime) => (
            <Card
              className="Cards"
              style={{
                width: "250px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/AnimePage/${anime.animeId}`}>
                <Card.Img className="car-photo" src={anime.animeImg} />
              </Link>

              <Card.Body>
                <Card.Title>{anime.animeTitle}</Card.Title>
                <h4>Episode: {anime.episodeNum}</h4>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Container>

      <div className="footer">
        <a href="https://twitter.com/?lang=en" class="fa fa-twitter"></a>
        <a href="https://www.instagram.com/?hl=en" class="fa fa-instagram"></a>
        <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
        <a href="https://www.facebook.com/" class="fa fa-facebook"></a>
      </div>
    </div>
  );
}
export default Home;
