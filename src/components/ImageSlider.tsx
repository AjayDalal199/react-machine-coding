import { useEffect, useState, type SyntheticEvent } from "react"

// sample object
// {
//   "id": "10",
//     "author": "Paul Jarvis",
//       "width": 2500,
//         "height": 1667,
//           "url": "https://unsplash.com/photos/6J--NXulQCs",
//             "download_url": "https://picsum.photos/id/10/2500/1667"
// }

type imageListType = {
  "id": string,
  "author": string,
  "width": number,
  "height": number,
  "url": string,
  "download_url": string,
}[]
const ImageSlider = () => {
  const [imageList, setImageList] = useState<imageListType>([]);
  const [currId, setCurrId] = useState<number>(0);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(1);
  // eslint-disable-next-line
  const [length, _setLength] = useState<number>(5);
  useEffect(function () {
    const fetchImages = async () => {
      const res = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=${length}`);
      const data = await res.json();
      setImageList(data);
      console.log(data);
    };
    fetchImages();
  }, [pageNum, length])

  function handleImageChange(action: string) {
    setLoaded(false);
    if (action === "dec") setCurrId(currId => (((currId - 1) % length) + length) % length)
    else if (action === "inc") setCurrId(currId => (currId + 1) % length)
    else throw new Error("invalid action!!")
  }

  function handleImageLoad(e: SyntheticEvent<HTMLImageElement, Event>) {
    e.currentTarget.classList.add("opacity-100");
    setLoaded(true);
  }
  return (
    <div className="w-full h-min border border-dashed border-red-400 flex flex-col gap-4 items-center p-2 md:p-4">
      <div>Image Slider</div>
      <div className="w-full border-2 border-solid border-amber-300 mx-auto relative h-auto">
        <div
          className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 rounded-full bg-amber-600/50 text-base md:text-xl h-8 w-8 md:h-14 md:w-14 font-medium md:font-bold flex items-center justify-center cursor-pointer"
          onClick={() => handleImageChange("dec")}>L</div>
        {!loaded && <div className="absolute z-10 text-xl md:text-5xl font-medium md:font-bold bg-gray-500/50 w-full h-full flex items-center justify-center"> Loading Image... </div>}
        <div className="w-full h-full">
          <img
            src={imageList[currId]?.download_url}
            alt="sample image"
            onLoad={(e) => handleImageLoad(e)}
            className="opacity-0 transition-opacity duration-300" />
        </div>
        <div
          className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 rounded-full bg-amber-600/50 text-base md:text-xl h-8 w-8 md:h-14 md:w-14 font-medium md:font-bold flex items-center justify-center cursor-pointer"
          onClick={() => handleImageChange("inc")}>R</div>
        <div>
          <div className="flex items-center justify-center gap-2 absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2">
            {Array.from({ length: length }).map((_, i) => <div key={i} className={`h-2 w-2 rounded-full  ${currId === i ? "bg-amber-400" : "bg-amber-200"}`}></div>)}
          </div>
        </div>
      </div>
      <button
        className="px-4 py-2 bg-orange-500 rounded-md cursor-pointer"
        onClick={() => { setPageNum(n => n + 1); setCurrId(0) }}>
        New ImagesSet
      </button>
      {/* <input type="number" id="length" min={1} max={10} value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        className="p-2"
      /> */}
    </div>
  )
}
export default ImageSlider