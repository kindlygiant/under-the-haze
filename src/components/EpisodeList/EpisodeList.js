import React from 'react';
import Episode from '../Episode/Episode';

//Styling
import './EpisodeList.scss';

//Data
import episodeList from './EpisodeList.json';

//Components
function Episodes(props) {
    const filteredList = props.episodes.filter(props.filter);
    const sortedList = filteredList.sort(props.sort);
    const listItems = sortedList.map((episode) => 
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
    
    MostRecentEpisodesFilter(episode) {
        return new Date(episode.active_date) < new Date()
    }

    HighToLowSort(a, b) {
        if (a.id > b.id) return -1;
        if (b.id > a.id) return 1;
      
        return 0;
    }

    constructor(props){
        super(props);
        if(props.filter){
            this.filter = props.filter;
        }
        else {
            this.filter = this.MostRecentEpisodesFilter
        }

        if(props.sort){
            this.sort = props.sort;
        }
        else {
            this.sort = this.HighToLowSort;
        }
    }

    render(){
        return (
            <div className="episodes">
                
                <Episodes episodes={episodeList} filter={this.filter} sort={this.sort}/>
            </div>
        );
    }
}

export default EpisodeList;