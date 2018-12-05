import React, { Component } from 'react';

import { Link } from 'react-router-dom';
//import '../travelerLogin/travelerLogin.css';
/*import axios from 'axios';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';*/

import Navbar from '../components/navbar';
import homePageBackground from '../assets/images/homePageBackground.jpg';
import homePageBackground2 from '../assets/images/homePageBackground2.jpg';
import homePageBackground3 from '../assets/images/homePageBackground3.jpg';
import { ROOT_URL } from '../constants/constants';

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
                fname: "Devanshi",
                lname: "trivedi",
                opportunities_enrolled: [{ opp_name: "opp1", opp_description: "desc1" }, { opp_name: "opp2", opp_description: "desc2" }],
                causes: ["care", "enviornment"],
                age: 25
            });
        }

        this.state = {
            opportunityResults: people,
            volunteerResults: volunteer
            /* clickedUser:"Lauren Miller",
             clickedUserDetails:"Amazon Recruiter"*/
        }
        /*this.handleCreateNewMesage = this.handleCreateNewMesage.bind(this);
        this.handleClickedViewMsg = this.handleClickedViewMsg.bind(this);*/
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
        require('../styles/homePage.css');
        let redirect = null;

        let DisplayMsgList = null;
        //location based
        DisplayMsgList = (

            <div class="flex-container ">

                {this.state.opportunityResults.map((opportunity, index) => (
                    <div key={index} >

                        <div class="card-title firstheight" style={{ 'textAlign': 'center' }}>
                            <h4>{opportunity.opp_name}</h4>
                        </div>
                        <div class="card-body secondheight">
                            <div className="row ">
                                <div class="col-sm-2 col-md-2 col-lg-2  ">
                                    <i class="icon ion-calendar ionIcon"></i> <br></br>
                                    <i class="icon ion-clock ionIcon"></i> <br></br>
                                    <i class="icon ion-navigate ionIcon"></i>
                                </div>
                                <div class="col-sm-8 col-md-8 col-lg-8  ">
                                    <div className="bottomPadding">{opportunity.start_date}-{opportunity.end_date} </div>
                                    <div className="bottomPadding">{opportunity.hrs}hrs/week</div>
                                    <div >{opportunity.location} </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body thirdheight">
                        <Link to='/login'><button className="mysendButton"> Join Us Today!</button></Link>
                            <button className="mysendButton"> Read More</button>
                        </div>

                    </div>
                ))}
            </div>
        )

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
                            <button className="mysendButton"> Apply!</button>
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

                <div class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner imageHeight">
                        <div class="carousel-item active">
                            <img src={homePageBackground} />
                        </div>
                        <div class="carousel-item ">
                            <img src={homePageBackground2} />
                        </div>
                        <div class="carousel-item">
                            <img src={homePageBackground3} />
                        </div>

                        <div class="carousel-caption">
                            <h3 style={{ "color": "white" }}>Raise Your Helping Hand</h3>
                            <button className="joinUsButton"><h4>JOIN US TODAY!</h4></button>
                        </div>
                    </div>
                </div>

                <div className="greyBackground">
                    <br></br>
                    <h2 className="textCenter">FEATURED OPPORTUNITIES</h2>
                    <br></br>
                    {DisplayMsgList}
                    <br></br><br></br>
                    <div>
                        <h4>What volunteers have to say!</h4>
                    </div>
                    {userList}
                </div>
            </div>
        )
    }
}

export default homePage;