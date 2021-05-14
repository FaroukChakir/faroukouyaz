import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {withRouter} from 'react-router';
import "./SignUp.css";
import { Link } from "react-router-dom";
import pic from '../Components/Logo.jpg'

 function SignUp() {
  const [Name, setName] = useState("");
  const [Fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <div className="divInformation">
      <img src={pic} />

      </div>
      <div className="divInformation">
      <h2>
        Sign Up for free 
        </h2>
      </div>
      <div className="divForm">

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="Name">
          <Form.Label><p>Name</p></Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            />
        </Form.Group>

        <Form.Group size="lg" controlId="Fname">
          <Form.Label><p>Family Name</p></Form.Label>
          <Form.Control
            type="text"
            value={Fname}
            onChange={(e) => setFname(e.target.value)}
            />
        </Form.Group>

             <Form.Group size="lg" controlId="email">
          <Form.Label><p>Email</p></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label><p>Password</p></Form.Label>
          <Form.Control
            autoFocus
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
            />
        </Form.Group>
        <Form.Group size="lg" controlId="Check">
          <Form.Check type="checkbox" label="Im a Teacher" style={{color:'black'}} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
       <br></br>
        <Button  type="submit" disabled={!validateForm()}>
          Register
        </Button>
        <Link to="/">
        <p id="LoginBtn">Login ?</p>
        </Link>
      </Form>
            </div>
            
    </div>
  );
}
export default  SignUp;