import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-telegram",
    link: "https://t.me/Nazarov_Asadbek",
  },
  {
    iconName: "fa fa-telegram",
    link: "https://t.me/NazarovAsadbek",
  },
  {
    iconName: "fa fa-telegram",
    link: "https://t.me/Nazarov_Asadbek1",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
