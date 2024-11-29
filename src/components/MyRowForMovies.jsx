import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

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
    return (
      <>
        <div className="mt-5">
          <h2>{this.props.title}</h2>

          <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-6 gx-3 gy-3 mt-2">
            {this.state.movies &&
              this.state.movies
                .slice(0, 6)
                .map((movie) => (
                  <SingleMovie
                    key={movie.imdbID}
                    poster={movie.Poster}
                    title={movie.Title}
                    id={movie.imdbID}
                  />
                ))}
          </Row>
        </div>
      </>
    );
  }
}

export default MyRowForMovies;
