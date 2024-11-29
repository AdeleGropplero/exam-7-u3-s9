import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyTvShowsSection from "./components/MyTvShowsSection";
import MyRowForMovies from "./components/MyRowForMovies";
import { Container } from "react-bootstrap";
/* import AreaPersonale from "./components/AreaPersonale"; */

function App() {
  return (
    <>
      <Container>
        <MyNavBar />

        {/* <AreaPersonale /> SCOMMENTARE QUESTA PARTE E L'IMPORT PER VEDERE LA SEZIONE AREA PERSONALE*/}

        <MyTvShowsSection />
        <MyRowForMovies title="Harry Potter" />
        <MyRowForMovies title="Twilight" />
        <MyRowForMovies title="The lord of the rings" />

        <MyFooter />
      </Container>
    </>
  );
}

export default App;
