import React, { useEffect, useState } from 'react';

const Home = (props : {name: string}) => {

    return ( 
        <div>
            <h1>Home</h1>
            <p>
                {props.name ? 'Hi' + props.name : 'You are not authenticated'}
            </p>
        </div>
    );
}; 

export default Home; 