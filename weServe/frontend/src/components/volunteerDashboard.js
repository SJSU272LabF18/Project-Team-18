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

        this.state = {
            opportunityResults: people, 
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
                            <button className="mysendButton"> Join Us Today!</button>
                            <button className="mysendButton"> Read More</button>
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
                    {DisplayMsgList}
                    <br></br><br></br>
                </div>
            </div>
        )
    }
}

export default homePage;