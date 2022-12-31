import { useCallback, useState } from "react";
import { usePixiTicker , Text } from "react-pixi-fiber/index.js";
import Note from "./Note";

let circleSpeed = 4
// http://pixijs.io/examples/#/basics/basic.js
function NoteAnimated({pts, startingPos}) {

  //start at right
  const [position, setPosition] = useState(800);
  //WHY DOESN'T THIS GET PASSED IN PROPERLY??
  const animate = useCallback((delta) => {
    // move note per time


    setPosition((x) => 
    x - circleSpeed * delta
    );
  }, []);
  usePixiTicker(animate);

  //reset note
  if(position < -150){setPosition((x) => 
    x = 800
  );}

  //sweet spot zone
  if(position < 140 && position > 30){
    console.log("hit");
    pts++;
    console.dir(pts.valueOf);
  ;}

//TODO: LEARN/ ASK MY FRIENDS ETC HOW TO PASS THE POINTS VALUE OR CREATE IT... SHOULD
//PROBABLY BE AT THE APP LEVEL SO OTHER STUFF CAN ACCESS IT?

  return (
  <>
    <Note  x={position} />
    <Text x={600} y={10} text={pts} />
  </>
  );
}

export default NoteAnimated;
