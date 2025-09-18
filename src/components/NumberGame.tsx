import { useEffect, useMemo, useState } from "react"

const NumberGame = () => {
  const winList: (string | number)[] = useMemo(() => Array.from({ length: 9 }, (_, i) => i !== 8 ? i + 1 : ""), []);
  const [numList, setNumList] = useState<(number | string)[]>([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    for (let i = 0; i < 9; i++) {
      if (numList[i] !== winList[i]) return;
    }
    setWin(true);
  }, [numList, winList])

  function handleClick(currNum: (string | number), id: number) {
    // check if left, right, up, down we are near to empty Box
    const currNumCol = id % 3;
    const left = numList[id - 1];
    const right = numList[id + 1];
    const up = numList[id - 3];
    const down = numList[id + 3];
    // new copy of numList
    const newNumList = [...numList];
    if (currNumCol - 1 >= 0 && left === "") {
      newNumList[id - 1] = currNum;
      newNumList[id] = "";
      setNumList([...newNumList]);
    } else if (currNumCol + 1 < 3 && right === "") {
      newNumList[id + 1] = currNum;
      newNumList[id] = "";
      setNumList([...newNumList]);
    } else if (up === "") {
      newNumList[id - 3] = currNum;
      newNumList[id] = "";
      setNumList([...newNumList]);
    } else if (down === "") {
      newNumList[id + 3] = currNum;
      newNumList[id] = "";
      setNumList([...newNumList]);
    }
  }

  function handleShuffle() {
    const shuffledArray = [];
    const choiceList = [...winList];
    for (let i = 0; i < 9; i++) {
      const randomIdx = Math.floor(Math.random() * choiceList.length);
      shuffledArray[i] = choiceList[randomIdx];
      choiceList.splice(randomIdx, 1);
    }
    setNumList(shuffledArray);
    setWin(false);
  }

  return (
    <div className="p-2 flex flex-col gap-4 items-center">
      <div className="text-2xl">Number Game</div>
      <div className="w-full md:w-3/5 lg:2/5">
        <div className="grid grid-cols-3 gap-2 bg-green-700/50 p-2 rounded-lg relative">
          {win && <div className="aspect-square col-span-3 flex flex-col md:gap-4 justify-center items-center text-2xl uppercase font-bold text-center absolute inset-0 bg-green-700/50">
            <span>You have won!!</span>
            <span className="text-3xl">🎉🎉🎉</span>
          </div>}
          {numList.map((num, i) => <NumBox key={`${i}-${num}`} id={i} num={num} handleClick={handleClick} />)}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-red-600 text-gray-50 rounded-xl cursor-pointer"
          onClick={handleShuffle}
        >Shuffle</button>
      </div>
    </div>
  )
}

type NumBoxProps = {
  num: string | number,
  id: number,
  handleClick: (num: (string | number), id: number) => void
}

const NumBox = ({ num, id, handleClick }: NumBoxProps) => {
  return (
    <div
      className={`text-gray-100 font-bold aspect-square text-2xl flex items-center justify-center rounded-xl ${num ? "bg-green-600 cursor-pointer" : "bg-green-600/10"}`}
      onClick={() => handleClick(num, id)}
    >
      {num}
    </div>
  )
}
export default NumberGame