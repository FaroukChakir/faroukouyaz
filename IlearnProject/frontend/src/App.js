import { Carousel, Container } from 'react-bootstrap';
import Header from './Components/Header'
import ControlledCarousel from './Components/IndexBody'
import img from './BackgroundForAppjs/backJPG.jpg'
import SignUp from './SignUp/SignUp'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import IndexBody from './Components/IndexBody';
function App() {
  return (
    // <Login/>
<Router>
 
  
  <Route path="/" component={Header} exact />
  <Route path="/" component={IndexBody} exact />


    <Route path="/SignUp" component={SignUp} exact />
  
  
</Router>
  );
}

export default App;
