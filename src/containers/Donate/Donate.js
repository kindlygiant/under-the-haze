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

                    2213 33rd St NW Apt 207 
                    58703, Minot ND 

                    Please don't put a return address.
                </p>
            </div>
        );
    }
}

export default Donate;