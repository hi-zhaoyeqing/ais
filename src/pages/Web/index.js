import Loading from "../../componments/Loading";
import IframeRenderer from "../../componments/Iframe";
import { useSearchParams } from "react-router-dom";
import "./index.css";
// 详细演示页面请参考 https://codesandbox.io/s/busy-faraday-w538tc

function Web() {
  const [searchParams] = useSearchParams();
  console.log();
  const url = searchParams.get("url");
  return (
    <Loading>
      <div id="Web">
        <IframeRenderer url={url} />
      </div>
    </Loading>
  );
}

export default Web;
