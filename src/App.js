import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import MoviePage from './components/MoviePage';
import Home from './components/Home';
import About from './components/About';
// import Footer from './components/Footer';
import Main from './components/Main';
import { Routes, Route, Link } from 'react-router-dom';

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
			handleMovies();
		}
	}, []);

	return (
		<div>
			<Nav handleMovies={handleMovies} setMovies={setMovies} />
			<Routes>
				<Route path="/" element={<Main movies={movies} />} />

				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="movie/:movieId" element={<MoviePage movies={movies} />} />
			</Routes>
		</div>
	);
}

export default App;
