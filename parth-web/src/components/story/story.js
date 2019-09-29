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
                    <p className={styles.description}>We started on a mission that eyed upon improving the livelihood of people. We had initially focused on giving the best solutions irrespective of domain. We created a platform for cricket enthusiasts, that has been accessed across the world with a 10 million+ user base and implies to be our best discovery. In 2017, we launched our next product, “ACEapp - The asexual social network” that was globally appreciated and carries a vast base belonging to European countries, US and India. In 2019, We came up with our second platform for cricket followers “One Cricket” that is already reaching heights with 300k user base which has been found to have had grown exponentially lately. As a result, we have accomplished a lot more in a short span which is impeccable in its own. But we don’t seem to be done with this. Parth, that was founded in NIT Patna now has three offices in Jaipur, Gurugram, and Gandhinagar with a human resource of over 30 people. A young and enthusiastic team with a similar mindset and enormous potential is ready to set milestones out there.
</p>
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