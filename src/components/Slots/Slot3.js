import React from 'react';

//Styling
import './Slot3.scss';

class Slot3 extends React.Component{
    constructor(props){
        super(props);
        this.header = props.header;
        this.content = props.content;
    }

    render(){
        return (
            <div className="content slot-3">
                <h2>
                    <span>{this.header}</span>
                </h2>
                <p>
                    {this.content}
                </p>
            </div>
        );
    }
}

export default Slot3;