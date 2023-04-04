import {  useState } from "react";
import "./index.css";
import { Prism } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import copy from 'copy-to-clipboard';
import Loading from "../../../componments/Loading";

function GetWebDomList() {
  
  const code = `
  const result = [];
  const eleList = document.querySelectorAll(".css-11nugbd");
  for (var i = 0; i < eleList.length; i++) {
    // 获取标题
    var titleEles = eleList[i].querySelectorAll(".css-nxqa8p");
    if (titleEles && titleEles.length > 0) {
      var title = titleEles[0].innerText;
    }
    // 获取二级标题
    var subTitleEles = eleList[i].querySelectorAll(".css-1wmei7v");
    if (subTitleEles && subTitleEles.length > 0) {
      var subTitle = subTitleEles[0].innerText;
    }
    // 获取价格类型
    var priceTypes = eleList[i].querySelectorAll(".css-1e478s8");
    if (priceTypes && priceTypes.length > 0) {
      var priceType = priceTypes[0].innerText;
    }
    // 获取tag
    var tags = eleList[i].querySelectorAll(".css-yt9ay8");
    if (tags && tags.length > 0) {
      var tag = tags[0].innerText;
    }
    // 获取图片地址
    var imgEles = eleList[i].querySelectorAll(".css-1jrlqts");
    if (imgEles && imgEles.length > 0) {
      var img = imgEles[0].src;
    }
    // 获取链接地址
    var linkEles = eleList[i].querySelectorAll(".css-p9t5dc");
    if (linkEles && linkEles.length > 0) {
      var link = linkEles[0].href;
    }
    result.push({
      title: title,
      subTitle: subTitle,
      img: img,
      link: link,
      priceType: priceType,
      tag: tag,
    });
  }
  // console.log("最终结果", result);
  `;

  const [tip, setTip] = useState("复制代码");

  const copyCode = () => {
    copy(code);
    setTip("复制成功");
    setTimeout(() => {
      setTip("复制代码");
    },1000)
  }

  return (
    <Loading>
    <div id="GetWebDomList">
      <h2>
        根据网站结构获取想要的内容
        <button className="copy-button" onClick={copyCode}>
          {tip}
        </button>
      </h2>
      <div className="container">
        <Prism
          showLineNumbers
          startingLineNumber={0}
          language="javascript"
          wrapLines={true}
          style={oneDark}
        >
          {code}
        </Prism>
      </div>
      </div>
      </Loading>
  );
}

export default GetWebDomList;
