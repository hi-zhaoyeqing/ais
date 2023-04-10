import "./index.css";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname.split("/")[1]);
  }, [location.pathname]);
  const navList = [
    {
      name: "Ai 网站收录",
      link: "home",
    },
    {
      name: "三巨头",
      link: "three-chat",
    },
    {
      name: "Ai 图片",
      link: "ai-img",
    },
    {
      name: "Ai 动物园",
      link: "ai-zoo",
      isHide: true,
    },
    {
      name: "Cgps",
      link: "chatgpt-prompts",
    },
    {
      name: "Ai 工具箱",
      link: "ai-tools",
    },
    {
      name: "Ai 风暴",
      link: "ai-storm",
    },
    {
      name: "Chatgpt6",
      link: "chatgpt",
    },
  ];

  return (
    <div className="navWrap">
      <input type="checkbox" id="menu_btn" />
      <label className="menu-btn" htmlFor="menu_btn">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </label>
      <div className="wrapper">
        <ul className="menu">
          {navList.map((item) => {
            return (
              !item.isHide && (
                <li key={item.link}>
                  <Link
                    to={`./${item.link}`}
                    className={active === item.link ? "active" : ""}
                    onClick={() =>
                      (document.getElementById("menu_btn").checked = false)
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
