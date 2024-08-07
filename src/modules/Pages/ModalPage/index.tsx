import { useContext } from "react";
import { useParams } from "react-router";
import { MovieContext } from "../../../context/MoviesFavorite";

export const ModalPage = () => {
  const params = useParams();

  const { movies } = useContext(MovieContext);
  const movieFilter = movies.find((e) => e.id === params.id);
  console.log(movies);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "180px 0",
      }}
    >
      {movieFilter && (
        <iframe
          width="1200"
          height="677"
          src={movieFilter.link}
          title="Introduction To WiseGPT"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};
