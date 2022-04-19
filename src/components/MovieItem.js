import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function MovieItem(props) {
	// console.log(props);
	return (
		<div className="grid-cols-3 grid gap-x-32 gap-y-32  ml-9">
			{props.movies &&
				props.movies.map((movie) => (
					<div className="w-80" key={movie.id}>
						{movie.poster_path && (
							<Link id="btnCard" to={`/movie/${movie.id}`}>
								<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
							</Link>
						)}
						<div>
							{' '}
							<Link id="btnCard" to={`/movie/${movie.id}`}>
								<h1 className="text-neutral-900 font-bold italic text-center">{movie.title}</h1>
							</Link>
						</div>
					</div>
				))}
		</div>
	);
}

export default MovieItem;
