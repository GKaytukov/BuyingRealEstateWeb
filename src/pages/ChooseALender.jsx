import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import img from '../assets/carousel6.jpg';

export default function ChooseALender() {
  const navigate = useNavigate()

  const submitPost = (e) => {

    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
          (formDataObj)
  
    fetch('https://buying-real-estate-api-v-c7168.web.app/users', {
    // fetch('http://127.0.0.1:4050/allusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObj),
    })
    .then(response => response.json())
    .then(() => {
      alert("Message Sent")
      // 
      
      navigate('/AllUsers')
    })
  }




  return (
    <>
    <h1>Choose A Lender</h1>
    <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Mortgage Lender #1" />
        <Form.Control aria-label="Text input with checkbox" value='Fidelity Mortgage Brokers - 5447 N Federal Hwy, Fort Lauderdale, FL 33308 Contact: (716) 319-8592'/>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Mortgage Lender #2" />
        <Form.Control aria-label="Text input with checkbox" value='The Mortgage Firm, Inc. - 7000 W Palmetto Park Rd STE 306, Boca Raton, FL 33433 Contact: (561) 923-8471'/>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Mortgage Lender #3" />
        <Form.Control aria-label="Text input with checkbox" value='The Discount Mortgage Mortgage Store - 7452 Champagne Pl, Boca Raton, FL 33433 Contact: (561) 577-1882'/>
      </InputGroup> 

      <img
          src={img}
          alt=""
          style={{objectFit: 'cover', width: '100vw', height: '95vh'}}

          />


    </>
    
    
  );
}

{/* <Button variant="primary" type="submit">
Submit
</Button>
</Form.Group> */}