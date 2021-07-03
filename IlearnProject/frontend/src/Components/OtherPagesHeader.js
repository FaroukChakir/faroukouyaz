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
    <Link to="/" >
    <img src={Logo} className='ImgCss' />
    </Link>

  </div>
  
  

 
</Navbar>
   
</div>
);

}