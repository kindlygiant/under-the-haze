import React from 'react';
//Styling
import './About.scss';

//Components
import CastTile from '../../components/CastTile/CastTile';

//Data
import castList from '../../components/CastTile/CastList.json';

function Cast(props) {
    const listItems = props.castList.map((castMember, i) =>
        <li key={i}>
            <CastTile
                name={castMember.name}
                roles={castMember.roles}
                bio={castMember.bio}
                portrait={castMember.portrait}>
            </CastTile>
        </li>
    );
    if(listItems){
        return (listItems)
    }
    else {
        return (<p>Crew? We ain't got a crew. This was all done by AI.</p>)
    }
}

class About extends React.Component{
    render(){
        return (
            <div className="content overview">
                <p>
                    You want to know what this podcast is about? Fine but just for you. Don't tell anyone else.
                </p>
                <div>
                    <h3>Overview</h3>
                    <p>
                        Under the Haze is a podcast about a dark place. Where a cataclysmic event has covered the face of the land in a thick fog that obscures light and leaves pockets of civilization scattered throughout. When there is no connection, no accountability, power reigns and in the world of Under the Haze power corrupts and consumes all. In the story, we see these aspects of our humanity. The worst of us. Men and women are turned into monsters and yet they still remain human. We see power, even when wielded with the best intentions can turn us into people we don't recognize. 
                    </p>
                    <p>
                        Despite all that, it is a story about courage and justice.  It's a story about how mercy isn't found in in a lack of domination but rather in an abundance of love. The characters try their best to help where they can even when it puts them in danger. This story is my candlelight in a dark world and I hope it conveys the message that justice and mercy are not passive concepts but things that need to be actively worked on.
                    </p>
                </div>
                <div>
                    <h3>Cast and Crew</h3>
                    <p>List the cast and crew here. Maybe Pictures if they want them.</p>
                    <Cast
                        castList={castList}
                    />
                </div>
            </div>
        );
    }
}

export default About;