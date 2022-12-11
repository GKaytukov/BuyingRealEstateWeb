import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../assets/carousel11.jpg';

function DefaultExample() {
  return (
    
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That every 3 years you are considered a First-Time Buyer!
        </div>
        <Badge bg="primary" pill>
          1
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That you can qualify to buy a house with just a Job Offer Letter and 2 PayStubs prior to closing!
        </div>
        <Badge bg="primary" pill>
          2
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That you buy a house with 100% gift money from a family member, that's including the down payment and all closing costs.
        </div>
        <Badge bg="primary" pill>
          3
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That you buy a fourplex/multi-family property live in the first unit rent-free, while the other 3 apartments rental payments pay the Mortgage.
        </div>
        <Badge bg="primary" pill>
          4
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That every time you purchase a house larger than the last one your considered a First-Time Buyer with each purchase!
        </div>
        <Badge bg="primary" pill>
          5
        </Badge>
      </ListGroup.Item>

      <img
          src={img}
          alt=""
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />
    </ListGroup>

    
  );
}

export default DefaultExample;