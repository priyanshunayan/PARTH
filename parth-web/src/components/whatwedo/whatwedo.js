import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './whatwedo.module.css'
import Emoji from 'react-emoji-render';
import { Twemoji } from 'react-emoji-render';
import whatwedo from '../../assets/images/whatwedo.png'
import whatwedoMob from '../../assets/images/group-11.png'
export class Whatwedo extends Component {
    render(){
        return(
            <div id = "what" className={styles.whatwedo}>
                <Container fluid={true} className={styles.centerBlock}>
                    <Row class={styles.center}>
                        <h4>What do we do?</h4>
                        <div >
                        <img src={whatwedo}  className={styles.image}/>
                        <img src={whatwedoMob} className={styles.imageMob}/>
                        </div>
                    </Row>
                </Container>
            </div>
        )

    }

}