import React from 'react';
import MovieGrid from './MovieGrid';
function Main(props) {
	// console.log(movies);
	return (
		<div>
			<MovieGrid movies={props.movies} />
		</div>
	);
}

export default Main;
