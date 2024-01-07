import FlareIP from "../img/flareip.svg";
import arfenhouse from "../img/arfenhouse.webp";
import axfr from "../img/axfr.webp";
import bf2042ico from "../img/bf2042ico.webp";
import cavestory from "../img/cavestory.webp";
import dockerctx from "../img/dockerctx.webp";
import flowerapi from "../img/flowerapi.webp";
import gologo from "../img/gologo.webp";
import gomyip from "../img/gomyip.webp";
import grumpypgp from "../img/grumpypgp.webp";
import khaossweeper from "../img/khaossweeper.webp";
import miniomatic from "../img/miniomatic.svg";
import ncregistry from "../img/ncregistry.webp";
import noclip from "../img/noclip.webp";
import nyancatchat from "../img/nyancatchat.webp";
import peppojnet from "../img/peppojnet.webp";
import pusheense from "../img/pusheense.webp";
import pwgen from "../img/pwgen.webp";
import readthenburn from "../img/readthenburn.webp";
import registryport from "../img/registryport.webp";
import snapnote from "../img/snapnote.webp";
import vault from "../img/vault.webp";
import warez from "../img/warez.webp";
import BadgesList from "../Components/BadgesList";

const {
  CLOUDFLARE,
  CSS,
  DOCKER,
  GO,
  HTML,
  JS,
  KUBERNETES,
  MARIADB,
  NODEJS,
  PYTHON,
  REACTJS,
  REACTNATIVE,
  RUST,
  SHELL,
  SOCKETIO,
  TENSORFLOW,
  TS,
  WORDPRESS,
} = BadgesList;

