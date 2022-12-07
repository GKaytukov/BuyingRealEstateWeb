import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SignUp() {
const [form, setForm] = useState({})

  const submitPost = (e) => {
      e.preventDefault()
      // console.log(form)

    fetch('https://buying-real-estate-api-v-c7168.web.app/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    alert("Message Sent")

  }

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // console.log(form)

  return (
    <Form onSubmit={submitPost}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>

        <Form.Control 
        name='email' //Need name
         type="email" placeholder="Enter email" 
         onChange={handleForm}/> {/*need onChange for each field */}

        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type='password' placeholder="Password"onChange={handleForm} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name='checkbox' type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitPost}>
        Submit
      </Button>

{/* <Row>
  <Col>
    <Form.Control name='First Name' placeholder="First name" />
  </Col>
  <Col>
    <Form.Control name='Last Name' placeholder="Last name" />
  </Col>
</Row>

<Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control name='Address'placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control name='Address 2'placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check name='checkbox'type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button> */}

</Form>

  
  )
  
  }





    









      

