import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  const { id } = useParams();
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.detailWrap}>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <div className={styles.info}>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            <h3>{movie.title}</h3>
          </div>
          <p> genres : {movie.genres}</p>
          <p> runtime : {movie.runtime} min</p>
          <p> language : {movie.language} </p>
          <p>rating : {movie.rating}</p>
        </>
      )}
    </div>
  );
}

export default Detail;
