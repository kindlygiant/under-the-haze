import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Styling
import './App.scss';

//Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

//Containers
import Home from '../Home/Home';
import Overview from '../Overview/Overview';
import Episodes from '../Episodes/Episodes';
import Donate from '../Donate/Donate';
import Music from '../Music/Music';

class App extends React.Component{
    render(){
        const { location } = this.props;
        return (
            <Router>
                <div className="app">
                    <Header location={location}></Header>
                    <main id="page-wrap">
                        <Route exact path="/" component={Home} />
                        <Route path="/overview" component={Overview} />
                        <Route path="/episodes" component={Episodes} />
                        <Route path="/music" component={Music} />
                        <Route path="/donate" component={Donate} />
                    </main>
                    <Footer></Footer>
                </div>
            </Router>
        );
    }
}

export default App;