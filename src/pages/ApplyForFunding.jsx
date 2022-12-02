import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

export default function ApplyForFunding() {
const [form, setForm] = useState({})

  const submitPost = (e) => {

    e.preventDefault()
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
          console.log(formDataObj)
  
    fetch('https://buying-real-estate-web.web.app/applyforfunding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObj),
    })
    .then(response => response.json())
    .then(data => {
      navigate('/ChooseALender')
    })
    alert("Message Sent")
  }
  const navigate = useNavigate()

  


  return (
    <Form onSubmit={submitPost}>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  name="email"/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            name="firstname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            name="lastname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      <Form.Group className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        <InputGroup className="mb-3">
        <Form.Label>Please Check Box: 2 Most Recent Paystubs</Form.Label>
        <InputGroup.Checkbox aria-label="2 Most Recent Paystubs" />
        <Form.Control aria-label="Text input with checkbox" />
      </InputGroup>
      <InputGroup>
      <Form.Label>Please Check Box: 2 Months of your most Recent Bank Statement </Form.Label>
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
      <InputGroup>
      <Form.Label>Please Check Box: 2 Most Recent Tax Returns</Form.Label>
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
      <InputGroup>
      <Form.Label>Please Check Box: For List of Other Income</Form.Label>
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" />
      </InputGroup>
      </Form.Group>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form.Group>
  
    </Form>
  )
  
  }

  

