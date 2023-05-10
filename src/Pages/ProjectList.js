const Badges = {
  HTML: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
  CSS: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
  JS: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
  TS: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  REACTJS:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  NODEJS:
    "https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white",
  SOCKETIO:
    "https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101",
  GO: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
  MARIADB:
    "https://img.shields.io/badge/MariaDB-%2300ADD8.svg?style=for-the-badge&logo=mariadb&logoColor=white",
  KUBERNETES:
    "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white",
  WORDPRESS:
    "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white",
  CLOUDFLARE:
    "https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white",
};

const ProjectList = [
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/memo_1f4dd.png",
    title: "AXFR.se",
    description: "List amount/View brand new .SE and .NU Domains.",
    link: "https://axfr.se",
    github: "https://github.com/Stenstromen/axfr-frontend",
    badges: [Badges.REACTJS, Badges.GO, Badges.MARIADB, Badges.KUBERNETES],
  },
  {
    image: "https://battlefield2042.se/bf2042ico.png",
    title: "BF2042Stats",
    description: "Battlefield 2042 Stats page",
    link: "https://battlefield2042.se",
    github: "https://github.com/Stenstromen/bf2042stats",
    badges: [Badges.REACTJS, Badges.TS, Badges.CLOUDFLARE],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/alien-monster_1f47e.png",
    title: "Cavestory.se",
    description: "CaveStory game fan page... Simple enough.",
    link: "https://cavestory.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [Badges.HTML, Badges.CSS, Badges.CLOUDFLARE],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/grinning-cat-with-smiling-eyes_1f638.png",
    title: "Chat.NyanCat.se",
    description: "Fully featured NyanCat themed chat client and server.",
    link: "https://chat.nyancat.se",
    github: "https://github.com/Stenstromen/cavestoryse",
    badges: [Badges.REACTJS, Badges.NODEJS, Badges.SOCKETIO, Badges.KUBERNETES],
  },
  {
    image: "https://filosofiskaeleonora.se/pusheen-cat.png",
    title: "Filosofiska Eleonora",
    description:
      "I took the Red Pill, but now I have to live the Blue Pill life.",
    link: "https://filosofiskaeleonora.se",
    github: "https://github.com/Stenstromen/filosofiskaeleonora",
    badges: [Badges.REACTJS, Badges.CLOUDFLARE],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/red-heart_2764-fe0f.png",
    title: "Flower.API",
    description:
      "API server for listing beautiful flowers, requires registration.",
    link: "https://flower.api.stenstromen.se/readme",
    github: "https://github.com/Stenstromen/flowerapi",
    badges: [Badges.NODEJS, Badges.KUBERNETES],
  },
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/laptop_1f4bb.png",
    title: "IP.Addr.se",
    description: "Get current public IP (try it with curl -4 || -6).",
    link: "http://ip.addr.se",
    github: "https://github.com/Stenstromen/gomyip",
    badges: [Badges.GO, Badges.KUBERNETES],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/globe-showing-europe-africa_1f30d.png",
    title: "Noclip.se",
    description: "Share/Live share current location.",
    link: "http://www.noclip.se",
    github: "https://github.com/Stenstromen/phyaddr",
    badges: [
      Badges.HTML,
      Badges.CSS,
      Badges.JS,
      Badges.NODEJS,
      Badges.SOCKETIO,
      Badges.KUBERNETES,
    ],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/linked-paperclips_1f587-fe0f.png",
    title: "Peppoj.net",
    description: "Personal blog with useful guides.",
    link: "https://www.peppoj.net",
    badges: [Badges.WORDPRESS, Badges.KUBERNETES],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/locked-with-pen_1f50f.png",
    title: "PWGen.cz",
    description: "Generate secure passwords.",
    link: "https://pwgen.cz",
    github: "https://github.com/Stenstromen/pwgen",
    badges: [Badges.REACTJS, Badges.TS],
  },
  {
    image:
      "https://em-content.zobj.net/thumbs/240/apple/354/smiling-cat-with-heart-eyes_1f63b.png",
    title: "Pusheen.se",
    description: "Pusheen the cat!",
    link: "http://pusheen.se",
    github: "https://github.com/Stenstromen/pusheen",
    badges: [Badges.REACTJS, Badges.CLOUDFLARE],
  },
  {
    image: "https://em-content.zobj.net/thumbs/240/apple/354/fire_1f525.png",
    title: "ReadThenBurn.se",
    description:
      "Create temporary, shareable, messages. Only readable once. Read-Then-Burn.",
    link: "http://readthenburn.se",
    github: "https://github.com/Stenstromen/readthenburn-frontend",
    badges: [Badges.REACTJS, Badges.GO, Badges.MARIADB, Badges.KUBERNETES],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoSPFFlare",
    description:
      "Go binary for creating/updating MTA-STS records on Cloudflare.",
    link: "https://github.com/Stenstromen/gospfflare/releases/latest/",
    github: "https://github.com/Stenstromen/gospfflare",
    badges: [Badges.GO, Badges.CLOUDFLARE],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoMTA-STSFlare",
    description:
      "Go binary for creating/updating MTA-STS records on Cloudflare, and create the accompanying Nginx configuration.",
    link: "https://github.com/Stenstromen/gomtastsflare/releases/latest/",
    github: "https://github.com/Stenstromen/gomtastsflare",
    badges: [Badges.GO, Badges.CLOUDFLARE],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoTLSAFlare",
    description:
      "Go binary for updating TLSA DANE record on cloudflare from x509 Certificate.",
    link: "https://github.com/Stenstromen/gotlsaflare/releases/latest/",
    github: "https://github.com/Stenstromen/gotlsaflare",
    badges: [Badges.GO, Badges.CLOUDFLARE],
  },
  {
    image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg",
    title: "GoDKIMFlare",
    description: "Go binary for creating/updating DKIM records on Cloudflare.",
    link: "https://github.com/Stenstromen/godkimflare/releases/latest/",
    github: "https://github.com/Stenstromen/godkimflare",
    badges: [Badges.GO, Badges.CLOUDFLARE],
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
      Badges.HTML,
      Badges.CSS,
      Badges.JS,
      Badges.NODEJS,
      Badges.MARIADB,
      Badges.KUBERNETES,
    ],
  },
];

export default ProjectList;
