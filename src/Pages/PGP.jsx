import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Card, Button, Col, Row, Toast } from "react-bootstrap";
import pgpimg from "../img/pgp.webp";

function PGP() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [show, setShow] = useState(false);
  const [pgp, setPgp] = useState("");

  const handleClick = () => {
    setShow(true);
    navigator.clipboard.writeText(pgp);
  };

  const fetchPGP = async () => {
    const res = await fetch(
      "https://keys.openpgp.org/vks/v1/by-email/info@stenstromen.se"
    );
    const data = await res.text();
    setPgp(data);
  };

  useEffect(() => {
    setIsHydrated(true);
    fetchPGP();
  }, []);
  return (
    <motion.div
      style={{
        overflowX: "hidden",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "2%",
        marginBottom: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      initial={{ y: "+840px", opacity: 0 }}
      animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
        type: "spring",
      }}
      nonce="xVAsYVe6p2NlPv6L"
    >
      <Helmet>
        <title>PGP | Stenstromen.se</title>
        <meta property="og:image" content={pgpimg} />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="480" />
      </Helmet>
      <Card
        style={{
          maxWidth: "600px",
        }}
        nonce="xVAsYVe6p2NlPv6L"
      >
        <Card.Body>
          <Card.Title>info@stenstromen.se PGP Public Key</Card.Title>
          <Card.Text>
            <pre>{pgp}</pre>
          </Card.Text>
          <Button
            style={{
              backgroundColor: "#f686bd",
              borderColor: "#f686bd",
              color: "#000000",
            }}
            onClick={handleClick}
            nonce="xVAsYVe6p2NlPv6L"
          >
            Copy to clipboard
          </Button>
        </Card.Body>
      </Card>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={2000}
            autohide
          >
            <Toast.Body>PGP Public Key copied to clipboard! </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </motion.div>
  );
}

export default PGP;
