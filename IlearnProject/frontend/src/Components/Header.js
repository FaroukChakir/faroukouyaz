import React from 'react'
import {Navbar,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom"; 
import Logo from './Logo.jpg'
import  './Header.css'
export default function Header()
{
  
  return (

   

<Navbar>
  <div >
    <img src={Logo} className='ImgCss' />

  </div>
  
  <Form >
    <InputGroup>
    
    
      <InputGroup.Prepend>
      </InputGroup.Prepend>
      &nbsp;
      <FormControl
      className="formControl"
      placeholder="Email"
      aria-label="Email"
      aria-describedby="basic-addon1"
      />
      
         <FormControl
        placeholder="Password"
        aria-label="Password"
        type="password"
        aria-describedby="basic-addon1"
        /> 
        <Link>
         <Button type="submit">Submit</Button>
        </Link>
         <Link to="/SignUp">
         <Button  type="submit"   >SignUp</Button>
         </Link> 
       
    </InputGroup>
  </Form>
 
</Navbar>
   
);

}