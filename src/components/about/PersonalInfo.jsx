import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Asadbek" },
  { meta: "last name", metaInfo: "Nazarov" },
  { meta: "Age", metaInfo: "21 Years" },
  { meta: "Nationality", metaInfo: "Uigur" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tashkent" },
  { meta: "phone", metaInfo: "+998(90)317 69 00" },
  { meta: "Email", metaInfo: "mr.beka.2904 @mail.com" },
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
