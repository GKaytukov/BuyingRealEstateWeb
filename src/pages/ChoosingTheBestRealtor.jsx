import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Stack } from 'react-bootstrap';
import img from '../assets/carousel8.jpg';
import img2 from '../assets/carousel3.jpg';
import img3 from '../assets/carousel4.jpg';
import img4 from '../assets/carousel6.jpg';
import img5 from '../assets/carousel7.jpg';
import img6 from '../assets/carousel22.jpg';

function ChoosingTheBestRealtor() {
  return (
    <>
    <Stack gap={2} className="ratio-16x9">
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          src={img}
          alt="1st slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />
        <Carousel.Caption>
          <h3 style={{color: "white"}}>When Choosing the Best Realtor...</h3>
          <p style={{color: "white"}}>First, you should look for a Full-Time Agent with at least 15 years or more of experience!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img2}
          alt="2nd slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />


        <Carousel.Caption>
          <h3>Question #2</h3>
          <p>What are your hours of availability and preferred method of contact?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img3}
          alt="3rd slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />


        <Carousel.Caption>
          <h3>Question #3</h3>
          <p>Are you a full-time or part-time?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img4}
          alt="4th slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />



        <Carousel.Caption>
          <h3>Question #4</h3>
          <p>How many other buyers are you currently working with at this present time?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img5}
          alt="5th slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />


          

        <Carousel.Caption>
          <h3>Question #5</h3>
          <p>What type of buyers you specialize working for? And what price ranges?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={img6}
          alt="6th slide"
          style={{objectFit: 'cover', width: '100vw', height: '95vh', objectPosition: 'top'}}

          />

        

        <Carousel.Caption>
          <h3>Question #6</h3>
          <p>
            What was the hardest closing you had? How did you handle it?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Stack>
    </>
  );
}

export default ChoosingTheBestRealtor;