import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyTvShowsSection from "./components/MyTvShowsSection";

function App() {
  return (
    <>
      <MyNavBar />
      <MyTvShowsSection />

      <MyFooter />
    </>
  );
}

export default App;
