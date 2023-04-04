import "./index.css";
import { useState } from "react";
import { Input, Button, List, Space } from "antd";
import QRCode from "qrcode";
import Loading from "../../../componments/Loading";

function UrlHandler() {
  const [url, setUrl] = useState(
    "https://www.example.com:8888/path/to/resource?query=string#fragment"
  );
  const [data, setData] = useState([]);
  const [qrcodeUrl, setQrcodeUrl] = useState("");
  const handler = () => {
    const newUrl = new URL(url);
    setData([
      `协议名称 protocol----------${newUrl.protocol}`,
      `主机名 hostname-----------${newUrl.hostname}`,
      `端口号 port-----------------${newUrl.port}`,
      `路径部分 pathname---------${newUrl.pathname}`,
      `查询字符串 search----------${newUrl.search}`,
      `锚点部分 hash--------------${newUrl.hash}`,
    ]);
    setQrcodeUrl("");
  };
  const encode = () => {
    setData([`${encodeURIComponent(url)}`]);
    setQrcodeUrl("");
  };
  const decode = () => {
    setData([`${decodeURIComponent(url)}`]);
    setQrcodeUrl("");
  };

  const createQRCode = async () => {
    const myQRCode = await QRCode.toDataURL(url);
    setQrcodeUrl(myQRCode);
    setData([]);
  };
  return (
    <Loading>
      <div id="urlHandler">
        <h2>根据 Url 链接 解析您想要的数据</h2>
        <div className="ipt-wrap">
          <Input
            size="large"
            onChange={(e) => setUrl(e.target.value)}
            className="ipt"
            value={url}
            placeholder="请输入链接"
          />
        </div>
        <Space align="center">
          <Button size="large" type="primary" onClick={handler}>
            解析
          </Button>
          <Button size="large" type="primary" onClick={encode}>
            encodeURIComponent 编码
          </Button>
          <Button size="large" type="primary" onClick={decode}>
            decodeURIComponent 解码
          </Button>
          <Button size="large" type="primary" onClick={createQRCode}>
            生成二维码
          </Button>
        </Space>
        <div className="container">
          {qrcodeUrl && (
            <div className="qrcode">
              <img src={qrcodeUrl} alt="二维码" />
            </div>
          )}
          <List
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    </Loading>
  );
}

export default UrlHandler;
