import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyTvShowsSection from "./components/MyTvShowsSection";
import MyRowForMovies from "./components/MyRowForMovies";

function App() {
  return (
    <>
      <MyNavBar />
      <MyTvShowsSection />

      <MyRowForMovies title="Harry Potter" />

      <MyFooter />
    </>
  );
}

export default App;
