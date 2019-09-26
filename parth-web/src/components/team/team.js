import React, { Component } from 'react';
import Slider from "react-slick";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './team.module.css'
import image from '../../assets/images/plane.svg'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ color:"black", display: "block", backgroundColor: "white",  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", }}
      onClick={onClick}
    />
  );
}
export class Team extends Component {
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility:true,
            arrows:true,
            swipeToSlide:true,
            nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
          };
        return(
            <div id="team" className={styles.marginTop}>
            <Container>
                <Row>
                    <Col>
                    <Slider {...settings}>
        <div>
          
                <div className={styles.person}>
                    <div className={styles.personText}>
                        <p className={styles.personTextp}>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
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
        </div>
        <div>
        <div className={styles.person}>
                    <div className={styles.personText}>
                        <p className={styles.personTextp}>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
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
        </div>
        <div>
        <div className={styles.person}>
                    <div className={styles.personText}>
                        <p className={styles.personTextp}>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
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
        </div>
        <div>
        <div className={styles.person}>
                    <div className={styles.personText}>
                        <p className={styles.personTextp}>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
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
        </div>
        <div>
        <div className={styles.person}>
                    <div className={styles.personText}>
                        <p className={styles.personTextp}>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
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
        </div>
        <div>
        <div className={styles.person}>
                    <div className={styles.personText}>
                        <p className={styles.personTextp}>"I learn here here passion & how to dream, We build significant stuffs & see the difference we make"</p>
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
        </div>
      </Slider>
                    </Col>
                </Row>
            </Container>
            
      </div>
        )
    }
}