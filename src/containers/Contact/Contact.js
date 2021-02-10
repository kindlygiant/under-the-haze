import React from 'react';
//Styling
import './Contact.scss';

//Components

class Contact extends React.Component{
    render(){
        return (
            <div className="content overview">
                <p>
                    Right now we only take messages in the form of cryptic and mildly threatening notes made from newspaper and magazine clippings sent to this P.O. Box:
                </p>
                <div className="address">
                    <p>Note to self: get a P.O. Box</p>
                </div>
                <p>
                    Please don't put a return address.
                </p>
                <br></br>
                <p>
                    We also have an email. You could try that I guess...
                </p>
                <p>
                    underthehazecast@gmail.com
                </p>
            </div>
        );
    }
}

export default Contact;