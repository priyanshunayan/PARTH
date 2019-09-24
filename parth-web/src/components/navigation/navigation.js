 import React, {Component} from 'react';
 import './navigation.css'
 const styles = {
    ul:{
        listStyleType:"none",
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    }
}


 export class Navigation extends Component {
     render(){
         return(
             <div className="margin-bottom">
                 <ul style={styles.ul}>
                     <li className="list-item"><img src="../logo.svg"></img></li>
                     <li className="list-item">Home</li>
                     <li className="list-item">Career</li>
                     <li className="list-item">Products</li>
                     <li className="list-item">How to connect?</li>
                 </ul>
             </div>
         )
     }
 }