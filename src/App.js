import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AiTools from "./pages/AiTools";
import AiZoo from "./pages/AiZoo";
import AiStorm from "./pages/AiStorm";
import AiImg from "./pages/AiImg";
import Chatgpt from "./pages/Chatgpt";
import ChatgptPrompts from "./pages/ChatgptPrompts";
import GetWebDomList from "./pages/AiTools/GetWebDomList";
import UrlHandler from "./pages/AiTools/UrlHandler";
import ThreeChat from "./pages/ThreeChat";
import Header from "./componments/Header";
import Logo from "./componments/Logo";
import Web from "./pages/Web"
import "./assets/css/card.css";
import "./App.css";

function App() {
  
  return (
    <>
      <div id="tip"></div>
      <Logo />
      <Header />
      <Fragment>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ai-zoo" element={<AiZoo />}></Route>
          <Route path="/ai-tools" element={<AiTools />}></Route>
          <Route path="/ai-img" element={<AiImg />}></Route>
          <Route path="/chatgpt-prompts" element={<ChatgptPrompts />}></Route>
          <Route path="/chatgpt" element={<Chatgpt />}></Route>
          <Route path="/ai-storm" element={<AiStorm />}></Route>
          <Route path="/web" element={<Web />}></Route>
          <Route path="/three-chat" element={<ThreeChat />}></Route>
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
