import FlareIP from "../img/flareip.svg";
import registryport from "../img/registryport.png";
import BadgesList from "../Components/BadgesList";

const ProjectList = [
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/memo_1f4dd.png",
    title: "AXFR.se",
    description: "List amount/View brand new .SE and .NU Domains.",
    link: "https://axfr.se",
    github: "https://github.com/Stenstromen/axfr-frontend",
    badges: [
      BadgesList.REACTJS,
      BadgesList.GO,
      BadgesList.MARIADB,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image: "https://battlefield2042.se/bf2042ico.png",
    title: "BF2042Stats",
    description: "Battlefield 2042 Stats page",
    link: "https://battlefield2042.se",
    github: "https://github.com/Stenstromen/bf2042stats",
    badges: [BadgesList.REACTJS, BadgesList.TS, BadgesList.CLOUDFLARE],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/alien-monster_1f47e.png",
    title: "Cavestory.se",
    description: "CaveStory game fan page... Simple enough.",
    link: "https://cavestory.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [BadgesList.HTML, BadgesList.CSS, BadgesList.CLOUDFLARE],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/grinning-cat-with-smiling-eyes_1f638.png",
    title: "Chat.NyanCat.se",
    description: "Fully featured NyanCat themed chat client and server.",
    link: "https://chat.nyancat.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [
      BadgesList.REACTJS,
      BadgesList.NODEJS,
      BadgesList.SOCKETIO,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/320/apple/354/floppy-disk_1f4be.png",
    title: "DockerCTX",
    description:
      "Rewrite of ahmetb's 'kubectx' utility. Easily switch between Docker contexts.",
      link: "https://github.com/Stenstromen/dockerctx/releases/latest/",
    github: "https://github.com/Stenstromen/dockerctx",
    badges: [BadgesList.SHELL],
  },
  {
    image: "https://filosofiskaeleonora.se/pusheen-cat.png",
    title: "Filosofiska Eleonora",
    description:
      "I took the Red Pill, but now I have to live the Blue Pill life.",
    link: "https://filosofiskaeleonora.se",
    github: "https://github.com/Stenstromen/filosofiskaeleonora",
    badges: [BadgesList.REACTJS, BadgesList.CLOUDFLARE],
  },
  {
    image: FlareIP,
    title: "FlareIP",
    description: "Cloudflare Worker to get the client IP address.",
    link: "https://addr.se/readme",
    github: "https://github.com/Stenstromen/flareip",
    badges: [BadgesList.TS, BadgesList.CLOUDFLARE],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png",
    title: "Flower.API",
    description:
      "API server for listing beautiful flowers, requires registration.",
    link: "https://flower.api.stenstromen.se/readme",
    github: "https://github.com/Stenstromen/flowerapi",
    badges: [BadgesList.NODEJS, BadgesList.KUBERNETES],
  },
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/spouting-whale_1f433.png",
    title: "NcRegistry",
    description: "NcRegistry Go binary provides users with an interactive prompt to select registries, view repositories, and manage Docker images and tags.",
    link: "https://github.com/Stenstromen/ncregistry/releases/latest/",
    github: "https://github.com/Stenstromen/ncregistry",
    badges: [BadgesList.GO, BadgesList.DOCKER],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/globe-showing-europe-africa_1f30d.png",
    title: "Noclip.se",
    description: "Share/Live share current location.",
    link: "http://www.noclip.se",
    github: "https://github.com/Stenstromen/phyaddr",
    badges: [
      BadgesList.HTML,
      BadgesList.CSS,
      BadgesList.JS,
      BadgesList.NODEJS,
      BadgesList.SOCKETIO,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image: registryport,
    title: "RegistryPort",
    description: "RegistryPort brings the power of Docker Registries to the palm of your hand.",
    link: "https://apps.apple.com/us/app/registryport/id6464222587",
    github: "https://github.com/Stenstromen/registryport",
    badges: [BadgesList.REACTNATIVE, BadgesList.TS, BadgesList.DOCKER],
  },
  {
    image: "https://openvision.boo/assets/logo-2fd1099d.svg",
    title: "OpenVision",
    description:
      "OpenVision is a web application that allows you to detect objects in images, using Keras MobileNetV3 model in TensorflowJs.",
    link: "https://openvision.boo",
    github: "https://github.com/Stenstromen/openvision",
    badges: [BadgesList.REACTJS, BadgesList.TS, BadgesList.TENSORFLOW],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/linked-paperclips_1f587-fe0f.png",
    title: "Peppoj.net",
    description: "Personal blog with useful guides.",
    link: "https://www.peppoj.net",
    badges: [BadgesList.WORDPRESS, BadgesList.KUBERNETES],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/locked-with-pen_1f50f.png",
    title: "PWGen.cz",
    description: "Generate secure passwords.",
    link: "https://pwgen.cz",
    github: "https://github.com/Stenstromen/pwgen",
    badges: [BadgesList.REACTJS, BadgesList.TS],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/smiling-cat-with-heart-eyes_1f63b.png",
    title: "Pusheen.se",
    description: "Pusheen the cat!",
    link: "http://pusheen.se",
    github: "https://github.com/Stenstromen/pusheen",
    badges: [BadgesList.REACTJS, BadgesList.CLOUDFLARE],
  },
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/fire_1f525.png",
    title: "ReadThenBurn.se",
    description:
      "Create temporary, shareable, messages. Only readable once. Read-Then-Burn.",
    link: "http://readthenburn.se",
    github: "https://github.com/Stenstromen/readthenburn-frontend",
    badges: [
      BadgesList.REACTJS,
      BadgesList.GO,
      BadgesList.MARIADB,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/memo_1f4dd.png",
    title: "Snapnote",
    description: "Open source note taking application.",
    link: "https://snapnote.online",
    github: "https://github.com/Stenstromen/snapnote",
    badges: [
      BadgesList.REACTJS,
      BadgesList.TS,
      BadgesList.GO,
      BadgesList.MARIADB,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image: "https://twaddle.page/assets/twaddle-c3415e3b.svg",
    title: "Twaddle",
    description: "Generate gibberish using the distilGP2 model.",
    link: "https://twaddle.page",
    github: "https://github.com/Stenstromen/twaddle-frontend",
    badges: [
      BadgesList.REACTJS,
      BadgesList.TS,
      BadgesList.PYTHON,
      BadgesList.TENSORFLOW,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoSPFFlare",
    description:
      "Go binary for creating/updating MTA-SBadgesList.TS records on Cloudflare.",
    link: "https://github.com/Stenstromen/gospfflare/releases/latest/",
    github: "https://github.com/Stenstromen/gospfflare",
    badges: [BadgesList.GO, BadgesList.CLOUDFLARE],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoMTA-STSFlare",
    description:
      "Go binary for creating/updating MTA-SBadgesList.TS records on Cloudflare, and create the accompanying Nginx configuration.",
    link: "https://github.com/Stenstromen/gomtastsflare/releases/latest/",
    github: "https://github.com/Stenstromen/gomtastsflare",
    badges: [BadgesList.GO, BadgesList.CLOUDFLARE],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoTLSAFlare",
    description:
      "Go binary for updating TLSA DANE record on cloudflare from x509 Certificate.",
    link: "https://github.com/Stenstromen/gotlsaflare/releases/latest/",
    github: "https://github.com/Stenstromen/gotlsaflare",
    badges: [BadgesList.GO, BadgesList.CLOUDFLARE],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoDKIMFlare",
    description: "Go binary for creating/updating DKIM records on Cloudflare.",
    link: "https://github.com/Stenstromen/godkimflare/releases/latest/",
    github: "https://github.com/Stenstromen/godkimflare",
    badges: [BadgesList.GO, BadgesList.CLOUDFLARE],
  },
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png",
    title: "GoMyIP",
    description: "ifconfig.co copycat, written in Go",
    link: "https://github.com/Stenstromen/gomyip",
    github: "https://github.com/Stenstromen/gomyip",
    badges: [BadgesList.GO, BadgesList.KUBERNETES],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/black-cat_1f408-200d-2b1b.png",
    title: "Warez.LOLCat.se",
    description:
      "Secure and encrypted (including filename) file-sharing service.",
    link: "https://warez.lolcat.se",
    github: "https://github.com/Stenstromen/lolwarez",
    badges: [
      BadgesList.HTML,
      BadgesList.CSS,
      BadgesList.JS,
      BadgesList.NODEJS,
      BadgesList.MARIADB,
      BadgesList.KUBERNETES,
    ],
  },
  {
    image: "https://arfenhou.se/logo.jpg",
    title: "Arfenhouse",
    description: "Arfenhouse fan page.",
    link: "https://arfenhou.se",
    github: "https://github.com/Stenstromen/arfenhouse",
    badges: [BadgesList.REACTJS, BadgesList.TS, BadgesList.CLOUDFLARE],
  },
];

export default ProjectList;
