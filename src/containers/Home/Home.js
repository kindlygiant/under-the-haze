import React from 'react';
//Styling
import './Home.scss';

//Components

class Home extends React.Component{
    render(){
        return (
            <div className="home">

                <div className="content slot-1">
                    <img src="" alt="placeholder">

                    </img>
                    <h3  className="section-header">
                        <span>New This Week</span>
                    </h3>
                    <p>
                        Home Content. It's very homey here.
                    </p>
                </div>
                <div className="content slot-2">
                    <h3 className="section-header">
                        <span>Recently Aired</span>
                    </h3>
                    <div className="recent_episodes">
                        
                    </div>
                </div>
                <div className="content slot-3">
                    <h2>
                        <span>About Season 1</span>
                    </h2>
                    <p>
                        Tertiary Content.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;