import { useContext } from "react";
import { IMovie } from "../../../types/Movies";
import Favorite from "../../../assets/imagens/favorite.png";
import NotFavorite from "../../../assets/imagens/favorite_outline.png";
import "./styles.css";
import { MovieContext } from "../../../context/MoviesFavorite";
import { useNavigate } from "react-router-dom";
import { Movies } from "../../../components/Movies";

export const HomePage = ({ onClick }: { onClick: (movie: IMovie) => void }) => {
  const { movies, setFavorite } = useContext(MovieContext);

  const navigate = useNavigate();

  const handleFavorite = (movie: IMovie) => {
    setFavorite(movie);
  };

  const handleModal = (movie: IMovie) => {
    onClick(movie);
    navigate("/modal");
  };

  return (
    <>
      <h1 className="textMovies">
        Um lugar para guardar seus vídeos e filmes!
      </h1>
      <section className="Movies">
        <ul className="MoviesList">{movies && <Movies movies={movies} />}</ul>
      </section>
    </>
  );
};
