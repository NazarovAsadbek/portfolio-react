import selfiestore from "../../assets/img/portfolio/selfiestore.png";
import adminSelfiestore from "../../assets/img/portfolio/admin-selfiestore.png";
import sello from "../../assets/img/portfolio/sello-uz.png";
import logisticsSello from "../../assets/img/portfolio/sello-logistics.png";
import partenrsSello from "../../assets/img/portfolio/sello-partners.png";
import tenge from "../../assets/img/portfolio/tenge-uz.png";
import physicalTenge from "../../assets/img/portfolio/tenge-physical.png";
import juridicTenge from "../../assets/img/portfolio/tenge-jurdic.png";
import zirratbank from "../../assets/img/portfolio/ziraatbank-uz.png";
import instantZiraatBank from "../../assets/img/portfolio/ziraatbank-instant.png";
import adminZirratbank from "../../assets/img/portfolio/ziraatbank-admin.png";
import confidentialProject from "../../assets/img/portfolio/confidential-project.webp";

const PortfolioData = [
  {
    id: 1,
    type: "Selfiestore",
    image: selfiestore,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "Selfie store",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java, Docker & Ansible",
        preview: "selfiestore.uz",
        link: "http://selfiestore.uz/",
      },
    ],
  },
  {
    id: 2,
    type: "Selfie store admin panel",
    image: adminSelfiestore,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "Selfie store",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java, Docker & Ansible",
        preview: "admin.selfiestore.uz",
        link: "http://admin.selfiestore.uz/",
      },
    ],
  },
  {
    id: 3,
    type: "Sello marketplace",
    image: sello,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "Sello, OOO TUNE CONSULTING",
        language: "HTML, SCSS, Typescript, Next.js, Bootstrap, Java, PHP",
        preview: "sello.uz",
        link: "https://sello.uz/",
      },
    ],
  },
  {
    id: 4,
    type: "Sello logistics",
    image: logisticsSello,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "Sello, OOO TUNE CONSULTING",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "logistics.sello.uz",
        link: "https://logistics.sello.uz/login",
      },
    ],
  },
  {
    id: 5,
    type: "Sello merchants",
    image: partenrsSello,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "Sello, OOO TUNE CONSULTING",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "partners.sello.uz",
        link: "https://partners.sello.uz/login",
      },
    ],
  },
  {
    id: 6,
    type: "tenge",
    image: tenge,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "TENGE BANK (Uzbekistan Branch)",
        language: "HTML, SCSS, Typescript, Angular, Java",
        preview: "tengebank.uz",
        link: "https://tengebank.uz/ru/business",
      },
    ],
  },
  {
    id: 7,
    type: "Tenge physical admin panel",
    image: physicalTenge,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "TENGE BANK (Uzbekistan Branch)",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "tengebank.uz",
        link: "https://tengebank.uz/ru/business",
      },
    ],
  },
  {
    id: 8,
    type: "Tenge juridic admin panel",
    image: juridicTenge,
    tag: ["COMMERCIAL"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Web Application",
        client: "TENGE BANK (Uzbekistan Branch)",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "tengebank.uz",
        link: "https://tengebank.uz/ru/business",
      },
    ],
  },
  {
    id: 9,
    type: "Ziraat Bank",
    image: zirratbank,
    tag: ["COMMERCIAL"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Ziraat Bank (Uzbekistan Branch)",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "ziraatbank.uz",
        link: "https://bireysel.ziraatbank.uz/auth/login",
      },
    ],
  },
  {
    id: 10,
    type: "Ziraat Bank instant payment",
    image: instantZiraatBank,
    tag: ["COMMERCIAL"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Ziraat Bank (Uzbekistan Branch)",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "ziraatbank.uz",
        link: "https://bireysel.ziraatbank.uz/auth/login",
      },
    ],
  },
  {
    id: 11,
    type: "Ziraat Bank admin panel",
    image: adminZirratbank,
    tag: ["COMMERCIAL"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Web Application",
        client: "Ziraat Bank (Uzbekistan Branch)",
        language: "HTML, SCSS, Javascript, Nuxt.js, Java",
        preview: "admin.ziraatbank.uz",
        link: "https://bireysel.ziraatbank.uz:9999/",
      },
    ],
  },
  {
    id: 12,
    type: "ABV",
    image: confidentialProject,
    tag: ["COMMERCIAL"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Web Application",
        client: "OOO CROWE TAC",
        language: "HTML, SCSS, Javascript, Nuxt.js, C#",
        preview: "abv.uz",
        link: "https://web.abv.uz/ru/login",
      },
    ],
  }
];

export default PortfolioData;
