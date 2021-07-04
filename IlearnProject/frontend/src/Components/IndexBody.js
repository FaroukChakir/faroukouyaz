import React from 'react'
import {Carousel} from 'react-bootstrap'
import image1 from './IndexCarousel/1.jpg'
import image2 from './IndexCarousel/3.jpg'
import './IndexBody.css'
import Header from './Header'
function IndexBody()
{
    return(
      <body style={{backgroundColor:"white"}} >

      <div>
        <div>
          <Header/>
        </div>
        <div>

        <Carousel >
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
      />
    <Carousel.Caption>
        <div style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',borderRadius:'20px',alignItems:'left'}}>

      <h2 style={{color:'white'}} >Students</h2>
      <p style={{color:'white'}} >Our website offers courses in every subject you're in need of to learn !
      for the Student users and FOR FREE !</p>
        </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={4000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
      />
    <Carousel.Caption>
    <div style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',borderRadius:'20px',alignItems:'left'}}>

<h2 style={{color:'white'}} >Teachers</h2>
<p style={{color:'white'}} >Our websites offers ability for teachers to upload
their youtube videos on our platform for free for the Students to check</p>
  </div>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
      </div>
      </div>
      </body>
    );
}
export default  IndexBody;