import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

export default function ApplyForFunding() {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const submitPost = (e) => {

    e.preventDefault() //You prevent the refreshing of the page b/c it is single page
    const formData = new FormData(e.target),
          formDataObj = Object.fromEntries(formData.entries())
          // console.log(formDataObj)
  
    fetch('https://buying-real-estate-api-v-c7168.web.app/applyforfunding', { //my API endpoint
    // fetch('http://127.0.0.1:4050/applyforfunding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObj),
    })
    .then(response => response.json())
    .then(() => {
      alert("Message Sent")
      navigate('/allusers')
    })
  }


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
            name="firstName"    
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
          <Form.Control 
          required
          type="text"
          placeholder="Address"
          defaultValue="Address"
          name="address"
        />  
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      <Form.Group className="mb-3">

        
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control 
          required
          type="text" 
          placeholder="City" 
          defaultValue=''
          name='city'
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>






        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control
          required 
          type="text" 
          placeholder="State" 
          defaultValue=''
          name='state'
           />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>




        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          required
          type="text" 
          placeholder="Zip" 
          defaultValue=''
          name='zip'
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>

        {/* <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Mortgage Lender #1" />
        <Form.Control aria-label="Text input with checkbox" value='Fidelity Mortgage Brokers - 5447 N Federal Hwy, Fort Lauderdale, FL 33308 Contact: (716) 319-8592'/>
      </InputGroup> */}

      <h1>List of Required Documents to Submit to your Lender of Choice:</h1>

        <InputGroup className="mb-3">
        <div></div>
        <InputGroup.Checkbox aria-label="2 Most Recent Paystubs" />
        <Form.Control aria-label="Text input with checkbox" value='Please Check the Box on the left, if you have your "2 Most Recent Paystubs & Proof of Any Other Income to be considered for the loan" to submit to your lender.' />
      </InputGroup>
      <InputGroup>
      <div></div>
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" value='Please Check the Box on the left, if you have your "2 Months of your Most Recent Bank Statements" to submit to your lender. ' />
      </InputGroup>
      <InputGroup>
      <div></div>
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" value='Please Check the Box on the left, if you have your "The Past 2 Years of your Signed Personal &/or Business Tax Returns" to submit to your lender.' />
      </InputGroup>
      <InputGroup>
      <div></div>
        <InputGroup.Checkbox aria-label="Radio button for following text input" />
        <Form.Control aria-label="Text input with radio button" value='Please Check the Box on the left, if you have your "Down Payment Amount and your Desired Mortgage Payment" to submit to your lender.' />
      </InputGroup>
      </Form.Group>
      <div>Once you have confirmed you have all the requested documents listed above to submit to your Lender, please click on the Submit Button down below.</div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form.Group>
  
    </Form>
  )
  
  }

  

