import { aiTools } from "../../json/aiTools";
import { Link } from "react-router-dom";
import Loading from "../../componments/Loading";
import "../../assets/css/card.css";
import "./index.css";

function AiTools() {
  return (
    <Loading>
      <div id="aiTools">
        <h3>共『{aiTools.length}』个工具</h3>
        <div className="container">
          {aiTools
            .sort((a, b) => {
              return a.isOk ? -1 : b.isOk ? 1 : 0;
            })
            .map((item, index) => {
              return (
                item.isOk && (
                  <Link to={item.link} key={item.title + index}>
                    <div className="card">
                      <div className="contentBx">
                        <h2>{item.title}</h2>
                        <p className="subTitle">{item.subTitle}</p>
                      </div>
                      {item.isOk && (
                        <div className="dot-wrap">
                          <div className="dot"></div>
                        </div>
                      )}
                    </div>
                  </Link>
                )
              );
            })}
          <div style={{ borderRadius: 0,boxShadow: "none",height:0 }} className="card"></div>
          <div style={{ borderRadius: 0,boxShadow: "none",height:0 }} className="card"></div>
          <div style={{ borderRadius: 0,boxShadow: "none",height:0 }} className="card"></div>
        </div>
      </div>
    </Loading>
  );
}

export default AiTools;
