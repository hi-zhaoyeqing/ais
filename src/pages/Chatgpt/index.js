import { useState } from "react";
import Loading from "../../componments/Loading";
import "../../assets/css/card.css";
import "./index.css";
import { Input } from "antd";
import axios from "axios";

function Chatgpt() {
  const [value, setValue] = useState("");
  const [aqList, setAqList] = useState([]);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      setValue("");
      const curAqList = aqList;
      curAqList.push({
        a: value,
        q: "请稍等。。。",
      });
      setAqList(curAqList);
      await axios
        .get(`http://66.135.10.102:9000/result?param=${value}`)
        .then((res) => {
          console.log(res.data)
          const curAqList1 = [...curAqList];
          curAqList1[curAqList1.length - 1] = {
            a: value,
            q: res.data,
          };
          setAqList(curAqList1);
        });
    }
  };

  return (
    <Loading>
      <div id="chatGpt">
        <div className="aq-container">
          <ul>
            {aqList.map((item, index) => {
              return (
                <li key={item + index}>
                  <div className="ans"><img src="../../you.png" alt="" width="60px" />{item.a}</div>
                  <div className="qu">
                    <div className="qu-1">
                      <img src="../../chatgpt.png" alt="" width="40px" />
                      <span>ChatGPT6.0</span>
                    </div>
                    <div
                       className="qu-2"
                      dangerouslySetInnerHTML={{
                        __html: `${item.q}`,
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="header">
          <div className="chatWrap">
            <Input
              className="ipt"
              size="large"
              value={value}
              onChange={onChange}
              placeholder="请输入问题然后回车获取答案"
              onKeyDown={handleKeyDown}
              prefix={<img src="../../chatgpt.png" alt="" />}
            />
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default Chatgpt;
