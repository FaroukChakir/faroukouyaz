import React, { Component, Fragment } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SelectedCours.css";
import "../Header";
import OtherPagesHeader from "../OtherPagesHeader";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
  Card,
} from "react-bootstrap";
import "./AllCoursesCss.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class GetAllCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getdata: [],
    };
  }
  // change=(event)=>
  // {
  //     event.preventDefault();
  //     // console.log(event.target.elements.username.value)
  // }

  /*Getting Data from Database / Django */
  bringindata() {
    return axios
      .get("/api/courses/")
      .then((json) => {
        const getdata = json.data;
        this.setState({ getdata });
        console.log(getdata);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /*Getting Data from Database / Django */

  /*Posting Data to  Database / Django */
  submitCourse() {
    let form_data = new FormData();
    form_data.append("User_id");
  }
  /*Posting Data to  Database / Django */

  /*Executing */
  componentDidMount() {
    this.bringindata();
  }
  alertClicked() {
    alert("You clicked the third ListGroupItem");
  }
  render() {
    return (
      <div>
        <div className="Head">
          <OtherPagesHeader />
        </div>
        
        <div className="CenterDiv">
        <h3 style={{textAlign:"center"}} >Available Courses</h3>
          {this.state.getdata.map((link, i) => {
            var x = <div>{link.Title}</div>;
            var a = `/courses/@${link.Class_id}`;
            return (
              <div className="VideosDIv">
                <Card class="card border-primary mb-3">
                  <Card.Body style={{ backgroundColor: "#34495e" }}>
                    <li
                      style={{
                        textAlign: "center",
                        listStyleType: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {link.Title}
                    </li>
                    <Card.Subtitle className="mb-2 text-muted">
                      Categorie : {link.categorie}
                    </Card.Subtitle>
                    <Card.Text>
                      <li style={{listStyleType:"none"}} >Description : {link.Description}</li>
                    </Card.Text>
                    <a href={a} class="btn btn-primary">
                      {" "}
                      Join the Course{" "}
                    </a>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

          {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Join the Course</Card.Link>
                </Card.Body>
                </Card> */}
        </div>
      </div>
    );
  }
}
