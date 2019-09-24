import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './about.css'
export class About extends Component {
    render(){
        return (
            <div className="about">
                    <Row class="row">
                        <Col lg={true} className="left-column">
                            <div className="text-container">
                            <h3 className="space">We are serving to more than 10 million people & next milestone is 1 billion</h3>
                            <p className="gray"> Want to be part of this mission?</p>
                            <button className="join">Join us</button>
                            </div>
                        </Col>
                        <Col lg={true} className="right-column">
                        </Col>
                    </Row>
                    <div className="achievements">
                    <div className="rectangle">
                        <div>Google Play 10 million club</div>
                    </div>
                    <div className="rectangle">
                        <div>Title Sponsor of NITP Fest</div>
                    </div>
                    <div className="rectangle">
                        <div>Invited in Google App Summit</div>
                    </div>
                    <div className="rectangle">
                        <div>Featured in International media</div>
                    </div>
                    </div>
            </div>
        )
    }
}