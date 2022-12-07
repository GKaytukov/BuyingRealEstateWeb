import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

export default function Login() {
const [form, setForm] = useState({})

  const submitPost = (e) => {
    e.preventDefault()

    fetch('http://localhost:3030/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form), //it convert JavaScript to JSON
    })
    alert("Message Sent")
    // console.log(form)
  }

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })// It puts spread operator It seperate the array //My objects in my database has a lot of components, I am breaking the subject because I just want the name only 
  }

  // console.log(form)

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleForm}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"onChange={handleForm} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitPost}>
        Submit
      </Button>
    </Form>
  )
  
  }