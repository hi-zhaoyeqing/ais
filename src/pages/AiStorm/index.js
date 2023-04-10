import { aiTags } from "../../json/aiTags";
import Loading from "../../componments/Loading";
import { useState, useEffect } from "react";
import "./index.css";



function AiStorm() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    const newTags = aiTags.map((item, index) => {
      const initialX = Math.random() * (innerWidth);
      const initialY = Math.random() * (innerHeight);
      const directionX = Math.random() < 0.5 ? 1 : -1;
      const directionY = Math.random() < 0.5 ? 1 : -1;
      return {
        id: index,
        en: item.en,
        cn: item.cn,
        x: initialX,
        y: initialY,
        dx: directionX,
        dy: directionY,
        class: "move",
      };
    });
    setTags(newTags);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const { innerWidth, innerHeight } = window;
      const newTags = tags.map((item) => {
        let newX = item.x + item.dx;
        let newY = item.y + item.dy;
        if (newX < 0 || newX >= innerWidth) {
          item.dx = -item.dx;
          newX += item.dx;
        }
        if (newY < 0 || newY >= innerHeight) {
          item.dy = -item.dy;
          newY += item.dy;
        }
        return { ...item, x: newX, y: newY, class: "move" };
      });
      setTags(newTags);
    }, 100);
    return () => clearTimeout(timer);
  }, [tags]);

  const handleTransitionEnd = (id) => {
    const newTags = tags.map((item) =>
      item.id === id ? { ...item, class: "" } : item
    );
    setTags(newTags);
  };

  return (
    <Loading>
      <div id="aiStorm">
        <div className="container">
          {tags.map((item) => {
            return (
              <div
                key={item.id}
                style={{ left: item.x, top: item.y }}
                onTransitionEnd={() => handleTransitionEnd(item.id)}
                className={`tag ${item.class}`}
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



export default AiStorm;
