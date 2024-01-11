import React from "react";
import {Row, Container} from "react-bootstrap";

function EndMessage() {
  return (
    <>
      <Container
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Row className="justify-content-md-center text-center">
          <h4
            style={{
              color: "#f686bd",
            }}
          >
            That&apos;s all folks!
          </h4>
        </Row>
      </Container>
    </>
  );
}

export default EndMessage;
