import React from 'react';
//Styling
import './App.scss';

//Components
import Header from '../../components/Header/Header';

class App extends React.Component{
    render(){
        return (
            <div className="app">
                <Header></Header>

                <main>
                    Content
                </main>
            </div>
        );
    }
}

export default App;