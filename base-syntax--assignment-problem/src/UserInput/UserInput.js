import React from 'react'; 

const userInput = (props) => {
    return (
        <div>
            <hi>USER INPUT COMPONENT</hi> <br></br>
            <input type="text" value = {props.username} onChange = {props.changed}></input> <br/>
        </div>
    )
};

export default userInput;