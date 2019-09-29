import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './story.module.css'
import image from '../../assets/images/plane.svg'
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';
import VisibilitySensor  from 'react-visibility-sensor';

function onChange (isVisible) {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  }

export class Story extends Component {
    componentWillMount() {
        console.log("Story Mounted");
    }
    render(){
        console.log(this.props);
        return(
            <div id="story"className={styles.story}> 
                <Container fluid={true}>
                <Row noGutters={true}>
                <Col className={styles.leftColumn} sm={12} lg={6}>
                    <img src={image} className={styles.image}></img>
                </Col>
                <Col className={styles.rightColumn} sm={12} lg={6}>
                    <div className={styles.text}>
                         <img src={image} className={styles.imageMob}></img>
                        <h4 className={styles.heading}>Our Story</h4>
                        <p className={styles.description}>	It’s a story of a boy who gathered like-minded people who were ready to work towards the same goal as a team that later turned in to family. The journey from an engineering college to a 10 million family base has been no less than a roller coaster ride. As cliche  as it sounds, an idea popped up into his mind that propelled him to work hard enough to set milestones. The team had never turned back since then. It has been found to be growing exponentially. As a result, they have accomplished a lot more at a very young age which is impeccable in its own. But they don’t seem to be done with this. Join them in the movement.</p>
                    </div>
                </Col>
                </Row>
                <div>
                    <div className={styles.boxes}>
                        <div className={styles.blackBox1}>
                            <div>
                                <span className={styles.stat}><CountUp end={50} />+</span><br/><span className={styles.opacity}>Countries</span>
                            </div>
                        </div>
                            <div className={styles.blackBox2}>
                                <div>
                                    <span className={styles.stat}><CountUp end={10} />m</span><br/><span className={styles.opacity}>User base</span>
                                </div>
                            </div>
                    </div>
                    <div className={styles.boxes2}>
                        <div className={styles.blackBox3}>
                            <div >
                                <span className={styles.stat}><CountUp end={2.5} decimals={1}/>m</span><br/><span className={styles.opacity}>Daily Users</span>
                            </div>
                        </div>
                            <div className={styles.blackBox4}>
                                <div class={styles.milestone}>
                                Many more milestones coming soon
                                </div>
                            </div>
                    </div>  
                </div>
                </Container>
            </div>
        )
    }

}