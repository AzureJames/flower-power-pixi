import { Sprite } from "react-pixi-fiber/index.js";
import drum from "../img/drum.png";
import drumhit from "../img/drumhit.png";
import * as PIXI from "pixi.js"; 
import { useCallback, useState } from "react";
//import { usePixiTicker } from "react-pixi-fiber/index.js";
import drumsound from '../img/drumsound.mp3';
import useSound from 'use-sound';

export default function DrumSprite (props) {
  const [tex, setTex] = useState(drum);
  const [playSound] = useSound(drumsound)

  //this is broke. eventually i want a mouse interaction event timeout
  const Clicked = () => {
    
playSound();
        setTex(drumhit); 
        setTimeout(() => setTex(drum), 50);
    }
  



    
    
      
      




    return (
      <Sprite texture={PIXI.Texture.from(tex)} interactive={true} pointerdown={
        (event) => { Clicked() }
      } {...props} />
    )
  }