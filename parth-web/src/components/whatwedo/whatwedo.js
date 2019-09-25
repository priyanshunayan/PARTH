import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './whatwedo.module.css'
export class Whatwedo extends Component {
    render(){
        return(
            <div className={styles.whatwedo}>
                <Container className={styles.centerBlock}>
                    <Row>
                        <Col className={styles.marginTop} >
                        <h3 className={styles.center}>What we do?</h3>
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        We analyse 🤔
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        We see opportunities
                        </Col>
                        <Col className={styles.centerText}>
                        We ideate Solutions
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        We provide oppotunities
                        </Col>
                        <Col className={styles.centerText}>
                        We build
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        We expand
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}