import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Styling
import './App.scss';

//Components
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import Overview from '../Overview/Overview';
import EpisodeList from '../EpisodeList/EpisodeList';
import Donate from '../Donate/Donate';
import Music from '../Music/Music';

class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="app">
                    <Header></Header>
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/overview" component={Overview} />
                        <Route path="/episodes" component={EpisodeList} />
                        <Route path="/music" component={Music} />
                        <Route path="/donate" component={Donate} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;