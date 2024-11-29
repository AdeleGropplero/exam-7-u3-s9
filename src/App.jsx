import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyTvShowsSection from "./components/MyTvShowsSection";
import MyRowForMovies from "./components/MyRowForMovies";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <MyNavBar />
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
