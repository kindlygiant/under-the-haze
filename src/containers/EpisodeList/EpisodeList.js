import React from 'react';
//Styling
import './EpisodeList.scss';

import episodeList from './EpisodeList.json';

//Components
function Episodes(props) {
    const episodeList = props.episodes.filter(ep => new Date(ep.active_date) < new Date());
    const listItems = episodeList.map((episode) => 
        <div className="episode" key={episode.id}>
            <img className="thumbnail"
                src={episode.thumbnail}
                alt={episode.title}>
            </img>
            <div className="content">
                <div className="episode-header">
                    Episode {episode.id} - {episode.title}
                </div>
                <div className="description">
                    {episode.description}
                </div>
                {/* <div className="footer">
                    {episode.duration}
                </div> */}
            </div>
        </div>
    );
    if(listItems){
        return (
            <ul>{listItems}</ul>
        )
    }
    else {
        return (
            <p>
                No episodes yet! Mostly because we're just <strong>so so very lazy.</strong>
            </p>
        )
    }
}

class EpisodeList extends React.Component{
    render(){
        return (
            <div className="episodes">
                
                <Episodes episodes={episodeList} />
            </div>
        );
    }
}

export default EpisodeList;