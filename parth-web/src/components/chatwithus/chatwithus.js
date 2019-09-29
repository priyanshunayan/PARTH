import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './chatwithus.module.css'
import images from '../../assets/images/group.svg'

export class Chat extends Component {
    render(){
        return(
            <div id="chat">
                <Container fluid={true}>
                    <Row className={styles.proposal}>
                        <Col>
                            <div className={styles.proposalBlock} >
                            <div className={styles.marginLeft}>
                                <div className={styles.centerImage}>
                                    <img src={images} className={styles.image} />
                                </div>
                           <h4 className={styles.heading}>Be a part of our story</h4>
                           <p className={styles.para}>We always look forward to great folks to join us on our mission, if you want to be part of our story we’d love to chat</p>
                           <div class="clearfix"></div>
                           <div class={styles.center}>
                           <button class={styles.button} ><a href="mailto:connect@parth.ind.in" className={styles.name}>Chat with us</a></button>
                           </div>
                           </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}