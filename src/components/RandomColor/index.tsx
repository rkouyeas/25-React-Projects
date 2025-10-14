import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const RandomColor = () => {
  const [colorType, setColorType] = useState<"HEX" | "RGB">("HEX");
  const [color, setColor] = useState<string>("#000000");

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = (): void => {
    if (colorType === "HEX") {
      const hex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");

      setColor(`#${hex}`);
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      setColor(`rgb(${r},${g},${b})`);
    }
  };

  const convertColor = (): void => {
    if (colorType === "HEX") {
      const cleanHex = color.replace("#", "");
      const [r, g, b] = cleanHex.match(/.{2}/g)!.map((x) => parseInt(x, 16));

      setColor(`rgb(${r},${g},${b})`);
    } else {
      const [r, g, b] = color.match(/\d+/g)!.map(Number);

      setColor(
        "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")
      );
    }

    setColorType((prevColorType) => (prevColorType === "HEX" ? "RGB" : "HEX"));
  };

  return (
    <div
      className={styles["random-color"]}
      style={{ backgroundColor: `${color}` }}
    >
      <div>
        <button onClick={() => convertColor()}>
          Get {colorType === "HEX" ? "RGB" : "HEX"}
        </button>
        <button onClick={generateRandomColor}>Generate Random Color</button>
      </div>
      <p>{color}</p>
    </div>
  );
};

export default RandomColor;
