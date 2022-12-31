import { Sprite } from "react-pixi-fiber/index.js";
import bg from "../img/bg.png";
import * as PIXI from "pixi.js"; 

export default function Bg (props) {
    return <Sprite texture={PIXI.Texture.from(bg)} {...props} />;
  }