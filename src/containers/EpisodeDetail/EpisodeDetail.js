import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import Slot3 from '../../components/Slots/Slot3';

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
                <Slot3 header="About Season 1" content="This is content" />
            </div>
        );
    }
}

export default EpisodeDetail;