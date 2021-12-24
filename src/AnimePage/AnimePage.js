import react from 'react';
import { Container , Carousel , Card, Button } from 'react-bootstrap';

import './AnimePage.css'

function AnimePage(){
  return(
    <div className="AnimePage">
    <Container fluid>
      <img
        src="https://images2.alphacoders.com/229/thumb-1920-229932.jpg"
        className="d-block w-100"
        />
    </Container>
    </div>
  );
};

export default AnimePage
