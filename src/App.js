import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import Main from './components/Main';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const api_key = '4dde074fa7d73f77aac90d563dc0633a';

const constructUrl = (query, path = 'search/movie') => {
	return `${TMDB_BASE_URL}/${path}?api_key=4dde074fa7d73f77aac90d563dc0633a&query=${query}`;
};
function App() {
	const [ movies, setMovies ] = useState([]);

	function handleMovies(query) {
		// console.log(query);
		fetch(constructUrl(query)).then((response) => response.json()).then((data) => {
			setMovies(data.results);
		});
	}

	useEffect(() => {
		handleMovies(movies);
		// console.log(movies);
	}, []);

	return (
		<div>
			<Nav movies={movies} setMovies={setMovies} handleMovies={handleMovies} />

			<Main movies={movies} handleMovies={handleMovies} />

			{/* <Footer /> */}
		</div>
	);
}

export default App;
