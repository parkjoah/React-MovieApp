import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Nav";
function Movie() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Home />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <>
              <Navigation />
              <Detail />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default Movie;
