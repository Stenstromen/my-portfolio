import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Row } from "react-bootstrap";

function LoadMore({ loadMoreProjects }) {
  return (
    <Container
      style={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Row className="justify-content-md-center text-center">
        <Button
          style={{
            maxWidth: "200px",
            backgroundColor: "#f686bd",
            borderColor: "#f686bd",
            color: "#000000",
          }}
          onClick={loadMoreProjects}
        >
          Load more
        </Button>
      </Row>
    </Container>
  );
}

LoadMore.propTypes = {
  loadMoreProjects: PropTypes.func,
};

export default LoadMore;
