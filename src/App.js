import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />

            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
