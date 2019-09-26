import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './chatwithus.module.css'

export class Chat extends Component {
    render(){
        return(
            <div id="chat">
                <Container fluid={true}>
                    <Row className={styles.proposal}>
                        <Col>
                            <div className={styles.proposalBlock} >
                            <div className={styles.marginLeft}>
                           <h4 className={styles.heading}>Be a part of our story</h4>
                           <p className={styles.para}>We always look  foreward for great forlks to join us on our mission, if you want to be part of our story we’d love to chat</p>
                           <div class="clearfix"></div>
                           <button class={styles.button}>Chat with us</button>
                           </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}