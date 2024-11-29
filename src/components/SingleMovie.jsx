import { Component } from "react";
import { Col } from "react-bootstrap";

class SingleMovie extends Component {
  render() {
    const { poster } = this.props;

    return (
      <Col className="my-2">
        <div
          className="movie-card"
          style={{ position: "relative", width: "100%" }}
        >
          <img
            src={poster}
            className="img-fluid rounded"
            alt="Poster"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "9/16",
              objectFit: "cover"
            }}
          />
        </div>
      </Col>
    );
  }
}

export default SingleMovie;
