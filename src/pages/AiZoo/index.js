import Loading from "../../componments/Loading";
import "./index.css";

function AiZoo() {
  return (
    <Loading>
    <div id="aiZoo">
      <div className="container">
        <div className="wrapper">
          <div className="a"></div>
          <div className="b"></div>
          <div className="body">
            <div className="back"></div>
            <div className="shading">
              <div className="shading_back">
                <div className="stripe1"></div>
                <div className="stripe2"></div>
                <div className="stripe3"></div>
                <div className="stripe4"></div>
              </div>
            </div>
            <div className="eye"></div>
            <div className="wing"></div>
          </div>
          <div className="leg">
            <div className="curve1"></div>
            <div className="main"></div>
          </div>
          <div className="leg_part2"></div>
          <div className="foot"></div>
          <div className="leg2">
            <div className="curve1"></div>
            <div className="main"></div>
          </div>
          <div className="leg_part3"></div>
          <div className="small_leg"></div>
          <div className="small_leg small_leg2"></div>
          <div className="circle"></div>
        </div>
      </div>
      <div className="firefly-container">
        <div className="checkbox-wrap">
          <input className="checkbox" id="checkbox" type="checkbox" />
          <label className="firefly" for="checkbox">
            <div className="abdomen">
              <div className="thorax">
                <div className="head">
                  <div className="eyes"></div>
                  <div className="antennae"></div>
                </div>
              </div>
              <div className="wings">
                <div className="wing wing-a"></div>
                <div className="wing wing-b"></div>
              </div>
            </div>
          </label>
        </div>
      </div>
      </div>
      </Loading>
  );
}

export default AiZoo;
