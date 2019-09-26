import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './proposal.module.css'

export class Proposal extends Component {
    render(){
        return(
            <div className={styles.proposal}>
                <Container fluid={true}>
                    <Row>
                        <Col >
                            <div className={styles.proposalBlock} >
                            <div>
                           <h4 className={styles.heading}>Want to collabrate us?</h4>
                           <p className={styles.para}>We love making friends, if you have anything which is mutually benifitial for both of us we’d love to hear you</p>
                           <div class="clearfix"></div>
                           <button class={styles.button}>Mail your proposal </button>
                           </div>
                           </div>
                        </Col>    
                    </Row>
                </Container>

            </div>
        )
    }
}