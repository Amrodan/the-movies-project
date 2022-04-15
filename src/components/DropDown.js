import React, { useState, useEffect } from 'react';
import { createPopper } from '@popperjs/core';

const Dropdown = ({ color, setMovies }) => {
	// dropdown props
	const [ dropdownPopoverShow, setDropdownPopoverShow ] = React.useState(false);
	const btnDropdownRef = React.createRef();
	const popoverDropdownRef = React.createRef();
	const [ genres, setGenres ] = useState('');
	const [ category, setCategory ] = useState('Genres');

	function handleChange(event) {
		setCategory(event.target.text);
		const CategoryId = genres.find((item) => item.name === event.target.text).id;
		const url = `https://api.themoviedb.org/3/discover/movie?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US&with_genres=${CategoryId}`;
		fetch(url).then((response) => response.json()).then((json) => {
			console.log(json);
			setMovies(json.results);
		});
	}

	useEffect(() => {
		const url =
			'https://api.themoviedb.org/3/genre/movie/list?api_key=d2fa7ad1e26af0847d349d7dbd5f93e5&language=en-US';
		fetch(url).then((response) => response.json()).then((json) => {
			console.log(json);
			setGenres(json.genres);
		});
	}, []);

	const openDropdownPopover = () => {
		createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
			placement: 'bottom-start'
		});
		setDropdownPopoverShow(true);
	};
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};
	// bg colors
	let bgColor;
	color === 'white' ? (bgColor = 'bg-slate-700') : (bgColor = 'bg-' + color + '-500');
	return (
		<div>
			<div className="flex flex-wrap">
				<div className="w-full sm:w-6/12 md:w-4/12 px-4">
					<div className="relative inline-flex align-middle w-full">
						{category}
						<button
							className={
								'text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ' +
								bgColor
							}
							type="button"
							ref={btnDropdownRef}
							onClick={() => {
								dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
							}}
						>
							{color === 'white' ? 'Category list' : color + ' Dropdown'}
						</button>

						<div
							ref={popoverDropdownRef}
							className={
								(dropdownPopoverShow ? 'block ' : 'hidden ') +
								(color === 'white' ? 'bg-white ' : bgColor + ' ') +
								'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
							}
							style={{ minWidth: '12rem' }}
						>
							{genres &&
								genres.map((genre) => (
									<a
										href="#pablo"
										className={
											'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent ' +
											(color === 'white' ? ' text-slate-700' : 'text-white')
										}
										key={genre.name}
										onClick={handleChange}
									>
										{genre.name}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default function DropdownRender(props) {
	return (
		<div>
			<Dropdown color="white" setMovies={props.setMovies} />
		</div>
	);
}