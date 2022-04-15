import React from 'react';
import Search from './Search';
import '../index.css';
import DropdownRender from './DropDown';
function Nav(props) {
	return (
		<div className="bg-regal-blue flex items-center justify-between mb-7  p-6 grid-cols-12  	">
			<div>
				<button className="decoration-8 text-neutral-900 font-bold italic text-2xl grid grid-cols-12 ">
					Home
				</button>
			</div>
			<div className="grid row-start-3	 ">
				<DropdownRender setMovies={props.setMovies} />
			</div>
			<div className="row-start-3	">
				<Search handleMovies={props.handleMovies} />
			</div>
		</div>
	);
}

export default Nav;
