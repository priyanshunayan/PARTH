import React from 'react';
import {render} from 'react-dom';
import styles from './header.module.css'



export class Header extends React.Component{
    render(){
        return(
            <div className={styles.parent} id="header">
                <h5 className={styles.child} style={{opacity:'0.8'}}>PARTH</h5>
            </div>
        )
    }
}
