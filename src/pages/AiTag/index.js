import { aiTags } from "../../json/aiTags";
import Loading from "../../componments/Loading";
import "./index.css";

function AiTag() {
  return (
    <Loading>
      <div id="aiStorm">
        <div className="container">
          {aiTags.map((item) => {
            return (
              <div
                key={item.id}
                className={`tag`}
              >
                {/* <h2>{item.en}</h2> */}
                <p>{item.cn}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Loading>
  );
}



export default AiTag;
