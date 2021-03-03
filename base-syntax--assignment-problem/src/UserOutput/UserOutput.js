import React from 'react'; 

const userOutput = (props) => {
    return (
        <div>
            <hi>USER OUTPUT COMPONENT</hi>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
        </div>
    )
};

export default userOutput;