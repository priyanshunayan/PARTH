 import React, {Component} from 'react';
 import AnchorLink from 'react-anchor-link-smooth-scroll'
 import image from '../../assets/images/parth-logo-small.png'
 import style from "./navigation.module.css"
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
             <div className={style.marginBottom}>
                 <ul style={styles.ul}>
                     <AnchorLink  className={style.listItem}><img src={image} width={50} height={50} className={style.image}></img></AnchorLink>
                     <AnchorLink href="#home" className={style.listItem}>Home</AnchorLink>
                     <AnchorLink href="#story"className={style.listItem}>Our Story</AnchorLink>
                     <AnchorLink href="#what"className={style.listItem}>What we do?</AnchorLink>
                     <AnchorLink href="#products"className={style.listItem}>Our Products</AnchorLink>
                     <AnchorLink href="#team"className={style.listItem}>Team</AnchorLink>
                     <AnchorLink href="#chat"className={style.listItem}>How to Connect</AnchorLink>
                 </ul>
             </div>
         )
     }
 }