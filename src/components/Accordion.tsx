import { useState } from "react"
import data from "../data";

export default function Accordion() {
  const [selectedID, setSelectedID] = useState<number[]>([]);
  const [isMultiSelect, toggleMultiSelect] = useState<boolean>(false);

  function handleSelect(id: number) {
    // if the element is already selected then unselect it
    if (selectedID.find(currID => currID === id)) {
      const newSelectedArr = selectedID.filter(currID => currID !== id);
      // check if multiSelect allowed
      const finalArr = isMultiSelect ? newSelectedArr : [];
      setSelectedID([...finalArr]);
    } else {
      // check if multiSelect allowed or not
      const finalArr = isMultiSelect ? [...selectedID, id] : [id];
      setSelectedID(finalArr);
    }
  }

  const themeColor = isMultiSelect ? "bg-cyan-700" : "bg-green-700";

  return (
    <div className="flex flex-col p-2 border border-dashed border-amber-500">
      <div>Accordion</div>
      {data && data.length > 0 ? (
        <div className="flex flex-col gap-2 lg:gap-8 justify-center items-center">
          <button className={`py-2 px-4 rounded-lg font-semibold ${themeColor} transition-color duration-300`} onClick={() => toggleMultiSelect(!isMultiSelect)}>
            {isMultiSelect ? "Disable" : "Enable"} Mutli Select
          </button>
          {data.map((d, i) => <Item key={i} ques={d.ques} ans={d.ans} id={d.id} selectedID={selectedID} handleSelect={handleSelect} themeColor={themeColor} />
          )}
        </div>
      ) : (<div>No Data to Show!! </div>)}
    </div>
  )
}

type ItemProp = {
  ques: string;
  ans: string;
  id: number;
  selectedID: number[];
  themeColor: string;
  handleSelect: (id: number) => void;
}

const Item = ({ ques, ans, id, themeColor, selectedID, handleSelect }: ItemProp) => {
  const isSelected = () => !!selectedID.find(currID => currID === id);

  return (
    <div className="flex flex-col gap-2 w-full">
      <button
        className={`${themeColor} flex justify-between items-center p-4 cursor-pointer rounded-lg transition-color`}
        style={{ transitionDuration: `${300 + id * 500}ms` }}
        onClick={() => handleSelect(id)}>
        <div className="font-bold text-md lg:text-xl">{ques}</div>
        <div className="font-bold text-lg lg:text-2xl">{isSelected() ? "-" : "+"}</div>
      </button>
      <div
        className={`${themeColor} transition-color text-base lg:text-lg p-4 rounded-lg ${isSelected() ? "block" : "hidden"} `}
        style={{ transitionDuration: `${300 + id * 500}ms` }}
      >
        {ans}</div>
    </div>
  )
}