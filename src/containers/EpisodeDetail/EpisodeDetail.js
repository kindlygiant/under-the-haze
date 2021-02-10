import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

//Styling
import './EpisodeDetail.scss';

class EpisodeDetail extends React.Component{
    constructor(props){
        super(props);
        this.id = props.match.params.id;
    }
    SpecificEpisode(episode) {
        return episode.id === this.id;
    }

    render(){
        return (
            <div className="episode-detail-page">
                <EpisodeList episodeId={this.id}/>
            </div>
        );
    }
}

export default EpisodeDetail;