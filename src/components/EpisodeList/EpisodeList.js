import React from 'react';
import Episode from '../Episode/Episode';

//Styling
import './EpisodeList.scss';

//Data
import episodeList from './EpisodeList.json';

//Components
function Episodes(props) {
    let finalList;
    let filteredList;
    if(props.episodeId){
        filteredList = props.episodes.filter((episode) => episode.id === props.episodeId);
    } else {
        filteredList = props.episodes.filter(props.filter);
    }
    const sortedList = filteredList.sort(props.sort);
    if(props.returnCount){
        const truncatedList = sortedList.slice(0,props.returnCount);
        finalList = truncatedList;
    }
    else{
        finalList = sortedList;
    }
    const listItems = finalList.map((episode) => 
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
    //Filter Algorithms
    ActiveEpisodesFilter(episode) {
        return new Date(episode.active_date) < new Date()
    }

    //Sort Algorithms
    highToLowSort(a, b) {
        return a.id - b.id;
    }

    lowToHighSort(a, b) {
        return b.id - a.id
    }

    constructor(props){
        super(props);
        if(props.filter && typeof props.filter === "function"){
            this.filter = props.filter;
        }
        else {
            this.filter = this.ActiveEpisodesFilter
        }

        if(props.sort && typeof props.sort === "function"){
            this.sort = props.sort;
        }
        else if (props.sort && (typeof props.sort === "string" || props.sort instanceof String)){
            switch(props.sort){
                case 'highToLow':
                    this.sort = this.highToLowSort;
                    break;
                case 'lowToHigh':
                    this.sort = this.lowToHighSort;
                    break;
                default:
                    this.sort = this.lowToHighSort;
            }
        }
        else {
            this.sort = this.lowToHighSort;
        }

        if(props.returnCount){
            this.returnCount = props.returnCount; //slice starts at index 0
        }
        else {
            this.returnCount = null;
        }
        this.episodeId = props.episodeId
    }

    render(){
        return (
            <div className="episodes">
                <Episodes 
                    episodes={episodeList} 
                    episodeId={this.episodeId} 
                    filter={this.filter} 
                    sort={this.sort}
                    returnCount={this.returnCount}
                />
            </div>
        );
    }
}

export default EpisodeList;