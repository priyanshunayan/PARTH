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
import arrow from '../../assets/images/up.svg'


const styling = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop:'5em'
}

export class Products extends Component {
    componentWillMount() {
        console.log("Story Mounted");
    }
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
            info: "It provides you fast Live Cricket Score and everything that keep you in touch with cricket."
        })
    }
    showOC = () => {
        this.setState({
            display:true,
            hover:true,
            info: "One place for all cricket lovers. Pinning background scores makes it unique."
        })
    }
    showAC = () => {
        this.setState({
            display:true,
            hover:true,
            info: "A social network platform dedicated to Asexual spectrum.We aim to connect the group together."
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
            <div id="products">
                <Container fluid={true} style={styling}>
                    <Row>
                        <Col className={styles.productHeader}>
                            <h4> Our <br />Products </h4>
                            <small className={styles.productHeaderSmall}>& all speeding up
                            <img src={arrow} className={styles.arrow}/>
                            </small>
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
                                        <br /><div className={styles.textce}><a href="https://play.google.com/store/apps/details?id=in.cricketexchange.app.cricketexchange&hl=en" className={styles.link}>Cricket Exchange</a></div>
                                        </div>
                                        </div>
                                </div>
                                <div className={styles.product3} onMouseOver={this.showAC} onMouseOut={this.hide}>
                                <div className={styles.rotateBack}>
                                    <div>
                                        <img src={aclogo} className={styles.logoac}/>
                                        <br /><span className={styles.textac}><a href="https://play.google.com/store/apps/details?id=xyz.purush.ace&hl=enn" className={styles.link}>ACEapp</a></span>
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
                                            <br /><span className={styles.textoc}><a href="https://play.google.com/store/apps/developer?id=cricket.one&hl=en" className={styles.link}>OneCricket</a></span>
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