import React from 'react';
import Search from './Search';
import '../index.css';

function Nav({ movies, setMovies, handleMovies }) {
	return (
		<div className="bg-green-900 flex items-center justify-between   p-6">
			<div>
				<button className="decoration-8 text-neutral-900 font-bold italic text-2xl">Home</button>
			</div>
			<div className="search_box">
				<Search movies={movies} setMovies={setMovies} handleMovies={handleMovies} />
			</div>
		</div>
	);
}

export default Nav;
