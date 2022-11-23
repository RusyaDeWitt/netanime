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
  Modal,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import Iframe from "react-iframe";

import "./AnimePage.css";

function AnimePage() {
  const [animeDetail, setAnimeDetail] = useState({});
  const [selectedEpisode, setSelectedEpisode] = useState({});
  const [episodeUrl, setEpisodeUrl] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { name } = useParams();

  const handleShow = (episode) => {
    setIsOpen(true);
    setSelectedEpisode(episode);
  };

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/anime-details/${name}`)
      .then((response) => setAnimeDetail(response.data));
    axios
      .get(`https://gogoanime.consumet.org/vidcdn/watch/${selectedEpisode}`)
      .then((response) => setEpisodeUrl(response.data));
  }, [name, selectedEpisode]);

  console.log(episodeUrl);

  const episodeList = animeDetail.episodesList?.map((episode) => {
    return (
      <button
        key={episode.episodeId}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleShow(episode.episodeId)}
      >
        Episode: <b>{episode.episodeNum}</b>
      </button>
    );
  });

  return (
    <div className="AnimePage">
      <Modal
        style={{ maxWidth: "100%" }}
        show={isOpen}
        hide={() => setIsOpen(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Episode: {selectedEpisode.episodeNum}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "100vw", height: "100vh" }}>
          {episodeUrl.sources && (
            <Iframe height="100%" width="100%" url={episodeUrl.Referer} />
          )}
        </Modal.Body>
      </Modal>
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
