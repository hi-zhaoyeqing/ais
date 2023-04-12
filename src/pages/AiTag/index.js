import { aiTags } from "../../json/aiTags";
import Loading from "../../componments/Loading";
import FloatingText from "../../componments/FloatingText";
import "./index.css";

function AiTag() {
  return (
    <Loading>
      <div id="aiStorm">
        {aiTags.map((item,index) => {
          return <FloatingText key={item.cn+index} text={item.cn} />;
        })}
      </div>
    </Loading>
  );
}

export default AiTag;
