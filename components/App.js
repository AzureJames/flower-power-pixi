
import { Sprite, Stage, Texture, Text } from "react-pixi-fiber/index.js";
import * as React from "react";
import { useCallback, useState } from "react";
import Flower from "../src/components/Flower";
import NoteAnimated from "../src/components/NoteAnimated";
import Drum from "../src/components/DrumSprite";
import Bg from "./Bg";


function App() {
  const [pts, setPts] = useState(2);
  const [tutorial, setTutorial] = useState("Hit the drum when the notes are in position");
  setTimeout(() => setTutorial(""), 5000);

  return (
    <>
      <Bg height="600" width="800"></Bg>
      <Text x={170} y={10} text={tutorial} />
      <NoteAnimated y={70} pts={pts} startingPos={700}/>
      {/* EVENTUALLY I WANT LIKE 100 WITH STARTINGPOS 
      800 850 900 950 1050 1150 1175 1200 1250 1300 1400 1450 1500 1525 1550 1575 1600 1650 1700 
      MAKE A GOOD COMMIT THEN BRANCH AND TRY TO ADD THE REACT GEN ALGO AND GET IT WORKING WITH 
      TEXT. IT WOULD CONNECT TO THE POINT SYSTEM AND MODIFY THE FLOWER EVERY TIME... THREE
      SPRITE SECTIONS FOR FLOWER-- CENTER, PETALS, AND STEM I GUESS....
      */}
      <Flower position="100,350"></Flower>
      <Drum position="300, 350" height="200" width="200" ></Drum>
    </>
  );
}

export default App;
