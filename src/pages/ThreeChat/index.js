import Loading from "../../componments/Loading";
import "./index.css";

function ThreeChat() {
  return (
    <Loading>
      <div id="threeChat">
        <div>
          <a href="https://openai.com/" target="_blank" rel="noreferrer">
            <img src="../../openai.svg" alt="" />
            <span>ChatGpt</span>
          </a>
        </div>
        <div>
          <a href="https://yiyan.baidu.com/" target="_blank" rel="noreferrer">
            <img src="../../wenxin.png" alt="" />
            <span>文心一言</span>
          </a>
        </div>
        <div>
          <a href="https://tongyi.aliyun.com/" target="_blank" rel="noreferrer">
            <img src="../../tongyiqianwen.png" alt="" />
            <span>通义千问</span>
          </a>
        </div>
      </div>
    </Loading>
  );
}

export default ThreeChat;
