import { Carousel, Container } from 'react-bootstrap';
import Header from './Components/Header'
import ControlledCarousel from './Components/IndexBody'
import img from './BackgroundForAppjs/backJPG.jpg'
import SignUp from './SignUp/SignUp'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import IndexBody from './Components/IndexBody';
import ClickedCourse from './Components/Courses/ClickedCourse'
import UploadCourse from './Components/Courses/UploadCourse'
import GetAllCourses from './Components/Courses/AllCourses'
import GetTeacherCourses from './Components/Courses/courses_prof'



function App() {
  return (
    // <Login/>
    // <Youtuberender/>
    // <YoutuberenderWithName/>
<Router>
 
    <Route path="/" component={IndexBody} exact />
    <Route path="/SignUp" component={SignUp} exact />

    <Route path="/Courses/@:Id" component={ClickedCourse} exact />
    <Route path="/MyUploads/@:Id" component={GetTeacherCourses} exact/>
    <Route path="/UploadCourse/@:Id" component={UploadCourse} exact/>
    <Route path="/AllCourses" component={GetAllCourses} exact />   
</Router>
  
  );
}

export default App;
