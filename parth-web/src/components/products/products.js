import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './products.module.css'
import Background from '../../assets/images/group-5.svg'
import image from '../../assets/images/image.svg'
const styling = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export class Products extends Component {
    render(){
        return(
            <div>
                <Container style={styling}>
                    <Row>
                        <Col className={styles.productHeader}>
                            <h4> Our <br />Products </h4>
                            <small className={styles.productHeaderSmall}>& all speeding up</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={styles.center} >
                        <div className={styles.rotate}>
                        <div className={styles.center}>
                                <div className={styles.product1}>
                                </div>
                                <div className={styles.product1}>
                                </div>
                            </div>
                            <div className={styles.product1}>
                            </div>
                            
                        </div>
                        </Col>
                    </Row>
                    

                </Container>

                
            </div>
        )
    }
}