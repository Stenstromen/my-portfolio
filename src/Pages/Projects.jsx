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
  SiChakraui,
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
            prevIcon={<MdArrowBackIos color="black" size={45} />}
            nextIcon={<MdArrowForwardIos color="black" size={45} />}
            style={{ height: 500, backgroundColor: "#fff7f0" }}
          >
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card
                  style={{ width: "22.9rem", height: "30rem", border: "none" }}
                >
                  <Card.Img
                    style={{ border: "3px solid white" }}
                    src="img/p8.png"
                  />
                  <Card.Body>
                    <Card.Title>Good News</Card.Title>
                    <Card.Text>
                      This is my "Master Thesis".It's an app that shows good
                      news around the world.Enjoy!
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/Examensarbete-2023"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>

                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiBootstrap size={50} color="#8338ec" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>

            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "3px solid white" }}
                  src="img/p7.png"
                />
                <Card.Body>
                  <Card.Title>Portfolio</Card.Title>
                  <Card.Text>
                    My Portfolio website, if you are curious how I made this
                    website.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/my-portfolio"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiReact size={42} color="#49b6ff" />
                      </a>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                      <a>
                        <SiBootstrap size={50} color="#8338ec" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "5px solid white" }}
                  src="img/p6.png"
                />
                <Card.Body>
                  <Card.Title>Dashboard</Card.Title>
                  <Card.Text>
                    Invoice Dashboard for TimeTracking App, school assignement
                    to use Typescript for the first time.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/Invoice-Dashboard-k2"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiReact size={42} color="#49b6ff" />
                      </a>
                      <a>
                        <SiTypescript size={42} color="#1e88e5" />
                      </a>
                      <a>
                        <SiBootstrap size={50} color="#8338ec" />
                      </a>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "5px solid white" }}
                  src="img/p2.png"
                />
                <Card.Body>
                  <Card.Title>Sneaker Store</Card.Title>
                  <Card.Text>
                    A mock e-commerce web site I built for school & I got to try
                    Chakra UI as a new styling module.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/My-Sneaker-Store"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
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
                      <a>
                        <SiChakraui size={42} color="99edcc" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "5px solid white" }}
                  src="img/p3.png"
                />
                <Card.Body>
                  <Card.Title>Movie Blog</Card.Title>
                  <Card.Text>
                    My first school project only built in HTML & CSS, a simple
                    blog about horror movies.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/myblog"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiHtml5 size={42} color="#eb5e28" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "5px solid white" }}
                  src="img/p4.png"
                />
                <Card.Body>
                  <Card.Title>To Do List</Card.Title>
                  <Card.Text>
                    Classic to-do list. My First time using Vue as a framework.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/to-do-list-vue"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
                      </a>
                      <a>
                        <SiCsswizardry size={42} color="0096c7" />
                      </a>
                      <a>
                        <RiVuejsFill size={42} color="#43aa8b" />
                      </a>
                    </Stack>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "5px solid white" }}
                  src="img/p1.png"
                />

                <Card.Body>
                  <Card.Title>Memory Game</Card.Title>
                  <Card.Text>
                    This was a school project when I started to learn vanilla
                    Javascript & CSS.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/memorygame"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
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
            <Carousel.Item>
              <Card
                style={{ width: "22.9rem", height: "30rem", border: "none" }}
              >
                <Card.Img
                  style={{ border: "5px solid white" }}
                  src="img/p5.png"
                />
                <Card.Body>
                  <Card.Title>Hangman Game</Card.Title>
                  <Card.Text>
                    My first game built with only javascript. No design, just
                    simply vanilla js.
                  </Card.Text>
                  <Card.Text>
                    Check out the project on{" "}
                    <a
                      style={{ color: "black", fontWeight: "bold" }}
                      href="https://github.com/idahagerth/hangman"
                      target="_blank"
                    >
                      Github!
                    </a>
                  </Card.Text>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Stack direction="horizontal" gap={4}>
                      <a>
                        <SiJavascript size={42} color="#fee440" />
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
                  <Card.Img
                    style={{ border: "3px solid white" }}
                    src="img/p8.png"
                  />
                  <Card.Body>
                    <Card.Title>Good News</Card.Title>
                    <Card.Text>
                      This is my "Master Thesis".It's an app that shows good
                      news around the world.Enjoy!
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/Examensarbete-2023"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>

                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiBootstrap size={50} color="#8338ec" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img
                    style={{ border: "3px solid white" }}
                    src="img/p7.png"
                  />
                  <Card.Body>
                    <Card.Title>Portfolio</Card.Title>
                    <Card.Text>
                      My Portfolio website, if you are curious how I made this
                      website.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/my-portfolio"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiBootstrap size={50} color="#8338ec" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
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
                  <Card.Img
                    style={{ border: "5px solid white" }}
                    src="img/p6.png"
                  />
                  <Card.Body>
                    <Card.Title>Dashboard</Card.Title>
                    <Card.Text>
                      Invoice Dashboard for TimeTracking App, school assignement
                      to use Typescript for the first time.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/Invoice-Dashboard-k2"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiReact size={42} color="#49b6ff" />
                        </a>
                        <a>
                          <SiTypescript size={42} color="#1e88e5" />
                        </a>
                        <a>
                          <SiBootstrap size={50} color="#8338ec" />
                        </a>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img
                    style={{ border: "5px solid white" }}
                    src="img/p2.png"
                  />
                  <Card.Body>
                    <Card.Title>Sneaker Store</Card.Title>
                    <Card.Text>
                      A mock e-commerce web site I built for school & I got to
                      try Chakra UI as a new styling module.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/My-Sneaker-Store"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
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
                        <a>
                          <SiChakraui size={42} color="99edcc" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img
                    style={{ border: "5px solid white" }}
                    src="img/p3.png"
                  />
                  <Card.Body>
                    <Card.Title>Movie Blog</Card.Title>
                    <Card.Text>
                      My first school project only built in HTML & CSS, a simple
                      blog about horror movies.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/myblog"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiHtml5 size={42} color="#eb5e28" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
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
                  <Card.Img
                    style={{ border: "5px solid white" }}
                    src="img/p4.png"
                  />
                  <Card.Body>
                    <Card.Title>To Do List</Card.Title>
                    <Card.Text>
                      Classic to-do list. My First time using Vue as a
                      framework.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/to-do-list-vue"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
                        </a>
                        <a>
                          <SiCsswizardry size={42} color="0096c7" />
                        </a>
                        <a>
                          <RiVuejsFill size={42} color="#43aa8b" />
                        </a>
                      </Stack>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img
                    style={{ border: "5px solid white" }}
                    src="img/p1.png"
                  />

                  <Card.Body>
                    <Card.Title>Memory Game</Card.Title>
                    <Card.Text>
                      This was a school project when I started to learn vanilla
                      Javascript & CSS.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/memorygame"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
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

                <Card
                  style={{ width: "25rem", height: "30rem", border: "none" }}
                >
                  <Card.Img
                    style={{ border: "5px solid white" }}
                    src="img/p5.png"
                  />
                  <Card.Body>
                    <Card.Title>Hangman Game</Card.Title>
                    <Card.Text>
                      My first game built with only javascript. No design, just
                      simply vanilla js.
                    </Card.Text>
                    <Card.Text>
                      Check out the project on{" "}
                      <a
                        style={{ color: "black", fontWeight: "bold" }}
                        href="https://github.com/idahagerth/hangman"
                        target="_blank"
                      >
                        Github!
                      </a>
                    </Card.Text>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Stack direction="horizontal" gap={4}>
                        <a>
                          <SiJavascript size={42} color="#fee440" />
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
