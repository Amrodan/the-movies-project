import React from 'react';
import MovieGrid from './MovieGrid';
function Main(props) {
	return (
		<div>
			<MovieGrid movies={props.movies} />
		</div>
	);
}

export default Main;
