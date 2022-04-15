import React from 'react';

function MovieItem(props) {
	return (
		<div className="grid-cols-3 grid gap-x-32 gap-y-32  ml-9">
			{props.movies &&
				props.movies.map((movie) => (
					<div className="w-80" key={movie.id}>
						{movie.poster_path && (
							<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						)}{' '}
						<div>
							<h1>{movie.title}</h1>
						</div>
					</div>
				))}
		</div>
	);
}

export default MovieItem;
