import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Stack } from 'react-bootstrap';
import img from '../assets/carousel.jpg';

function ChoosingTheBestRealtor() {
  return (
    <>
    <Stack gap={2} className="ratio-16x9">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          src={img}
          alt="First slide"
          height="600"

          />
        <Carousel.Caption>
          <h3>Question #1</h3>
          <p>Are you a full-time or part-time?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
          />

          

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
          />

        

        <Carousel.Caption>
          <h3>Third slide label</h3>
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