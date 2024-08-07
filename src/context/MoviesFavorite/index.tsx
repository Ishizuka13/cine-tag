import { ReactNode, createContext, useEffect, useState } from "react";
import { IMovie } from "../../types/Movies";
import { getMovies } from "../../server";

type MovieFavoritesProps = {
  children: ReactNode;
};

type MoviesContextType = {
  movies: IMovie[];
  setFavorite: (movie: IMovie) => void;
};

const initialState = {
  movies: [
    {
      id: "0",
      titulo: "",
      capa: "",
      link: "",
      favorite: false,
    },
  ],
  setFavorite: () => {},
};

export const MovieContext = createContext<MoviesContextType>(initialState);

export const MovieContextProvider = ({ children }: MovieFavoritesProps) => {
  const [movies, setMoviesFavorite] = useState(initialState.movies);

  useEffect(() => setMoviesFavorite(getMovies), []);

  const setFavorite = (movie: IMovie) => {
    const filter = movies.filter((e) => e.id === movie.id)[0];
    const newMovies = movies.filter((e) => e.id !== movie.id);
    const array = [...newMovies, { ...filter, favorite: !filter.favorite }];
    const organized = array.sort((a, b) => Number(a.id) - Number(b.id));

    setMoviesFavorite(organized);
  };

  const context = {
    movies,
    setFavorite,
  };

  return (
    <MovieContext.Provider value={context}>{children}</MovieContext.Provider>
  );
};
