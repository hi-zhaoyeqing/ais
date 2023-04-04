import { useEffect, useState } from "react";
import "./index.css";

function Loading({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
      <div id="loading-wrap">
        <div className="loader">
          <div>L</div>
          <div>O</div>
          <div>A</div>
          <div>D</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  ) : (
    children
  );
}

export default Loading;
