import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './corevalues.module.css'
import image from '../../assets/images/parth-logo-small.png'
export class Corevalues extends Component {
    render(){
        return(
            <div>
                <Container fluid={true} className={styles.hideMob}>
                    <Row>
                        <Col className={[styles.center, styles.marginTop]} sm={12}>
                            <h3>Core <br/>
                            Values </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.centerBox}>
                            <div className={styles.box}>
                                <div>
                                    <img src={image} className={styles.image}/>
                                    <br />
                                    Commitment
                                    </div>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        
                        <Col className={styles.centerBox}>
                        <div className={styles.box1}><div>Honesty</div></div>
                        <div className={styles.box}><div>Dignity</div></div>
                        </Col>
                        
                        
                    </Row>
                    <Row>
                    <Col className={styles.centerBox}>
                        <div className={styles.box}><div>Determination</div></div>
                        <div className={styles.box1}><div>Credibility</div></div>
                        <div className={styles.box1}><div>Development</div></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}