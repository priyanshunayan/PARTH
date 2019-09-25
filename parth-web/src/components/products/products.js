import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import styles from './products.module.css'
import Background from '../../assets/images/group-5.svg'
import image from '../../assets/images/image.svg'
import celogo from '../../assets/images/ce-logo.png'
import oclogo from '../../assets/images/logo-one-cricket-17.png'
import aclogo from '../../assets/images/l-ace-app.png'
const styling = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export class Products extends Component {
    constructor(props) {
        super(props);
        this.state ={
            display:false,
            hover:false
        };
      }
    showCE = () => {
        this.setState({
            display:true,
            hover:true,
            info: "Cricket Exchange is a the best site we have! You should try our products out."
        })
    }
    showOC = () => {
        this.setState({
            display:true,
            hover:true,
            info: "One Cricket is a the best site we have! You should try our products out."
        })
    }
    showAC = () => {
        this.setState({
            display:true,
            hover:true,
            info: "Ace App is a the best site we have! You should try our products out."
        })
    }
    hide = () => {
        this.setState({
            display:false,
            info:""
        })
    }
    //onMouseOver={this.showCE} onMouseOut={this.hideCE}
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
                                <div className={styles.product1}onMouseOver={this.showCE} onMouseOut={this.hide} >
                                    <div className={styles.rotateBack}>
                                        <div>
                                            <img src={celogo} className={styles.logoce}></img>
                                        <br /><div className={styles.textce}>Cricket  Exchange</div>
                                        </div>
                                        </div>
                                </div>
                                <div className={styles.product3} onMouseOver={this.showAC} onMouseOut={this.hide}>
                                <div className={styles.rotateBack}>
                                    <div>
                                        <img src={aclogo} className={styles.logoac}/>
                                        <br /><span className={styles.textac}>Ace App</span>
                                    </div>
                                </div>
                            </div>
                                
                            </div>
                            <div>
                                <div className={styles.aligninline}>
                                <div className={styles.product2} onMouseOver={this.showOC} onMouseOut={this.hide}>
                                    <div className={styles.rotateBack}>
                                        <div>
                                            <img src={oclogo} className={styles.logooc}/>
                                            <br /><span className={styles.textoc}>OneCricket</span>
                                            </div>
                                        </div> 
                                </div>
                                <div className={styles.productInfo}>
                                    {this.state.info}
                                </div>
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