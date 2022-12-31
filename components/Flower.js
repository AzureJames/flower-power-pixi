import { Sprite } from "react-pixi-fiber/index.js";
import flower from "../img/flower.png";
import * as PIXI from "pixi.js"; 

export default function Flower (props) {
    return <Sprite texture={PIXI.Texture.from(flower)} {...props} />;
  }