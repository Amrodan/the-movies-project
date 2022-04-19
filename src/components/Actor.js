// import React from 'react';

// function Actor() {
// 	return <div />;

// }

// export default Actor;

// return (
//     <div>
//         <nav>
//             <Link to="/search">
//                 <Search movies={movies} />
//             </Link>
//             <Link to="/home">
//                 <Home />
//             </Link>
//             <Link to="/about">
//                 <About />
//             </Link>
//             <Link to="/genre">
//                 <DropdownRender />
//             </Link>
//         </nav>
//         <Routes>
//             <Route path="/" element={<Main movies={movies} />} />

//             <Route path="/nav" element={<Nav handleMovies={handleMovies} setMovies={setMovies} />}>
//                 <Route path="/nav/genre" element={<DropdownRender />} />
//                 <Route path="/nav/search" element={<Search movies={movies} />} />
//             </Route>
//             <Route path="/about" element={<About />} />
//             <Route path="/" element={<Main movies={movies} />} />
//             <Route path="/" element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="movie/:movieId" element={<MoviePage movies={movies} />} />
//         </Routes>
//     </div>
//
