import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";
import { Link } from "react-router-dom";
import pic from '../Components/Logo.jpg'
import axios from "axios";

 function SignUp() {
  
const [Name, setName] = useState("")
const [FName, setFName] = useState("")
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")
const [IsTeacher, setIsTeacher] = useState(false)

  // function handleuser(e) {
  //   // e.preventDefault();
  //   const {name,value} = e.target;
  //   setUser({...user, [name]: value});
  // }

  

  function sendUser(e){
    e.preventDefault();
      if(Name!="" || FName!="" || Email!="" || Password!=""){
        let form_data = new FormData();
        if(IsTeacher==='on')
        {
          form_data.append("IsTeacher", true);
        }
        else {
          form_data.append("IsTeacher", false);
        }
        form_data.append("Name", Name);
        form_data.append("FName", FName);
        form_data.append("Email", Email);
        form_data.append("Password", Password);
        axios.post("/api/Postusers/", form_data)
        .then((response) => {
          alert("Bien inscrit")
        }).catch((err) =>{
          e.preventDefault()
          alert("Error")
        });
    }
  }

  return (
    <div className="Login" style={{height:"100%"}}>
      <div className="divInformation">
      <img src={pic} />

      </div>
      <div className="divInformation">
      <h2>
        Sign Up for free 
        </h2>
      </div>
      <div className="divForm">

      <Form onSubmit={sendUser}>
        <Form.Group controlId="Name">
          <Form.Label><p>Name</p></Form.Label>
          <Form.Control
            size="lg"
            autoFocus
            type="text"
            name="Name"
            onChange={(e)=>setName(e.target.value)}
            />
        </Form.Group>
        <br/>
        <Form.Group controlId="FName">
          <Form.Label><p>Family Name</p></Form.Label>
          <Form.Control
            size="lg"
            autoFocus
            type="text"
            name="FName"
            onChange={(e)=>setFName(e.target.value)}
            />
        </Form.Group>
        <br/>
             <Form.Group controlId="email">
          <Form.Label><p>Email</p></Form.Label>
          <Form.Control
            size="lg"
            autoFocus
            type="email"
            name="Email"
            onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>
        <br/>
        <Form.Group controlId="password">
          <Form.Label><p>Password</p></Form.Label>
          <Form.Control
            size="lg"
            autoFocus
            type="password"
            name="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />
        </Form.Group>
        <br/>
        <Form.Group size="lg" controlId="Check">
          <Form.Check 
          type="checkbox"
          label="Im a Teacher"
          style={{color:'black'}} 
          name="IsTeacher"
          onChange={(e)=>setIsTeacher(e.target.value)} />
        </Form.Group>
       <br></br>
        <Button  type="submit">
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