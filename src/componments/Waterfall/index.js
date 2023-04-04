import { useEffect, useState } from "react";
import "./index.css";

function allocateItems(ls, len, colWidth) {
  /** 各个瀑布流的内容列表 */
  const arr = [];
  /** 各个瀑布流的高度列表 */
  const heightArr = [];
  // 初始化瀑布流的内容列表和高度列表
  for (let i = 0; i < len; i++) {
    arr.push([]);
    heightArr.push(0);
  }
  /** 获取高度最小的流的索引值 */
  function getIndexOfMinHeightFlow() {
    let minH = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;
    heightArr.forEach((h, index) => {
      if (h < minH) {
        minH = h;
        minIndex = index;
      }
    });
    return minIndex;
  }
  // 通过计算展示高度，设置瀑布流的内容列表
  ls.forEach((item, idx) => {
    const index = getIndexOfMinHeightFlow();
    item.displayHeight = (item.height * colWidth) / item.width;
    arr[index].push(item);
    heightArr[index] += item.displayHeight;
  });
  return arr;
}

const Waterfall = (props) => {
  const { list, cols = 1, width, margin = 20, fields } = props;
  const defaultColWidth = (width - (cols - 1) * margin) / cols;
  const [colList, setColList] = useState(
    allocateItems(list, cols, defaultColWidth)
  );
  useEffect(() => {
    setColList(allocateItems(list, cols, defaultColWidth));
  }, [list, cols, defaultColWidth]);
  return (
    <div className="waterfall" style={{ width: width + "px" }}>
      {colList.map((col, fIndex) => (
        <ul
          className="waterfall-list"
          style={{ width: defaultColWidth + "px" }}
          key={"flow_" + fIndex}
        >
          {col.map((item, iIndex) => (
            <li
              className="waterfall-item"
              key={
                "flow_" + fIndex + "_item_" + iIndex + "_" + item.displayHeight
              }
              style={{ height: item.displayHeight + "px" }}
              title={item.text || ""}
            >
              {item.text}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Waterfall;