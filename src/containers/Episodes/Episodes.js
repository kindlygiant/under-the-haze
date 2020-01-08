import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

//Styling
import './Episodes.scss';

class Episodes extends React.Component{
    MostRecentEpisodesFilter(episode) {
        return new Date(episode.active_date) < new Date()
    }

    render(){
        return (
            <div className="episode_page">
                <EpisodeList filter={this.MostRecentEpisodesFilter}/>
            </div>
        );
    }
}

export default Episodes;