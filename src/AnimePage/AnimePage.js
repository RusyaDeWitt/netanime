import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios, * as others from "axios";
import {
  Container,
  Carousel,
  Card,
  Button,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";

import "./AnimePage.css";

function AnimePage() {
  const [animeDetail, setAnimeDetail] = useState({});
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/anime-details/${name}`)
      .then((response) => setAnimeDetail(response.data));
  }, []);

  console.log(animeDetail.episodesList);
  return (
    <div className="AnimePage">
      {animeDetail.episodesList ? (
        <Container fluid>
          <div className="main">
            <div>
              <Image src={animeDetail.animeImg} alt="" />
            </div>
            <div>
              <h1>{animeDetail.animeTitle}</h1>
              <div className="detail__description">
                <Row>Type: {animeDetail.type}</Row>
                <Row>Release Date: {animeDetail.releasedDate}</Row>
                <Row>Status: {animeDetail.status}</Row>
                <Row>Other names: {animeDetail.otherNames}</Row>
              </div>
            </div>
          </div>
          {animeDetail.episodesList &&
            animeDetail.episodesList.forEach((episode) => {
              <Row>
                <a href={episode.episodeUrl}>{episode.episodeNum}</a>;
              </Row>;
            })}
          <div className="detail__episodes"></div>
        </Container>
      ) : (
        <Spinner
          animation="border"
          role="status"
          style={{ color: "yellow", fontSize: "100px", marginTop: "20%" }}
        />
      )}
    </div>
  );
}

export default AnimePage;