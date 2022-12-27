import { Carousel, Card, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import {
  SiJavascript,
  SiCsswizardry,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";

function Projects({ isMobile }) {
  return (
    <div
      className="bg-opacity-25 container-fluid"
      style={{
        backgroundColor: "#fff7f0",
        paddingTop: isMobile ? "10%" : null,
        paddingBottom: isMobile ? "34%" : null,
      }}
    >
      <motion.div
        initial={{ y: "+100%", opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        {isMobile ? (
          <Carousel
            prevIcon={<MdArrowBackIos color="black" size={40} />}
            nextIcon={<MdArrowForwardIos color="black" size={40} />}
            style={{ height: 500, backgroundColor: "#fff7f0" }}
          >
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p6.avif" />
                  <Card.Body>
                    <Card.Title>Dashboard</Card.Title>
                    <Card.Text>
                      Invoice Dashboard for TimeTracking App, school assignement
                      to use Typescript for the first time.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>
                        <a>
                          <SiTypescript size={42} color="#1e88e5" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiBootstrap size={50} color="#8338ec" />
                        </a>

                        <a
                          href="https://github.com/idahagerth/Invoice-Dashboard-k2"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ width: "25rem", height: "30rem", border: "none" }}>
                <Card.Img src="img/p2.avif" />
                <Card.Body>
                  <Card.Title>Sneaker Store</Card.Title>
                  <Card.Text>
                    A mock e-commerce web site I built for school & I got to try
                    Chakra UI as a new styling module.
                  </Card.Text>
                  <Card.Text>Check out the project on Github!</Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiReact size={42} color="#49b6ff" />
                      </a>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                      <a
                        href="https://github.com/idahagerth/My-Sneaker-Store"
                        target="_blank"
                      >
                        <SiGithub size={42} color="#003049" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card style={{ width: "25rem", height: "30rem", border: "none" }}>
                <Card.Img src="img/p3.avif" />
                <Card.Body>
                  <Card.Title>Movie Blog</Card.Title>
                  <Card.Text>
                    My first school project only built in HTML & CSS, a simple
                    blog about horror movies.
                  </Card.Text>
                  <Card.Text>Check out the project on Github!</Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiHtml5 size={42} color="#eb5e28" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                      <a
                        href="https://github.com/idahagerth/myblog"
                        target="_blank"
                      >
                        <SiGithub size={42} color="#003049" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ width: "25rem", height: "30rem", border: "none" }}>
                <Card.Img src="img/p4.avif" />
                <Card.Body>
                  <Card.Title>To Do List</Card.Title>
                  <Card.Text>
                    Classic to-do list. My First time using Vue as a framework.
                  </Card.Text>
                  <Card.Text>Check out the project on Github!</Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <RiVuejsFill size={42} color="#43aa8b" />
                      </a>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                      <a
                        href="https://github.com/idahagerth/to-do-list-vue"
                        target="_blank"
                      >
                        <SiGithub size={42} color="#003049" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ width: "25rem", height: "30rem", border: "none" }}>
                <Card.Img src="img/p5.avif" />
                <Card.Body>
                  <Card.Title>Hangman Game</Card.Title>
                  <Card.Text>
                    My first game built with only javascript. No design, just
                    simply vanilla js.
                  </Card.Text>
                  <Card.Text>Check out the project on Github!</Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                      <a
                        href="https://github.com/idahagerth/hangman"
                        target="_blank"
                      >
                        <SiGithub size={42} color="#003049" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ width: "25rem", height: "30rem", border: "none" }}>
                <Card.Img src="img/p1.avif" />

                <Card.Body>
                  <Card.Title>Memory Game</Card.Title>
                  <Card.Text>
                    This was a school project when I started to learn vanilla
                    Javascript & CSS.
                  </Card.Text>
                  <Card.Text>Check out the project on Github!</Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a
                        href="https://github.com/idahagerth/memorygame"
                        target="_blank"
                      >
                        <SiGithub size={42} color="#003049" />
                      </a>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                      <a>
                        <SiHtml5 size={42} color="#eb5e28" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        ) : (
          <Carousel
            prevIcon={<MdArrowBackIos color="black" size={40} />}
            nextIcon={<MdArrowForwardIos color="black" size={40} />}
            style={{ height: 500, backgroundColor: "#fff7f0" }}
          >
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p6.avif" />
                  <Card.Body>
                    <Card.Title>Dashboard</Card.Title>
                    <Card.Text>
                      Invoice Dashboard for TimeTracking App, school assignement
                      to use Typescript for the first time.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>
                        <a>
                          <SiTypescript size={42} color="#1e88e5" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiBootstrap size={50} color="#8338ec" />
                        </a>

                        <a
                          href="https://github.com/idahagerth/Invoice-Dashboard-k2"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p2.avif" />
                  <Card.Body>
                    <Card.Title>Sneaker Store</Card.Title>
                    <Card.Text>
                      A mock e-commerce web site I built for school & I got to
                      try Chakra UI as a new styling module.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                        <a
                          href="https://github.com/idahagerth/My-Sneaker-Store"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p3.avif" />
                  <Card.Body>
                    <Card.Title>Movie Blog</Card.Title>
                    <Card.Text>
                      My first school project only built in HTML & CSS, a simple
                      blog about horror movies.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiHtml5 size={42} color="#eb5e28" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                        <a
                          href="https://github.com/idahagerth/myblog"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p4.avif" />
                  <Card.Body>
                    <Card.Title>To Do List</Card.Title>
                    <Card.Text>
                      Classic to-do list. My First time using Vue as a
                      framework.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <RiVuejsFill size={42} color="#43aa8b" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                        <a
                          href="https://github.com/idahagerth/to-do-list-vue"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p5.avif" />
                  <Card.Body>
                    <Card.Title>Hangman Game</Card.Title>
                    <Card.Text>
                      My first game built with only javascript. No design, just
                      simply vanilla js.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a
                          href="https://github.com/idahagerth/hangman"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img src="img/p1.avif" />

                  <Card.Body>
                    <Card.Title>Memory Game</Card.Title>
                    <Card.Text>
                      This was a school project when I started to learn vanilla
                      Javascript & CSS.
                    </Card.Text>
                    <Card.Text>Check out the project on Github!</Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a
                          href="https://github.com/idahagerth/memorygame"
                          target="_blank"
                        >
                          <SiGithub size={42} color="#003049" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                        <a>
                          <SiHtml5 size={42} color="#eb5e28" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          </Carousel>
        )}
      </motion.div>
    </div>
  );
}

export default Projects;
