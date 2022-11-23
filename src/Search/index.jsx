import { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios, * as others from "axios";

import "./style.css";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [foundList, setFoundList] = useState([]);

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://gogoanime.consumet.org/search?keyw=${searchValue}`)
      .then((response) => setFoundList(response.data));
  }, [searchValue]);

  return (
    <Container fluid>
      <input
        className="search__input"
        placeholder="Search..."
        onChange={onChange}
      />
      {foundList.length > 0 && (
        <div className="content">
          <h1 style={{ color: "white" }}>Result</h1>
          <div className="list">
            {foundList.map((anime) => (
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
          </div>
        </div>
      )}
    </Container>
  );
}