const ProjectList = [
  {
    image: axfr,
    title: "AXFR.se",
    description: "List amount/View brand new .SE and .NU Domains.",
    link: "https://axfr.se",
    github: "https://github.com/Stenstromen/axfr-frontend",
    badges: [REACTJS, GO, MARIADB, KUBERNETES],
  },
  {
    image: bf2042ico,
    title: "BF2042Stats",
    description: "Battlefield 2042 Stats page",
    link: "https://battlefield2042.se",
    github: "https://github.com/Stenstromen/bf2042stats",
    badges: [REACTJS, TS, CLOUDFLARE],
  },
  {
    image: cavestory,
    title: "Cavestory.se",
    description: "CaveStory game fan page... Simple enough.",
    link: "https://cavestory.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [HTML, CSS, CLOUDFLARE],
  },
  {
    image: nyancatchat,
    title: "Chat.NyanCat.se",
    description: "Fully featured NyanCat themed chat client and server.",
    link: "https://chat.nyancat.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [REACTJS, NODEJS, SOCKETIO, KUBERNETES],
  },
  {
    image: dockerctx,
    title: "DockerCTX",
    description:
      "Rewrite of ahmetb's 'kubectx' utility. Easily switch between Docker contexts.",
    link: "https://github.com/Stenstromen/dockerctx/releases/latest/",
    github: "https://github.com/Stenstromen/dockerctx",
    badges: [SHELL],
  },
  {
    image: "https://filosofiskaeleonora.se/pusheen-cat.png",
    title: "Filosofiska Eleonora",
    description:
      "I took the Red Pill, but now I have to live the Blue Pill life.",
    link: "https://filosofiskaeleonora.se",
    github: "https://github.com/Stenstromen/filosofiskaeleonora",
    badges: [REACTJS, CLOUDFLARE],
  },
  {
    image: FlareIP,
    title: "FlareIP",
    description: "Cloudflare Worker to get the client IP address.",
    link: "https://addr.se/readme",
    github: "https://github.com/Stenstromen/flareip",
    badges: [TS, CLOUDFLARE],
  },
  {
    image: flowerapi,
    title: "Flower.API",
    description:
      "API server for listing beautiful flowers, requires registration.",
    link: "https://flower.api.stenstromen.se/readme",
    github: "https://github.com/Stenstromen/flowerapi",
    badges: [NODEJS, KUBERNETES],
  },
  {
    image: grumpypgp,
    title: "GrumpyPGP",
    description: "The lack of a good PGP app for iOS makes the cat grumpy.",
    link: "https://apps.apple.com/se/app/grumpypgp/id6474478177",
    github: "https://github.com/Stenstromen/grumpypgp",
    badges: [REACTNATIVE, TS],
  },
  {
    image: ncregistry,
    title: "NcRegistry",
    description:
      "NcRegistry Go binary provides users with an interactive prompt to select registries, view repositories, and manage Docker images and tags.",
    link: "https://github.com/Stenstromen/ncregistry/releases/latest/",
    github: "https://github.com/Stenstromen/ncregistry",
    badges: [GO, DOCKER],
  },
  {
    image: noclip,
    title: "Noclip.se",
    description: "Share/Live share current location.",
    link: "http://www.noclip.se",
    github: "https://github.com/Stenstromen/phyaddr",
    badges: [HTML, CSS, JS, NODEJS, SOCKETIO, KUBERNETES],
  },
  {
    image: miniomatic,
    title: "Miniomatic",
    description:
      "Backend service API for Minio that provides a simple way to create and manage Minio instances on Kubernetes.",
    link: "https://github.com/Stenstromen/miniomatic/releases/latest/",
    github: "https://github.com/Stenstromen/minomatic",
    badges: [GO, DOCKER, KUBERNETES],
  },
  {
    image: registryport,
    title: "RegistryPort",
    description:
      "RegistryPort brings the power of Docker Registries to the palm of your hand.",
    link: "https://apps.apple.com/us/app/registryport/id6464222587",
    github: "https://github.com/Stenstromen/registryport",
    badges: [REACTNATIVE, TS, DOCKER],
  },
  {
    image: "https://openvision.boo/assets/logo-2fd1099d.svg",
    title: "OpenVision",
    description:
      "OpenVision is a web application that allows you to detect objects in images, using Keras MobileNetV3 model in TensorflowJs.",
    link: "https://openvision.boo",
    github: "https://github.com/Stenstromen/openvision",
    badges: [REACTJS, TS, TENSORFLOW],
  },
  {
    image: peppojnet,
    title: "Peppoj.net",
    description: "Personal blog with useful guides.",
    link: "https://www.peppoj.net",
    badges: [WORDPRESS, KUBERNETES],
  },
  {
    image: pwgen,
    title: "PWGen.cz",
    description: "Generate secure passwords.",
    link: "https://pwgen.cz",
    github: "https://github.com/Stenstromen/pwgen",
    badges: [REACTJS, TS],
  },
  {
    image: pusheense,
    title: "Pusheen.se",
    description: "Pusheen the cat!",
    link: "http://pusheen.se",
    github: "https://github.com/Stenstromen/pusheen",
    badges: [REACTJS, CLOUDFLARE],
  },
  {
    image: readthenburn,
    title: "ReadThenBurn.se",
    description:
      "Create temporary, shareable, messages. Only readable once. Read-Then-Burn.",
    link: "http://readthenburn.se",
    github: "https://github.com/Stenstromen/readthenburn-frontend",
    badges: [REACTJS, GO, MARIADB, KUBERNETES],
  },
  {
    image: snapnote,
    title: "Snapnote",
    description: "Open source note taking application.",
    link: "https://snapnote.online",
    github: "https://github.com/Stenstromen/snapnote",
    badges: [REACTJS, TS, GO, MARIADB, KUBERNETES],
  },
  {
    image: "https://twaddle.page/assets/twaddle-c3415e3b.svg",
    title: "Twaddle",
    description: "Generate gibberish using the distilGP2 model.",
    link: "https://twaddle.page",
    github: "https://github.com/Stenstromen/twaddle-frontend",
    badges: [REACTJS, TS, PYTHON, TENSORFLOW, KUBERNETES],
  },
  {
    image: gologo,
    title: "GoSPFFlare",
    description:
      "Go binary for creating/updating MTA-SBadgesList.TS records on Cloudflare.",
    link: "https://github.com/Stenstromen/gospfflare/releases/latest/",
    github: "https://github.com/Stenstromen/gospfflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gologo,
    title: "GoMTA-STSFlare",
    description:
      "Go binary for creating/updating MTA-SBadgesList.TS records on Cloudflare, and create the accompanying Nginx configuration.",
    link: "https://github.com/Stenstromen/gomtastsflare/releases/latest/",
    github: "https://github.com/Stenstromen/gomtastsflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gologo,
    title: "GoTLSAFlare",
    description:
      "Go binary for updating TLSA DANE record on cloudflare from x509 Certificate.",
    link: "https://github.com/Stenstromen/gotlsaflare/releases/latest/",
    github: "https://github.com/Stenstromen/gotlsaflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gologo,
    title: "GoDKIMFlare",
    description: "Go binary for creating/updating DKIM records on Cloudflare.",
    link: "https://github.com/Stenstromen/godkimflare/releases/latest/",
    github: "https://github.com/Stenstromen/godkimflare",
    badges: [GO, CLOUDFLARE],
  },
  {
    image: gomyip,
    title: "GoMyIP",
    description: "ifconfig.co copycat, written in Go",
    link: "https://github.com/Stenstromen/gomyip",
    github: "https://github.com/Stenstromen/gomyip",
    badges: [GO, KUBERNETES],
  },
  {
    image: khaossweeper,
    title: "KhaosSweeper",
    description:
      "Minesweeper game that randomly kills pods in your Kubernetes cluster, when a mine is hit, because why not?",
    link: "https://github.com/Stenstromen/khaossweeper/releases/latest/",
    github: "https://github.com/Stenstromen/khaossweeper",
    badges: [GO, KUBERNETES],
  },
  {
    image: vault,
    title: "VaultCTX",
    description:
      "Context switching for Hashicorp Vault with support for multiple vaults and namespaces",
    link: "https://github.com/Stenstromen/vaultctx/releases/latest/",
    github: "https://github.com/Stenstromen/vaultctx",
    badges: [RUST],
  },
  {
    image: warez,
    title: "Warez.LOLCat.se",
    description:
      "Secure and encrypted (including filename) file-sharing service.",
    link: "https://warez.lolcat.se",
    github: "https://github.com/Stenstromen/lolwarez",
    badges: [HTML, CSS, JS, NODEJS, MARIADB, KUBERNETES],
  },
  {
    image: arfenhouse,
    title: "Arfenhouse",
    description: "Arfenhouse fan page.",
    link: "https://arfenhou.se",
    github: "https://github.com/Stenstromen/arfenhouse",
    badges: [REACTJS, TS, CLOUDFLARE],
  },
];

export default ProjectList;
