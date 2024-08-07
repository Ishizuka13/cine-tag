import { useContext } from "react";
import { MovieContext } from "../../context/MoviesFavorite";
import { IMovie } from "../../types/Movies";
import Favorite from "../../assets/imagens/favorite.png";
import NotFavorite from "../../assets/imagens/favorite_outline.png";
import { Link } from "react-router-dom";

export const Movies = ({ movies }: { movies: IMovie[] }) => {
  const { setFavorite } = useContext(MovieContext);
  return movies.map((movie: IMovie) => (
    <li className="movie" key={movie.id}>
      <Link to={`/modal/${movie.id}`}>
        <img src={movie.capa} alt={movie.titulo} />
      </Link>
      <div className="movieDescription">
        <h2>{movie.titulo}</h2>
        <img
          src={movie.favorite ? Favorite : NotFavorite}
          alt=""
          onClick={() => setFavorite(movie)}
        />
      </div>
    </li>
  ));
};
