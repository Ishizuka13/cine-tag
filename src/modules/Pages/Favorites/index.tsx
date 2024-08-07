import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../../context/MoviesFavorite";
import { IMovie } from "../../../types/Movies";
import Favorite from "../../../assets/imagens/favorite.png";
import NotFavorite from "../../../assets/imagens/favorite_outline.png";
import "./styles.css";
import { Movies } from "../../../components/Movies";

export const Favorites = () => {
  const { movies, setFavorite } = useContext(MovieContext);
  const [moviesFavorite, setMoviesFavorite] = useState<IMovie[]>([]);

  useEffect(
    () => setMoviesFavorite(movies.filter((e) => e.favorite === true)),
    [movies]
  );

  return (
    <>
      <section className="Movies">
        <ul className="MoviesList">
          <Movies movies={moviesFavorite} />
        </ul>
      </section>
    </>
  );
};
