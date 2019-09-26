import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './footer.module.css'
import { FaTwitter,FaFacebookSquare,FaInstagram,FaYoutube } from "react-icons/fa";
export class Footer extends Component {
    render(){
        return(
            <div>
                <Container className={styles.footer}>
                    <Row >
                        <Col>
                            <div className={styles.flex}>
                            <div>
                                <ul className={styles.noStyle}>
                                    <li>PARTH | Jaipur Office </li>
                                    <li>Gokulpura</li>
                                    <li>Jaipur - 302012</li>
                                    <li>Rajasthan, India</li>
                                </ul>
                            </div>
                            <div>
                                <ul className={styles.noStyle}>
                                    <li>PARTH | Gurugram Office, </li>
                                    <li>3rd floor, Innov8, Orchid Tower</li>
                                    <li>Golf Course Road, Sector-54</li>
                                    <li>Gurgaaon - 122002</li>
                                    <li>Haryana, India</li>
                                </ul>
                            </div>
                            </div>
                        </Col>
                        <Col className={styles.center}>
                        <div >
                        <div >
                        <FaTwitter style={{ margin: '0 5px' }}/> 
                        <FaFacebookSquare style={{ margin: '0 5px' }}/>
                        <FaInstagram style={{ margin: '0 5px' }}/>
                        <FaYoutube style={{ margin: '0 5px' }}/>
                        </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{color:"#ffffff", marginLeft:'5em', color:'#fff', fontSize:'14px'}}>
                        All right reserved & Copyright © Parth Universal Pvt. Ltd.
                        </div>
                        </Col>    
                    </Row>
                </Container>
            </div>
        )
    }
}