import React,{useState} from 'react'
import {Navbar,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom"; 
import Logo from './Logo.jpg'
import  './Header.css'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';

export default function Header()
{
  
  

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

   function checkLogin (e){
    e.preventDefault()
    if(email !="" || password !="")
    {
     axios.get(`/api/users/${email}/${password}`).then((json)=>{
          console.log(json.data.IsTeacher)
          if(json.data.IsTeacher){
            //student
          
            var link = `/MyUploads/@${json.data.User_id}`
            window.location.href = link ;
            // history.push();
          }
          else{
            
            //teacher
            window.location.href="/AllCourses";
          }
      })
    }
  }

return (
  <Navbar>
    <div >
      <img src={Logo} className='ImgCss' />

    </div>
    
    <Form onSubmit={checkLogin}>
      <InputGroup>

        <FormControl
          className="formControl"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <FormControl
          placeholder="Password"
          aria-label="Password"
          type="password"
          aria-describedby="basic-addon1"
          onChange={(e)=>setPassword(e.target.value)}
        />
          &nbsp;
         
          <Button type="submit">Submit</Button>
         

          &nbsp;
        <Link to="/SignUp">
          <Button  type=""   >SignUp</Button>
        </Link> 

      </InputGroup>
    </Form>
  
  </Navbar>
);

}