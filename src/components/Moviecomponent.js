import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Moviecomponent.module.css";

function Moviecomponent({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={coverImg} alt={title} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.lenght > 235 ? `${summary.slice(1, 235)}` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Moviecomponent.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moviecomponent;
