import Loading from "../../componments/Loading";
import Masonry from "react-masonry-css";
import { waterfallList } from "../../img.js";
import "./index.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
};

// 详细演示页面请参考 https://codesandbox.io/s/busy-faraday-w538tc

function AiImg() {
  const [data, setData] = useState([]);
  const [localData, setLocalData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    setLocalData(shuffle(Array.from(new Set(waterfallList))));
    setData(shuffle(Array.from(new Set(waterfallList))).slice(0, 10));
  }, []);


  const fetchData = async () => {
    if (!hasMore) {
      return;
    }
    setLoading(true);
    const startIndex = (page - 1) * 15;
    if (startIndex >= localData.length) {
      setLoading(false);
      setHasMore(false);
      return;
    }
    const endIndex = Math.min(startIndex + 15, localData.length);
    const newData = shuffle(Array.from(new Set(localData.slice(startIndex, endIndex).concat(data))));
    setData(newData);
    setHasMore(endIndex < localData.length);
    setPage(page + 1);
    setLoading(false);
  };

  const handleScroll = (e) => {
    const bottom =
      Math.abs(e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight) < 60;
    if (bottom && hasMore && !loading) {
      fetchData();
    }
  };


  return (
    <Loading>
      <div id="aiImg" onScroll={handleScroll}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.map((item, index) => (
            <div key={item + index}>
              <img src={item} alt={item} />
            </div>
          ))}
        </Masonry>
        {loading && <div className="loading">Loading...</div>}
      </div>
    </Loading>
  );
}

export default AiImg;
