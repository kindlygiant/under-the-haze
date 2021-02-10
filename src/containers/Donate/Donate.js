import React from 'react';
//Styling
import './Donate.scss';

//Components

class Donate extends React.Component{
    render(){
        return (
            <div className="content donate">
                <p>
                    Patreon? I guess we could do that.
                </p>
                <button>Become a supporter
                </button>
                <br></br>
                <p>
                    Kofi is a thing for one time donations right?
                </p>
                <button>Buy the crew a pizza</button>
            </div>
        );
    }
}

export default Donate;