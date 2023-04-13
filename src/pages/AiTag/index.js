// import { aiTags } from "../../json/aiTags";
import Loading from "../../componments/Loading";
// import FloatingText from "../../componments/FloatingText";
import { aiWeb } from "../../json/aiWeb";
import "./index.css";

function AiTag() {
  return (
    <Loading>
      <div id="aiStorm">
        {/* {aiTags.map((item,index) => {
          return <FloatingText key={item.cn+index} text={item.cn} />;
        })} */}
         {aiWeb.map((item,index) => {
           return <p key={item.cnSubTitle + index}>{ index+1}:{item.cnSubTitle}</p>;
        })}
      </div>
    </Loading>
  );
}

export default AiTag;
