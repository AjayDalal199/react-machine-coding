import { useState } from "react"

const Rating = () => {
  const [fillIndex, setFillIndex] = useState<number>(-1);
  const [tempIndex, setTempIndex] = useState<number>(-1);

  function handleFill(index: number) {
    setFillIndex(index);
  }
  function handleTempFill(index: number) {
    setTempIndex(index);
  }
  function handleTempReset() {
    setTempIndex(-1);
  }

  let textIndex = -1;
  if (tempIndex >= 0 && tempIndex > fillIndex) textIndex = tempIndex + 1;
  else if (fillIndex >= 0) textIndex = fillIndex + 1;

  return (
    <div className="px-4 py-2 border-2 border-dashed border-amber-200 flex flex-col md:flex-row gap-4 items-center justify-center">
      <div className="flex gap-1 md:gap-4">
        <div
          className="flex justify-center align items-center gap-1 md:gap-2 w-min mx-auto"
          onMouseLeave={() => handleTempReset()}
        >
          {Array.from({ length: 10 }).map((_, i) =>
            <CircleItem key={i} index={i} fillIdx={fillIndex} handleFill={handleFill} tempIdx={tempIndex} handleTempFill={handleTempFill} />
          )}
        </div>

        <div>
          <div className="self-baseline min-w-[2ch] ml-2 text-base md:text-lg text-bold ">{textIndex > 0 ? textIndex : ""}</div>
        </div>
      </div>

      <button className="self-baseline mx-auto md:mx-4 bg-red-500 px-2 py-1 rounded-md cursor-pointer active:bg-red-600 wrap-normal"
        onClick={() => setFillIndex(-1)}>
        RESET
      </button>
    </div>
  )
}
export default Rating

type CircleItemProps = {
  index: number;
  fillIdx: number;
  tempIdx: number;
  handleFill: (index: number) => void;
  handleTempFill: (index: number) => void;
}
const CircleItem = ({ index, fillIdx, tempIdx, handleFill, handleTempFill }: CircleItemProps) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div
        className={`h-6 w-6 rounded-full cursor-pointer border-4 border-solid transition-colors duration-300 ${(fillIdx >= index) || (tempIdx >= index) ? "bg-amber-300 border-amber-300" : "border-black"}`}
        onClick={() => handleFill(index)}
        onMouseEnter={() => handleTempFill(index)}
        onTouchStart={() => handleTempFill(index)}
        onTouchEnd={() => handleFill(index)}
      >
      </div>
    </div>
  )
}