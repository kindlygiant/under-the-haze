import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList'

//Styling
import './Home.scss';

//Assets
import thumbnail from "../../assets/img/GrandCanyon_poster_landscape_desktop.png";

class Home extends React.Component{        

    // Filters 
    // Filters must be self contained since they are passed into various components.
    // Attempts at breaking out common features into functions is futile. For now.
    MostRecentEpisodesFilter(episode, index, episodeList) {
        let mostRecentId = -1;
        for ( var i = 0; i < episodeList.length ; i++) {
            if (episodeList[i].id > mostRecentId) mostRecentId = episodeList[i].id;
        }
        return (new Date(episode.active_date) < new Date()) && !(episode.id === mostRecentId)
    }

    LatestEpisodeFilter(episode, index, episodeList) {
        let mostRecentId = -1;
        for ( var i = 0; i < episodeList.length ; i++) {
            if (episodeList[i].id > mostRecentId) mostRecentId = episodeList[i].id;
        }
        return episode.id === mostRecentId;
    }

    render(){
        return (
            <div className="home">

                <div className="content slot-1">
                    <div className="content-image">
                        <img src={thumbnail} alt="Content"></img>
                    </div>
                    <h3 className="section-header">
                        <span>New This Week</span>
                    </h3>
                    <div className="latest-episode">
                        <EpisodeList filter={this.LatestEpisodeFilter}>

                        </EpisodeList>
                    </div>
                </div>
                <div className="content slot-2">
                    <h3 className="section-header">
                        <span>Recently Aired</span>
                    </h3>
                    <div className="recent-episodes">
                        <EpisodeList filter={this.MostRecentEpisodesFilter}>

                        </EpisodeList>
                    </div>
                    <div className="all-episodes-link"> 
                        <a href="/episodes">
                            See All Episodes
                        </a>
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