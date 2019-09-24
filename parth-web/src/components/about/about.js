import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './about.module.css'


export class About extends Component {
    render(){
        console.log("STYLES", styles);
        return (
            <div className={styles.about}>
                <Container fluid={true}>
                    <Row  noGutters={true}>
                        <Col  className={styles.leftColumn}>
                            <div className={styles.textContainer}>
                            <h3 className={styles.space}>We are serving to more than 10 million people & next milestone is 1 billion</h3>
                            <p className={styles.gray}> Want to be part of this mission?</p>
                            <button className={styles.join}>Join us</button>
                            </div>
                        </Col>
                        <Col className={styles.rightColumn}>
                        </Col>
                    </Row>
                    </Container>
                    <div className={styles.achievements}>
                    <div className={styles.rectangle}>
                        <div>Google Play 10 million club</div>
                    </div>
                    <div className={styles.rectangle}>
                        <div>Title Sponsor of NITP Fest</div>
                    </div>
                    <div className={styles.rectangle}>
                        <div>Invited in Google App Summit</div>
                    </div>
                    <div className={styles.rectangle}>
                        <div>Featured in International media</div>
                    </div>
                    </div>
                    
            </div>
        )
    }
}