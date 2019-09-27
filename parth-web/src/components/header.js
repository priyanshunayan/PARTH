import React from 'react';
import {render} from 'react-dom';

const style = {
    parent:{
        backgroundColor:'#000000'
    },
    child:{
        color: 'white',
        letterSpacing: '5px',
        padding:'0.1em 0.5em',
        margin:'0',
        textAlign:'center',
        fontFamily:['sans-serif','Arial'],
        fontWeight:'normal'
    }
}




export class Header extends React.Component{
    render(){
        return(
            <div style={style.parent}>
                <h5 style={style.child}>PARTH</h5>
            </div>
        )
    }
}
