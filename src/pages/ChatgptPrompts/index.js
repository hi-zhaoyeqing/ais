import { chatGptTips } from "../../aiOthers";
import Loading from "../../componments/Loading";
import "../../assets/css/card.css";
import "./index.css";
import copy from 'copy-to-clipboard';

function ChatgptPrompts() {
  const copyCode = (value) => {
    copy(value);
    document.getElementById("tip").style.display = "block";
    document.getElementById("tip").innerHTML = "复制成功";
    setTimeout(() => {
      document.getElementById("tip").style.display = "none";
    },2000)
  }

  return (
    <Loading>
      <div id="chatgptPrompts">
        <div className="container">
          {chatGptTips.map((item, index) => {
            return (
              <div className="card" key={item.title + index} onClick={()=>copyCode(item.subTitle)}>
                <div className="contentBx">
                  <h2>{item.title}</h2>
                  <p className="subTitle">{item.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Loading>
  );
}

export default ChatgptPrompts;
