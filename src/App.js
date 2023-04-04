import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes, Navigate, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AiTools from "./pages/AiTools";
import AiZoo from "./pages/AiZoo";
import AiStorm from "./pages/AiStorm";
import AiImg from "./pages/AiImg";
import Chatgpt from "./pages/Chatgpt";
import ChatgptPrompts from "./pages/ChatgptPrompts";
import GetWebDomList from "./pages/AiTools/GetWebDomList";
import UrlHandler from "./pages/AiTools/UrlHandler";
import "./assets/css/card.css";
import "./App.css";

function App() {
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
    <>
      <div id="tip"></div>
      <div id="logo">
        <div className="logo-wrap">
          <span>Ai'</span>
        </div>
        <ul className="nav">
          {navList.map((item) => {
            return !item.isHide && (
              <li key={item.link}>
                <Link
                  className={active === item.link ? "active" : ""}
                  to={`./${item.link}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ai-zoo" element={<AiZoo />}></Route>
          <Route path="/ai-tools" element={<AiTools />}></Route>
          <Route path="/ai-img" element={<AiImg />}></Route>
          <Route path="/chatgpt-prompts" element={<ChatgptPrompts />}></Route>
          <Route path="/chatgpt" element={<Chatgpt />}></Route>
          <Route path="/ai-storm" element={<AiStorm />}></Route>
          <Route
            path="/ai-tools/get-web-dom-list"
            element={<GetWebDomList />}
          ></Route>
          <Route
            path="/ai-tools/url-handlder"
            element={<UrlHandler />}
          ></Route>
          <Route path="/" element={<Navigate to="/home" />}></Route>
        </Routes>
      </Fragment>
    </>
  );
}

export default App;
