import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Asadbek" },
  { meta: "last name", metaInfo: "Nazarov" },
  { meta: "Age", metaInfo: new Date().getFullYear() - 2000 },
  { meta: "Nationality", metaInfo: "Uigur" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Uzbekistan" },
  { meta: "phone", metaInfo: "+998 (90) 929-47-19" },
  { meta: "Email", metaInfo: "nazarov_asadbek_job@mail.ru" },
  { meta: "Telegramm", metaInfo: "@NazarovAsadbek" },
  { meta: "langages", metaInfo: "Russian, English, Uzbek" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
