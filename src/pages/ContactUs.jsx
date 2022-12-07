import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'

export default function ContactUs() {
const [form, setForm] = useState({})

  const submitPost = (e) => {
    e.preventDefault()

    fetch('http://localhost:3030/contactus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    alert("Message Sent")
    //  console.log(form)
  }

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // console.log(form)

  return (
    <>
      <form action='submit'>
        <label htmlFor=''>Contact Us</label>
        <input name='Contact Us' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Text</label>
        <input name='text' type='text' onChange={handleForm} />
        <br />
        <label htmlFor=''>Date</label>
        <input name='date' type='date' onChange={handleForm} />
        <br />
        <button type='submit' onClick={submitPost}>
          Add new post
        </button>
      </form>
    </>
  );
}