import React, {useContext} from 'react';
import { MovieContext} from './MovieContext';

const Nav = () => {
  const [movies, setContext] = useContext(MovieContext)
  return (
    <div className='nav'>
      <h3>Dev Ed</h3>
      <p>List of Movie: {movies.length} </p>
    </div>
  )
}

export default Nav;
