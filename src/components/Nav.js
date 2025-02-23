import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Navigation() {
  return (
    <div className={styles.nav}>
      <Link to={`/`} className={styles.toHome}>
        MOVIE KEKE
      </Link>
    </div>
  );
}

export default Navigation;
