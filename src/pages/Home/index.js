import React, { useState, useEffect, useRef, useMemo } from "react";
import { aiWeb } from "../../json/aiWeb";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { aiTags } from "../../json/aiTags";
import "../../assets/css/card.css";
import Loading from "../../componments/Loading";
import "../../assets/css/switch.css";
import "./index.css";

const PAGE_SIZE = 48;
function Home() {
  const [active, setActive] = useState(-1);
  const [value, setValue] = useState("");

  const [data, setData] = useState([]);
  const [renderedCount, setRenderedCount] = useState(0);
  const containerRef = useRef(null);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(
    aiWeb.map((item,index) => (index+1)+"."+item.cnSubTitle ).join(""))
  console.log(
    aiWeb.map((item) => {
      return {
        title: item.title,
        subTitle: item.subTitle,
        img: decodeURIComponent(item.img),
        link: item.link,
        tag: item.tag,
        cnSubTitle: item.cnSubTitle,
      };
    })
  );
  useEffect(() => {
    setData(aiWeb);
    setRenderedCount(PAGE_SIZE);
  }, []);

  // function handleScroll() {
  //   const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
  //   if (
  //     scrollTop + clientHeight >= scrollHeight - 162 &&
  //     renderedCount < data.length
  //   ) {
  //     // 滚动到底部，加载更多数据
  //     setRenderedCount(Math.min(renderedCount + PAGE_SIZE, data.length));
  //   }
  // }

  useEffect(() => {
    function handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if (
        scrollTop + clientHeight >= scrollHeight - 162 &&
        renderedCount < data.length
      ) {
        // 滚动到底部，加载更多数据
        setRenderedCount(Math.min(renderedCount + PAGE_SIZE, data.length));
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [renderedCount, data]);

  const visibleData = useMemo(() => {
    return data.slice(0, renderedCount);
  }, [data, renderedCount]);

  const onChange = (e) => {
    setValue(e.target.value);
    if (!e.target.value) {
      setData(aiWeb);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setActive(-1);
      setRenderedCount(PAGE_SIZE);
      containerRef.current.scrollTop = 0;
      if (value) {
        setData(aiWeb.filter((d) => (d.title + d.cnSubTitle).includes(value)));
      } else {
        setData(aiWeb);
      }
    }
  };

  return (
    <Loading>
      <div id="home">
        <div className={isFixed?"header fixed":"header"}>
          <h3 className="aiWeb">已收录：『{aiWeb.length}』 个 Ai 网站</h3>
          <Input
            className="ipt"
            value={value}
            size="large"
            onChange={onChange}
            placeholder="请输入你想做搜索的内容 然后回车"
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className="container">
          <div className="tag-wrap">
            <div
              onClick={() => {
                setActive(-1);
                setData(aiWeb);
                setRenderedCount(PAGE_SIZE);
                containerRef.current.scrollTop = 0;
              }}
              className={active === -1 ? "active" : ""}
              key="全部-1"
            >
              全部分类
            </div>
            {aiTags.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setActive(index);
                    setRenderedCount(PAGE_SIZE);
                    containerRef.current.scrollTop = 0;
                    setData(
                      aiWeb.filter((d) => d.tag && d.tag.includes(item.en))
                    );
                  }}
                  className={active === index ? "active" : ""}
                  key={item + index}
                >
                  {item.cn}
                </div>
              );
            })}
          </div>
          <div className="card-wrap">
            <div className="card-flex">
              {visibleData.map((item, index) => {
                return (
                  <div className="card" key={item.title + index}>
                    <div className="imgBx">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="contentBx">
                      <h2>{item.title}</h2>
                      <p className="subTitle">
                        {item.cnSubTitle || item.subTitle}
                      </p>
                      <p className="tag">
                        {item.tag
                          .split("#")
                          .filter((item) => item)
                          .map((a) => {
                            return (
                              <span key={item.title + index + a}>
                                {aiTags.find((t) => t.en === a)
                                  ? aiTags.find((t) => t.en === a).cn
                                  : a}
                              </span>
                            );
                          })}
                      </p>
                      <Link
                        to={{
                          pathname: "/web",
                          search: `?url=${encodeURIComponent(item.link)}`,
                        }}
                        target="_blank"
                      >
                        <span>访问</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default Home;
