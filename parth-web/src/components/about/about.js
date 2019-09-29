import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './about.module.css'
import image from '../../assets/images/group-4.png'
import background from "../../assets/images/group-70-copy.svg"
export class About extends Component {
    render(){
        return (
            <div id="home" className={styles.about}>
                <Container fluid={true}>
                    <Row  noGutters={true}>
                        <Col  className={styles.leftColumn} sm={12} lg={6}>
                            <div className={styles.textContainer}>
                            <h3 className={styles.space}>We are already significantly connected to 10 million people.
1 billion doesn’t seem far !!</h3>
<img src={image}  className={styles.imageMob}/>
<div className={styles.clearfix}></div>
                            <p className={styles.gray}> Want to be part of this mission?</p>
                            <button className={styles.join}><a href="mailto:connect@parth.ind.in" className={styles.link}>Join us</a></button>
                            </div>
                        </Col>
                        <Col className={styles.rightColumn} sm={12} lg={6}>
                            <img src={image}  className={styles.image}/>
                        </Col>
                    </Row>
                    </Container>
                    <div className={styles.achievements} >
                        <div className={styles.rectangle}>
                            <div className={styles.text}>Google Play 10 million club</div>
                        </div>
                    <div className={styles.rectangle}>
                        <div className={styles.text}>Title Sponsor of NITP Fest</div>
                    </div>
                    <div className={styles.rectangle}>
                        <div className={styles.text}>Invited in Google App Summit</div>
                    </div>
                    <div className={styles.rectangle}>
                        <div className={styles.text}>Featured in International media</div>
                    </div>
                    </div>
                    
            </div>
        )
    }
}