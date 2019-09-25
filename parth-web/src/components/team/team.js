import React, { Component } from 'react';
import Slider from "react-slick";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './team.module.css'
import image from '../../assets/images/plane.svg'
export class Team extends Component {
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility:true,
            arrows:true
          };
        return(
            <div className={styles.marginTop}>
            <Container>
                <Row>
                    <Col>
                    <Slider {...settings}>
        <div>
          <Row>
              <Col>
                <div className={styles.person}>
                    <div className={styles.personText}>
                        <p>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
                    </div>
                    <div className={styles.imageDetails}>
                        <div className={styles.image}>
                            <img src={image} width={100} height={100}></img>
                        </div>
                        <div className={styles.imageText}>
                            <p>Rajat Vallabh<br />
                            Product Designer
                            </p>
                        </div>
                    </div>
                </div>
              </Col>
              <Col>
                Hi
              </Col>
          </Row>
          <Row>
              <Col>
                Hey!
              </Col>
              <Col>
                Hi
              </Col>
          </Row>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
                    </Col>
                </Row>
            </Container>
            
      </div>
        )
    }
}