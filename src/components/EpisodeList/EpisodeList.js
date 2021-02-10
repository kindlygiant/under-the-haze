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
        <li>
            <Episode
                id={episode.id}
                key={episode.id}
                thumbnail={episode.thumbnail}
                title={episode.title}
                description={episode.description}
                duration={episode.duration}
                active_date={episode.active_date}>
            </Episode>
        </li>
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

    highToLowSort(a, b) {
        return a.id < b.id;
    }

    lowToHighSort(a, b) {
        return b.id > a.id
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