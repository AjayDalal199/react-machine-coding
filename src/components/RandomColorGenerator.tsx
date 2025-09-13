import { useState } from "react"

const RandomColorGenerator = () => {
  const [colorStr, setColorStr] = useState("#f464b6");
  const [colorCode, setColorCode] = useState(-1);
  const CODE = ["hex", "rgb"];

  function getRandomColor() {
    if (CODE[colorCode] === "hex") {
      const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
      let newHexaCode = "#"
      for (let i = 1; i <= 8; i++) {
        const id = Math.floor(Math.random() * 16);
        newHexaCode = newHexaCode + hexCode[id];
      }
      setColorStr(newHexaCode);
    } else if (CODE[colorCode] === "rgb") {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const alpha = Math.random().toFixed(2);
      const newRgbaCode = `rgb(${red},${green},${blue},${alpha})`;
      setColorStr(newRgbaCode);
    }
  }
  return (
    <div className={`w-full md:3/5 lg:w-4/5 aspect-square mx-auto border-4 border-dashed border-amber-600 flex flex-col justify-start px-4 py-2 bg-[url(./react-img.png)] bg-contain bg-center bg-no-repeat relative`}
    >
      <div className="absolute inset-0 py-2" style={{ backgroundColor: colorStr }}>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setColorCode(0)}
            className={`px-2 py-1 lg:px-4 lg:py-2 rounded-md font-bold ${colorCode === 0 ? "bg-green-700 cursor-default" : "bg-neutral-400 cursor-pointer"}`}>
            HEXA Code
          </button>
          <button
            onClick={() => setColorCode(1)}
            className={`px-2 py-1 lg:px-4 lg:py-2 rounded-md font-bold ${colorCode === 1 ? "bg-green-700 default" : "bg-neutral-400 cursor-pointer"}`}>
            RGBA Code
          </button>
          <button
            onClick={getRandomColor}
            className="bg-amber-600 px-2 py-1 lg:px-4 lg:py-2 rounded-md font-bold cursor-pointer">
            Generate Color
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full text-3xl font-semibold">
          {colorStr}
        </div>
      </div>
    </div>
  )
}

export default RandomColorGenerator;