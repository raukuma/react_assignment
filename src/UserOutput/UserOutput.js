import React from 'react';
import userCss from './UserOutput.css';

const UserOutput = (props)=>{
    return(
        <div className="UserOutput">
        <p onClick={props.click}>UserName:: {props.userName} </p>
        <p>This is Paragraph TWO </p>
        </div>
    )
};


export default UserOutput;