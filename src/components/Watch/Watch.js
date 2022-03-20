

import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }

    useEffect( ()=>{
        console.log(steps)
    }, [steps])

    return (
        <div style={{border: '2px solid green', margin: '20px'}}>
            <h1>This is my watch</h1>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Add</button>
            <Display name="Jupitar" steps={steps}></Display>
        </div>
    );
};

export default Watch;