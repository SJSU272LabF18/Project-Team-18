import React, { Component } from 'react';


//import '../travelerLogin/travelerLogin.css';
/*import axios from 'axios';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';*/

import Navbar from '../components/navbar';
import homePageBackground from '../assets/images/homePageBackground.jpg';
import homePageBackground2 from '../assets/images/homePageBackground2.jpg';
import homePageBackground3 from '../assets/images/homePageBackground3.jpg';

var Carousel = require('react-responsive-carousel').Carousel;

class homePage extends Component {
    constructor(props) {
        super(props);

        const people = [];
        for (let i = 0; i < 6; i++) {
            people.push({
                opp_name: "Chidren and Youth",
                start_date: "Nov 2018",
                end_date: "Jan 2019",
                hrs: 5,
                location: "Mumbai"
            });
        } 

        const volunteer = [];
        for (let i = 0; i < 6; i++) {
            volunteer.push({
                fname: "devanshi",
                lname: "trivedi",
                opportunities_enrolled: [{ opp_name: "opp1", opp_description: "desc1" }, { opp_name: "opp2", opp_description: "desc2" }],
                causes: ["care", "enviornment"],
                age: 25
            });
        }

        this.state = {
            
            volunteerResults: volunteer,
            handleOpportunity:""
            /* clickedUser:"Lauren Miller",
             clickedUserDetails:"Amazon Recruiter"*/
        }
        /*this.handleCreateNewMesage = this.handleCreateNewMesage.bind(this);
        this.handleClickedViewMsg = this.handleClickedViewMsg.bind(this);*/
        this.handleOpportunity = this.handleOpportunity.bind(this);
    }

    handleOpportunity = () => {
        /*this.setState({
            createMsgFlag : false
        });*/
    }
    /*  handleCreateNewMesage = () => {
          this.setState({
              createMsgFlag : true
          });
      }
      handleClickedViewMsg = () => {
          this.setState({
              createMsgFlag : false
          });
      }*/

    render() {
        require('../styles/volunteerDashboard.css');
        let redirect = null;

        let userList = null;
        //student based
        userList = (

            <div class="flex-container ">
                {this.state.volunteerResults.map((volunteer, index) => (
                    <div key={index} >

                        <div class="card-title firstheight" style={{ 'textAlign': 'center' }}>
                            <h4>{volunteer.fname} {volunteer.lname}</h4>
                        </div>
                        <div class="card-body secondheight">
                            <div className="row">
                                <div class="col-sm-8 col-md-8 col-lg-4  ">
                                    <p class=" fonts bottomPadding"><b>Causes Served:</b> </p>
                                </div>
                                <div class="col-sm-8 col-md-8 col-lg-8  ">
                                    {volunteer.causes.map((cause, index) => (
                                        <p key={index} className="leftpad">
                                            {cause}
                                        </p>
                                    ))}  
                                </div>
                            </div>
                            <p class=" fonts bottomPadding"><b>Age:</b> {volunteer.age} </p>
                            <p class=" fonts bottomPadding"><b>Number of opportunities enrolled in:</b> {volunteer.opportunities_enrolled.length} </p>

                        </div>
                        <div class="card-body thirdheight">
                            <button className="mysendButton"> Contact</button>
                            <button className="mysendButton" data-toggle="modal" data-target="#myModal"> Read More</button>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">

                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <h4 style={{color:"#7fc241"}}>{volunteer.fname} {volunteer.lname}</h4>
                                            <p>The volunteer is interested in serving for various
                                                causes like {volunteer.causes.map((cause, index) => (
                                                    <div key={index} >
                                                        <b>{cause}</b>
                                                    </div>
                                                ))}
                                            </p>
                                            <p>
                                                The volunteer has worked for various opportunities like
                                                {volunteer.opportunities_enrolled.map((cause, index) => (
                                                    <div key={index} >
                                                        <b>{cause.opp_name}</b>
                                                        <p>{cause.opp_description}</p>
                                                    </div>
                                                ))}
                                            </p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        )

        return (
            <div>
                {redirect}

                <Navbar />


                <div className="greyBackground">
                    <br></br>
                    <label for="sel1"><h6>Tell us what you care for:</h6></label>
                    <select onChange={this.handleOpportunity} class="form-control myWidth" id="sel1">
                        <option value="" >Select cause...</option>
                        <option value="Children and Youth" selected={this.state.handelOpportunity == "Children and Youth"}>Children and Youth</option>
                        <option value="Education and Literacy" selected={this.state.handelOpportunity == "Education"}>Education</option>
                        <option value="Animals" selected={this.state.handelOpportunity == "Animals"}>Animals</option>
                        <option value="Community Development" selected={this.state.handelOpportunity == "Community Development"}>Community Development</option>
                        <option value="Enviornment" selected={this.state.handelOpportunity == "Enviornment"}>Enviornment</option>
                        <option value="Senior" selected={this.state.handelOpportunity == "Senior"}>Senior </option>
                        <option value="Health and Medicine" selected={this.state.handelOpportunity == "Health and Medicine"}>Health and Medicine</option>
                        <option value="Advocacy and HR" selected={this.state.handelOpportunity == "Advocacy and HR"}>Advocacy and HR</option>
                        <option value="Specially Abled People" selected={this.state.handelOpportunity == "Specially Abled People"}>Specially Abled People</option>
                       
                    </select>

                    <button type="submit" className="mybutton">GO</button>
                    <br></br><br></br>
                    {userList}
                    <br></br><br></br>
                </div>
            </div>
        )
    }
}

export default homePage;