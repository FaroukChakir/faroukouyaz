import React from 'react'
import {Navbar,Form,InputGroup,FormControl,Button} from 'react-bootstrap'
import { Link } from "react-router-dom"; 
import Logo from './Logo.jpg'
import  './Header.css'
import './Courses/AllCoursesCss.css'
export default function OtherPagesHeader()
{
  
  return (

   
<div >

<Navbar>
  <div >
    <img src={Logo} className='ImgCss' />

  </div>
  <div className="DIsc"  >
    <Link to="/" >
      <Button style={{backgroundColor:"red"}} >Disconnect</Button>
    </Link>

  </div>
  

 
</Navbar>
   
</div>
);

}