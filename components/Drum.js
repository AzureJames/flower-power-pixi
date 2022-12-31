import { useCallback, useState } from "react";
//import { usePixiTicker } from "react-pixi-fiber/index.js";
import DrumSprite from "../img/DrumSprite";

let circleSpeed = 4
// http://pixijs.io/examples/#/basics/basic.js
function Drum(props) {

  //start at right
  const [position, setPosition] = useState(300);
 

  return <DrumSprite {...props} y={position} />;
}

export default Drum;
