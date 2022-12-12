import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../assets/carousel11.jpg';

function FunFacts() {
  return (
    
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That every 3 years you are considered a "First-Time Home Buyer"!
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
          That you can qualify to buy a house with just a "Job Offer Letter and 2 PayStubs prior to closing"!
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
          That you can buy a house with "100% Gift Money from any Family Member", that's including the down payment and all closing costs. "And the seller is allowed to pay up to 4% of the purchase price to be applied towards your Closing Costs at the time of closing". 
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
          That you can buy a fourplex/multi-family property, and "You the homeowner can live in the first unit Rent-Free", while the other 3 apartments rental payments are paying your Mortgage payment in full.
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
          That every time you purchase "A house larger than the last one you can be considered a First-Time Buyer with each purchase" depending on the Lender!
        </div>
        <Badge bg="primary" pill>
          5
        </Badge>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Did you know?</div>
          That every home I bought for myself as a Realtor was at little to no cost for me! Hmmm...You Ask How? Well, you are able to request up to 6% of the purchase price from the seller as Seller's Contribution to be applied towards your closing costs. I was also able to apply my 3% Real Estate Commission towards my closing costs as well for a grand total of 9% and bought each house for a few bucks or nothing at all.
        </div>
        <Badge bg="primary" pill>
          6
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

export default FunFacts;