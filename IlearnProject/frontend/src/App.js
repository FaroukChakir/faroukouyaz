import { Carousel, Container, Navbar } from 'react-bootstrap';
import Header from './Components/Header'
import ControlledCarousel from './Components/IndexBody'
import img from './BackgroundForAppjs/backJPG.jpg'
import SignUp from './SignUp/SignUp'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import IndexBody from './Components/IndexBody';
import Header_stud from './Student_pages/Header_stud'

function App() {
  return (
    // <Login/>
<Router>

  <Route path="/" component={Header} exact />
  <Route path="/" component={IndexBody} exact />


  <Route path="/SignUp" component={SignUp} exact />
  
  <div>
    <Header_stud></Header_stud>
  </div>
</Router>
  );
}

export default App;
