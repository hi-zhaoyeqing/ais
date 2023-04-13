import Loading from "../../componments/Loading";
import IframeRenderer from "../../componments/Iframe";
import "./index.css";
import { Select, Input, Button, message } from "antd";
import { useEffect, useState } from "react";

function Vip() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://jx.aidouer.net/?url=");
  const [link, setLink] = useState("https://www.iqiyi.com/v_267sg3yqbjc.html?vfm=2008_aldbd&fv=p_02_01");
  const [urlLink, setUrlLink] = useState("");

  const urlList = [
    {
      value: "https://jx.aidouer.net/?url=",
      label: "爱豆",
    },
    {
      value: "https://www.yemu.xyz/?url=",
      label: "夜幕",
    },
    {
      value: "https://im1907.top/?jx=",
      label: "纯净/B站",
    },
    {
      value: "https://jx.bozrc.com:4433/player/?url=",
      label: "综合/B站",
    },
    {
      value: "https://jx.xmflv.com/?url=",
      label: "虾米",
    },
    {
      value: "https://okjx.cc/?url=",
      label: "OK解析",
    },
    {
      value: "https://jx.m3u8.tv/jiexi/?url=",
      label: "M3U8.TV",
    },
    {
      value: "https://jx.blbo.cc:4433/?url=",
      label: "人人迷",
    },
    {
      value: "https://jx.nnxv.cn/tv.php?url=",
      label: "七哥",
    },
    {
      value: "https://api.qianqi.net/vip/?url=",
      label: "冰豆",
    },
    {
      value: "https://www.ckplayer.vip/jiexi/?url=",
      label: "CK",
    },
    {
      value: "https://www.ckmov.vip/api.php?url=",
      label: "ckmov",
    },
    {
      value: "https://jx.playerjy.com/?url=",
      label: "playerjy/B站",
    },
    {
      value: "https://www.ckmov.com/?url=",
      label: "诺诺",
    },
    {
      value: "https://vip.bljiex.com/?v=",
      label: "BL",
    },
    {
      value: "https://api.jiexi.la/?url=",
      label: "解析la",
    },
    {
      value: "https://jiexi.janan.net/jiexi/?url=",
      label: "MUTV",
    },
    {
      value: "https://www.mtosz.com/m3u8.php?url=",
      label: "MAO",
    },
    {
      value: "https://www.pangujiexi.cc/jiexi.php?url=",
      label: "盘古",
    },
    {
      value: "https://jx.4kdv.com/?url=",
      label: "4K",
    },
    {
      value: "https://www.8090g.cn/?url=",
      label: "8090",
    },
    {
      value: "https://www.nxflv.com/?url=",
      label: "诺讯",
    },
    {
      value: "https://jx.000180.top/jx/?url=",
      label: "180",
    },
    {
      value: "https://www.administratorw.com/video.php?url=",
      label: "无名",
    },
    {
      value: "https://z1.m1907.top/?eps=0&jx=",
      label: "纯净/B站",
    },
    {
      value: "https://jx.jsonplayer.com/player/?url=",
      label: "高速接口",
    },
    {
      value: "https://api.okjx.cc:3389/jx.php?url=",
      label: "OKJX",
    },
    {
      value: "https://jx.playerjy.com/?ads=0&url=",
      label: "playerjy/B站",
    },
    {
      value: "https://jx.iztyy.com/Bei/?url=",
      label: "猪蹄",
    },
    {
      value: "https://jx.yparse.com/index.php?url=",
      label: "云析",
    },
    {
      value: "https://www.playm3u8.cn/jiexi.php?url=",
      label: "PM",
    },
    {
      value: "https://zhihuweb.com/player.html?url=",
      label: "综合线路",
    },
  ];
  //https://chat.nnxv.cn/
  useEffect(() => {
    setData(urlList);
  }, []);

  return (
    <Loading>
      <div id="vip">
        <div className="ipt-wrap">
          <Select
            placeholder="请选择一个魔法"
            options={data}
            onChange={setUrl}
            className="select"
            value={url}
            size="large"
          />
          <Input
            placeholder="请将您想看的影视链接复制到这里"
            className="ipt"
            size="large"
            onChange={setLink}
            value={link}
          />
          <Button size="large" onClick={() => {
            if (link === "") {
              message.error("链接呢？😊")
            } else {
              setUrlLink(url + link);
            }
          }}>Go</Button>
        </div>
        <div className="iframe">
          <IframeRenderer url={urlLink} />
        </div>
      </div>
    </Loading>
  );
}

export default Vip;
