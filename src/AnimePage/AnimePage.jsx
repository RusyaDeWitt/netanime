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
  }, [name]);

  const episodeList = animeDetail.episodesList?.map((episode) => {
    return (
      <a key={episode.episodeId} href={episode.episodeUrl} target="_blank" rel="noopener noreferrer">
        Episode: <b>{episode.episodeNum}</b>
      </a>
    );
  });

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
          <div className="detail__episodes">
            <h4>All episodes</h4>
            <div className="detail__episodes_items">{episodeList}</div>
          </div>
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
