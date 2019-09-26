import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './whatwedo.module.css'
import Emoji from 'react-emoji-render';
import { Twemoji } from 'react-emoji-render';
export class Whatwedo extends Component {
    render(){
        return(
            <div id = "what" className={styles.whatwedo}>
                <Container fluid={true} className={styles.centerBlock}>
                    <Row>
                        <Col className={styles.marginTop} >
                        <h3 className={styles.center}>What we do?</h3>
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        <Twemoji text="We analyse 🤔" />
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        <Twemoji text="We ideate solutions 💭" />
                        </Col>
                        <Col className={styles.centerText}>
                        <Twemoji text="We build 💻" />
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        <Twemoji text=" We see opportunities 🤷" />
                        </Col>
                        <Col className={styles.centerText}>
                        <Twemoji text="We repeat 🔂" />
                        </Col>
                    </Row>
                    <Row className={styles.marginTopLess}>
                        <Col className={styles.centerText}>
                        <Twemoji text="We create opportunities 🚪" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }

}