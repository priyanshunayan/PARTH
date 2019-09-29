import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './proposal.module.css'
import image from '../../assets/images/agreement.svg'
export class Proposal extends Component {
    render(){
        return(
            <div className={styles.proposal}>
                <Container fluid={true}>
                    <Row>
                        <Col >
                            <div className={styles.proposalBlock} >
                            <div className={styles.center}>
                            <div>
                            <div>
                                <img src={image} className={styles.image} />
                            </div>
                        
                           <h4 className={styles.heading}>Want to collabrate with us?</h4>
                           <p className={styles.para}>We love making friends, if you have anything which is mutually beneficial for both of us we’d love to hear from you</p>
                           <div class="clearfix"></div>
                           <button class={styles.button}><a href="mailto:connect@parth.ind.in" className={styles.link}>Mail your proposal </a> </button>
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