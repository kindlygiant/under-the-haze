import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Styling
import './App.scss';

//Components
import Header from '../../components/Header/Header';
import Home from '../Home/Home';
import Overview from '../Overview/Overview';
import Episodes from '../Episodes/Episodes';
import Music from '../Music/Music';
import About from '../About/About';
import Donate from '../Donate/Donate';
import Listen from '../Listen/Listen';
import Contact from '../Contact/Contact';

class App extends React.Component{
    render(){
        const { location } = this.props;
        return (
            <Router>
                <div className="app">
                    <Header location={location}></Header>
                    <main>
                        <Route exact path="/" component={Home} />
                        <Route path="/overview" component={Overview} />
                        <Route path="/episodes" component={Episodes} />
                        <Route path="/music" component={Music} />
                        <Route path="/about" component={About} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/listen" component={Listen} />
                        <Route path="/contact" component={Contact} />
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;