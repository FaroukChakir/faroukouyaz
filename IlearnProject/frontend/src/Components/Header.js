import React from 'react'
import {Navbar,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom"; 
import Logo from './Logo.jpg'
import  './Header.css'
export default function Header()
{
  
  return (

   

<Navbar>
  <div style={{backgroundColor: 'red'}}>
    <img src={Logo} className='ImgCss' />

  </div>
  
  <Form >
    <InputGroup>
    
    
      <InputGroup.Prepend>
      </InputGroup.Prepend>
      &nbsp;
      <FormControl
      
      placeholder="Email"
      aria-label="Email"
      aria-describedby="basic-addon1"
      />
        &nbsp;
         <FormControl
        placeholder="Password"
        aria-label="Password"
        type="password"
        aria-describedby="basic-addon1"
        /> &nbsp;
        <Link>
         <Button type="submit">Submit</Button>
        </Link>&nbsp;
         <Link to="/SignUp">
         <Button  type="submit"   >SignUp</Button>
         </Link> 
       
    </InputGroup>
  </Form>
 
</Navbar>
   
);

}