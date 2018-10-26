import React from 'react';
//Styling
import './Overview.scss';

//Components

class Overview extends React.Component{
    render(){
        return (
            <div className="overview">
                <p>
                    So far nothing has happened because we haven't recorded anything.
                </p>
            </div>
        );
    }
}

export default Overview;