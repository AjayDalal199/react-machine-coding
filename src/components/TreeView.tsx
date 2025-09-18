import { useState } from "react";
import folderData from "./folderData.ts";

const TreeView = () => {

  return (
    <div className="w-full h-min p-2 flex flex-col gap-2 border border-dashed border-cyan-500 items-center">
      <div>TreeView</div>
      <div className="w-full md:w-3/5 h-min p-2 bg-cyan-600  flex flex-col gap-2">
        {folderData.map((data, i) => <Parent key={i} data={data} />)}
      </div>
    </div>
  )
}

type FolderDataType = {
  id: number,
  label: string,
  icon?: string,
  path?: string,
  children?: FolderDataType[]
}

type ParentProps = {
  data: FolderDataType
}

const Parent = ({ data }: ParentProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between items-center p-2 border-b-2 border-solid border-amber-400 rounded-md">
        <div className="font-bold">{data.label}</div>
        {data?.children && (
          <button
            onClick={handleExpand}
            className="font-bold text-xl cursor-pointer rounded-full bg-amber-100/50 text-gray-200 flex justify-center items-center h-4 w-4"
          >
            <span>
              {isExpanded ? "-" : "+"}
            </span>
          </button>
        )}
      </div>
      {data?.children && isExpanded && (
        <div className="ml-6">
          {data.children.map((child, i) => <Parent key={i} data={child} />)}
        </div>
      )}
    </div>
  )
}
export default TreeView