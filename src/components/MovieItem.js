import React from 'react';

function MovieItem(props) {
	// console.log(props.movies);
	return (
		<div>
			{props.movies &&
				props.movies.map((movie) => (
					<div className="movie_item" key={movie.id}>
						{movie.poster_path && (
							<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						)}{' '}
						<div className="movie_item_info">
							<h1>{movie.title}</h1>
							<h2>{movie.release_date}</h2>
							<p>{movie.overview}</p>
						</div>
					</div>
				))}
		</div>
	);
}

export default MovieItem;
