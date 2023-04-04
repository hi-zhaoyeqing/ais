import { tags } from "../../aiOthers";
import Loading from "../../componments/Loading";
import "./index.css";

function AiStorm() {
  return (
    <Loading>
      <div id="aiStorm">
        <div className="container">
          {tags.map((item, index) => {
            return (
              <div className="card" key={item.en + index}>
                <div className="contentBx">
                  <h2>{item.en}</h2>
                  <p className="subTitle">{item.cn}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Loading>
  );
}

export default AiStorm;
