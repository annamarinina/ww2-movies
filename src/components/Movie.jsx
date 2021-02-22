import React from 'react';
import './Movie.css';

const Movie = (props) => {
    return (
        <div class="thumbContainer">
		<img src={props.img_src} class="thumbnail" />
		<div class="thumbOverlay">
			<div class="entryContent" id="dropShadow">
				<div class="entryTitle">{props.title}</div>
				<div class="entryData">
					<div class="entryTopic">
						{props.event}
					</div>
					<div class="entryPeriod">
						{props.takes_place}
					</div>
					<div class="entryLocation">
						{props.theatre}
					</div>
					<div class="entryLength">
						{props.length}
					</div>
					<div class="entryLanguage">
						{props.audio}
					</div>
					<div class="entryAwards">
						{props.awards}
					</div>
					<div class="entryAvailability">
						{props.availability}
					</div>
			    </div>
            </div>
        </div>
        </div>
    )
}

export default Movie;