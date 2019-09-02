import React,{useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name:'Harry Potter',
      price: '$10',
      id: 12345
    },
    {
      name:'Game of Thorones',
      price: '$10',
      id: 67891
    },
    {
      name:'Inception',
      price: '$10',
      id: 11121
    }
  ]);
  
  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  )
}
