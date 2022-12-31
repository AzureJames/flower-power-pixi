import { Sprite } from "react-pixi-fiber/index.js";
import note from "../img/note.png";
import * as PIXI from "pixi.js"; 

export default function Note (props) {
    return <Sprite texture={PIXI.Texture.from(note)} {...props} />;
  }