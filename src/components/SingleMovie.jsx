import { Col } from "react-bootstrap";

const SingleMovie = (props) => {
  return (
    <>
      <Col>
        <img
          src={props.poster}
          className="img-fluid"
          alt="Poster"
          /*  onClick={handleShow} */
        />
      </Col>
    </>
  );
};

export default SingleMovie;
