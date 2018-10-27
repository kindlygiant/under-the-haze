import React from 'react';
//Styling
import './Donate.scss';

//Components

class Donate extends React.Component{
    render(){
        return (
            <div className="donate">
                <p>
                    Right now we only take donations in the form of cryptic and mildly threatening notes made from newspaper and magazine clippings sent to this address:
                </p>
                <div className="address">
                    <p>REDACTED</p>
                    <p>REDACTED</p>
                </div>
                <p>
                    Please don't put a return address.
                </p>
            </div>
        );
    }
}

export default Donate;