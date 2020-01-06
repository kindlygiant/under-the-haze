import React from 'react';
//Styling
import './Home.scss';

//Components

class Home extends React.Component{
    render(){
        return (
            <div className="home">

                <h3>
                    <span>New This Week</span>
                </h3>
                <p>
                    Home Content. It's very homey here.
                </p>
            </div>
        );
    }
}

export default Home;