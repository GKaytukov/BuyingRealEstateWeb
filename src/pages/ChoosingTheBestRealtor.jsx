import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Stack } from 'react-bootstrap';
import img from '../assets/carousel8.jpg';
import img2 from '../assets/carousel3.jpg';
import img3 from '../assets/carousel4.jpg';

function ChoosingTheBestRealtor() {
  return (
    <>
    <Stack gap={2} className="ratio-16x9">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          src={img}
          alt="First slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />
        <Carousel.Caption>
          <h3>Question #1</h3>
          <p>Are you a full-time or part-time?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img2}
          alt="First slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />

          

        <Carousel.Caption>
          <h3>Question #2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img3}
          alt="First slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh', objectPosition: 'top'}}

          />

        

        <Carousel.Caption>
          <h3>Question #3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Stack>
    </>
  );
}

export default ChoosingTheBestRealtor;