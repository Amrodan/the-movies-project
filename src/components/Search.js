import React, { useState } from 'react';
import '../index.css';
import { css } from '@emotion/react';
import CircleLoader from 'react-spinners/CircleLoader';

const override = css`
	display: flex;
	padding-left: 50px;
	border-color: red;
`;

function Search({ handleMovies }) {
	const [ query, setQuery ] = useState('');
	const [ spinner, setSpinner ] = useState(false);

	const handleQuery = (e) => {
		setSpinner(true);
		setQuery(e.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		handleMovies(query);
		setQuery('');
		setTimeout(() => {
			setSpinner(false);
		}, 1000);
	}

	return (
		<div className="inline ">
			<form onSubmit={handleSubmit}>
				<div className="flex">
					<CircleLoader loading={spinner} css={override} size={40} />

					<input onChange={handleQuery} type="search" placeholder="Search.." name="search" value={query} />
					<button type="submit" onClick={handleSubmit}>
						search
					</button>
				</div>
			</form>
		</div>
	);
}

export default Search;
