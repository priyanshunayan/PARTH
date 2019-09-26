import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './story.module.css'
import image from '../../assets/images/plane.svg'
export class Story extends Component {
    render(){
        return(
            <div id="story"className={styles.story}>
                <Container fluid={true}>
                <Row noGutters={true}>
                <Col className={styles.leftColumn}>
                    <img src={image} className={styles.image}></img>
                </Col>
                <Col className={styles.rightColumn}>
                    <div className={styles.text}>
                        <h4 className={styles.heading}>Our Story</h4>
                        <p className={styles.description}>Parth Universal is a product based organisation, have multiple applications in sports and social platform category. Our user base is over 10 million covering 50+ countries across the world. We focus on extensive designs and great user experience. Parth Universal is in the market since 3 years with an exponential growth rate. Parth Universal make quality of people’s life better by providing services and opportunities. The team is young and highly enthusiastic who are competing with the tech tycoons out there.</p>
                    </div>
                </Col>
                </Row>
                <div>
                    <div className={styles.boxes}>
                        <div className={styles.blackBox1}>
                            <div>
                                <span className={styles.stat}>50+</span><br/>Countries
                            </div>
                        </div>
                            <div className={styles.blackBox2}>
                                <div>
                                    <span className={styles.stat}>10m</span><br/>Downloads
                                </div>
                            </div>
                    </div>
                    <div className={styles.boxes2}>
                        <div className={styles.blackBox3}>
                            <div >
                                <span className={styles.stat}>2.5m</span><br/>Active Users
                            </div>
                        </div>
                            <div className={styles.blackBox4}>
                                <div>
                                Many more milestones coming soon
                                </div>
                            </div>
                    </div>  
                </div>
                </Container>
            </div>
        )
    }

}