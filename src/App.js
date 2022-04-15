import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import Main from './components/Main';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const api_key = '4dde074fa7d73f77aac90d563dc0633a';

const constructUrl = (query, path) => {
	return `${TMDB_BASE_URL}/${path}?api_key=${api_key}&query=${query}`;
};
function App() {
	const [ movies, setMovies ] = useState([]);

	function handleMovies(query, path = 'search/movie') {
		fetch(constructUrl(query, path)).then((response) => response.json()).then((data) => {
			setMovies(data.results);
		});
	}

	useEffect(() => {
		if (movies.length !== 0) {
			handleMovies('');
		}
	}, []);

	return (
		<div>
			<Nav handleMovies={handleMovies} setMovies={setMovies} />

			<Main movies={movies} />
		</div>
	);
}

export default App;
