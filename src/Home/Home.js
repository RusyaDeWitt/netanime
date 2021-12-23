import react from 'react';
import { Container , Carousel , Card, Button } from 'react-bootstrap';

import './Home.css'


function Home(){
  return(
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
        <h1>Trending Anime</h1>

        <Container className="List">
        <Card className="Cards" style={{width:'250px', textAlign:'center', alignItems:'center'}}>
            <Card.Img  className="car-photo"  src="https://yummyanime.info/img/posters/1633255013.jpg"/>
            <Card.Body>
                <Card.Title>Deji Meets Girl</Card.Title>
            </Card.Body>
        </Card>

        <Card className="Cards" style={{width:'250px', textAlign:'center', alignItems:'center'}}>
            <Card.Img  className="car-photo"  src="https://yummyanime.info/img/posters/1594480965.jpg"/>
            <Card.Body>
                <Card.Title>Words Bubble Up Like Soda Pop</Card.Title>
            </Card.Body>
        </Card>

        <Card className="Cards" style={{width:'250px', textAlign:'center', alignItems:'center'}}>
            <Card.Img  className="car-photo"  src="https://yummyanime.info/img/posters/1562334009.jpg"/>
            <Card.Body>
                <Card.Title>A Silent Voice</Card.Title>
            </Card.Body>
        </Card>

        <Card className="Cards" style={{width:'250px', textAlign:'center', alignItems:'center'}}>
            <Card.Img  className="car-photo"  src="https://yummyanime.info/img/posters/1567877240.jpg"/>
            <Card.Body>
                <Card.Title>The Pet Girl of Sakurasou</Card.Title>
            </Card.Body>
        </Card>

        <Card className="Cards" style={{width:'250px', textAlign:'center', alignItems:'center'}}>
            <Card.Img  className="car-photo"  src="https://yummyanime.info/img/posters/1568207901.jpg"/>
            <Card.Body>
                <Card.Title>Your Lie in April</Card.Title>
            </Card.Body>
        </Card>

        <Card className="Cards" style={{width:'250px', textAlign:'center', alignItems:'center'}}>
            <Card.Img  className="car-photo"  src="https://yummyanime.info/img/posters/1570884898.jpg"/>
            <Card.Body>
                <Card.Title>Plastic Memories</Card.Title>
            </Card.Body>
        </Card>
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
