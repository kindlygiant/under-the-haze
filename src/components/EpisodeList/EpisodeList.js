import React from 'react';
import Episode from '../Episode/Episode';

//Styling
import './EpisodeList.scss';

//Data
import episodeList from './EpisodeList.json';

//Components
function Episodes(props) {
    const episodeList = props.episodes.filter(props.filter);
    const listItems = episodeList.map((episode) => 
        <Episode
            id={episode.id}
            key={episode.id}
            thumbnail={episode.thumbnail}
            title={episode.title}
            description={episode.description}
            duration={episode.duration}
            active_date={episode.active_date}>
        </Episode>
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
    constructor(props){
        super(props);
        this.filter = props.filter;
    }
    render(){
        return (
            <div className="episodes">
                
                <Episodes episodes={episodeList} filter={this.filter}/>
            </div>
        );
    }
}

export default EpisodeList;