import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList'

//Styling
import './Home.scss';

//Components

class Home extends React.Component{
    MostRecentEpisodesFilter(episode) {
        return new Date(episode.active_date) < new Date()
    }

    render(){
        return (
            <div className="home">

                <div className="content slot-1">
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
                        <EpisodeList filter={this.MostRecentEpisodesFilter}>

                        </EpisodeList>
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