import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MoviePage(props) {
	const { movieId } = useParams();
	console.log(props.movies);
	const [ movieDetails, setMovieDetails ] = useState([]);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=4dde074fa7d73f77aac90d563dc0633a&append_to_response=videos`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovieDetails(data);
			});
	}, []);
	const img = (
		<img
			className=" w-auto	 h-auto	 m-auto"
			src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
			alt={movieDetails.title}
		/>
	);
	const img2 = (
		<img
			className=" w-auto	 h-auto	 m-auto"
			src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
			alt={movieDetails.title}
		/>
	);
	return (
		<div className="grid gap-56">
			<div className="
			grid-cols-2
			grid 
			ml-9  
		">
				{img || img2}
				<span className=" 
				bg-emerald-50 mr-36
			
			">
					<h1 className="text-neutral-900 font-bold italic text-center text-2xl  ">{movieDetails.title}</h1>
					<br />
					<h2 className="text-neutral-900 font-bold italic text-center text-l  ">{movieDetails.tagline}</h2>
					<br />
					<hr />
					<h3 className="text-neutral-900   italic text-center mt-2    ">
						release date : {movieDetails.release_date}
					</h3>
					<br />
					<h3 className="text-neutral-900   italic text-center    ">
						language : {movieDetails.original_language}
					</h3>
					<br />
					<hr />
					<h3 className="text-neutral-900  mt-2  italic text-center ">
						Vote average : {movieDetails.vote_average} / 10{' '}
					</h3>
					<br />
					<h3 className="text-neutral-900  italic text-center ">
						type(s) : {movieDetails.genres && movieDetails.genres.map((genre) => genre.name).join(', ')}
					</h3>
					<p className="text-neutral-900   italic text-center   ">
						Category :{' '}
						{movieDetails.adult ? (
							'Parents should be advised, not suitable for children under 13 years old.'
						) : (
							'For general viewing, suitable for all ages.'
						)}
					</p>

					<br />
					<hr />
					<p className="mt-2 gap-x-32 gap-y-32 text-center leading-8 m-7">{movieDetails.overview}</p>
				</span>
			</div>
			<section className="
				grid-cols-1	
				grid
				justify-items-center	
				gap-x-32
				
			 	">
				{movieDetails.videos && movieDetails.videos.results.length > 0 ? (
					<div>
						<h1 className="text-neutral-900 font-bold italic text-center text-2xl  ">Trailer </h1>
						<br />

						<div>
							{movieDetails.videos.results
								.map((trailer) => (
									<div>
										<h3 className="text-neutral-900 italic text-center ">{trailer.name}</h3> <br />
										<iframe
											title={trailer.name}
											key={trailer.id}
											width="560"
											height="315"
											src={`https://www.youtube.com/embed/${trailer.key}`}
											frameBorder="0"
											allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										/>
									</div>
								))
								.slice(0, 1)}
						</div>
					</div>
				) : (
					<div className="grid gap-x-32 gap-y-32">
						<h1 className="text-neutral-900 font-bold italic text-center text-2xl  ">No Trailer </h1>
					</div>
				)}

				{/* {movieDetails.videos &&
					movieDetails.videos.results
						.map((trailer) => (
							<iframe
								title={trailer.name}
								key={trailer.id}
								width="560"
								height="315"
								src={`https://www.youtube.com/embed/${trailer.key}`}
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						))
						.slice(0, 1)} */}
			</section>
		</div>
	);
}

export default MoviePage;
