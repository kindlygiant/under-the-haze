import React from 'react';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

//Styling
import './Episodes.scss';

class Episodes extends React.Component{
    render(){
        return (
            <div className="episode-page">
                <EpisodeList/>
            </div>
        );
    }
}

export default Episodes;