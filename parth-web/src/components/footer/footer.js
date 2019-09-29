import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './footer.module.css'
import { FaTwitter,FaFacebookSquare,FaInstagram,FaYoutube } from "react-icons/fa";
export class Footer extends Component {
    render(){
        return(
            <div id="footer">
                <Container fluid={true} className={styles.footer}>
                    <Row >
                        <Col sm={12} lg={6}>
                            <div className={styles.flex}>
                            <div>
                                <ul className={styles.noStyle}>
                                    <li style={{opacity:'0.9'}}>PARTH | Jaipur Office </li>
                                    <li style={{opacity:'0.9'}}>Gokulpura</li>
                                    <li style={{opacity:'0.9'}}>Jaipur - 302012</li>
                                    <li style={{opacity:'0.9'}}>Rajasthan, India</li>
                                </ul>
                            </div>
                            <div>
                                <ul className={styles.noStyle}>
                                    <li style={{opacity:'0.9'}}>PARTH | Gurugram Office, </li>
                                    <li style={{opacity:'0.9'}}>3rd floor, Innov8, Orchid Tower</li>
                                    <li style={{opacity:'0.9'}}>Golf Course Road, Sector-54</li>
                                    <li style={{opacity:'0.9'}}>Gurugram - 122002</li>
                                    <li style={{opacity:'0.9'}}>Haryana, India</li>
                                </ul>
                            </div>
                            </div>
                        </Col>
                        <Col className={styles.center} sm={12} lg={6}>
                        <div >
                      {/*   <div >
                        <FaTwitter style={{ margin: '0 5px',opacity:'0.9' }}/> 
                        <FaFacebookSquare style={{ margin: '0 5px',opacity:'0.9' }}/>
                        <FaInstagram style={{ margin: '0 5px',opacity:'0.9' }}/>
                        <FaYoutube style={{ margin: '0 5px',opacity:'0.9' }}/>
                        </div> */}
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div style={{color:"#ffffff", textAlign:'center', marginBottom:'1em', color:'#fff', fontSize:'14px', opacity:'0.3'}}>
                        All right reserved & Copyright © Parth Universal Pvt. Ltd.
                        </div>
                        </Col>    
                    </Row>
                </Container>
            </div>
        )
    }
}