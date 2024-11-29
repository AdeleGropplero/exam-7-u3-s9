import { Component } from "react";

class MyRowForMovies extends Component {
  state = {
    movies: []
  };

  fetchMovies = () => {
    fetch(
      `http://www.omdbapi.com/?apikey=eb1c85de&s=${this.props.title.toLowerCase()}`
    )
      .then((resp) => {
        console.log("Risposta:", resp);
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta API");
        }
      })
      .then((moviesData) => {
        this.setState({ movies: moviesData.Search });
        console.log("Movies:", moviesData.Search);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return <></>;
  }
}

export default MyRowForMovies;
