import React from 'react';
import MovieItem from './MovieItem';

function movieGrid(props) {
	return <MovieItem movies={props.movies} />;
}

export default movieGrid;
