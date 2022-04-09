import React from 'react';
import MovieItem from './MovieItem';

function movieGrid(props) {
	// console.log(movies);
	return (
		<div id="movies">
			<MovieItem movies={props.movies} />;
		</div>
	);
}

export default movieGrid;
