import { useEffect, useState } from "react"

// sample object
// {
//   "id": "10",
//     "author": "Paul Jarvis",
//       "width": 2500,
//         "height": 1667,
//           "url": "https://unsplash.com/photos/6J--NXulQCs",
//             "download_url": "https://picsum.photos/id/10/2500/1667"
// }

type LoadMoreButtonProps = {
  url: string,
  page: number,
  limit: number,
}

// url: "https://picsum.photos/v2/list"

// TODO: Only new images should load, old images must not be loaded again.
// * LoadMore is working as required on basic level.

const LoadMore = ({ url, page, limit }: LoadMoreButtonProps) => {
  const [imagesList, setImagesList] = useState([]);
  const [numLimit, setNumLimit] = useState<number>(limit);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  function handleLoadMorePhotos() {
    if (imagesList.length < 50) {
      if (numLimit === 1) setNumLimit(n => n + 9);
      else setNumLimit(n => n + 10);
    }
  }

  function handleReset() {
    if (numLimit >= 0) setNumLimit(1);
  }

  useEffect(() => {
    async function fetchImages(url: string) {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}?page=${page}&limit=${numLimit}`);
        const data = await res.json();
        console.log(data);
        setImagesList(data);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) setErrorMsg(error.message);
        else setErrorMsg(String(error));
      }
    }
    fetchImages(url)
  }, [url, page, numLimit])
  return (
    <div className="border border-dashed border-amber-400 w-full h-full flex flex-col gap-4 items-center justify-center p-4">
      <div>Load More</div>
      {errorMsg && <div>{errorMsg}</div>}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-min gap-2 md:gap-4 p-2 md:p-4">
        {isLoading && <div>Loading All {imagesList.length} Images...</div>}
        {imagesList && imagesList.length > 0 && imagesList.map((img: ImgType, i: number) =>
          <ImageItem key={img.id} num={i + 1} downUrl={img.download_url} author={img.author} />
        )}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-evenly items-center gap-2">
        <div className="underline">Image Count: {imagesList.length}</div>
        <div className="flex flex-row gap-2">
          <button
            className={`px-4 py-2 rounded-md font-bold ${imagesList.length < 50 ? (isLoading ? "cursor-not-allowed bg-gray-500" : "cursor-pointer bg-emerald-700") : "cursor-not-allowed bg-gray-700"}`}
            onClick={handleLoadMorePhotos}
          >
            {imagesList.length < 50 ? (isLoading ? "Loading...." : "Load More Photos") : "NO MORE IMAGES LEFT"}
          </button>
          <button className="px-4 py-2 rounded-md font-bold bg-red-700 cursor-pointer" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}

type ImgType = {
  id: number,
  download_url: string,
  author: string,
}
type ImageItemProps = {
  downUrl: string,
  author: string,
  num: number,
}

const ImageItem = ({ downUrl, author, num }: ImageItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center relative border-4 border-solid rounded-xl overflow-hidden ${isLoading ? "border-red-700" : "border-emerald-700"}`}>
      <div
        className={`absolute inset-0 h-6 w-6 rounded-full font-bold flex items-center justify-center ${isLoading ? "bg-red-500/70" : "bg-yellow-400/70"}`}>{num}</div>
      {isLoading && <div className="absolute inset-0 w-full h-full flex items-center justify-center">Loading Product.....</div>}
      {<div className="w-full h-full flex flex-col items-center gap-2">
        <img
          src={downUrl} alt={`clicked by ${author}`}
          className="w-full aspect-square object-cover"
          onLoad={() => setIsLoading(false)} />
        <div className="font-semibold flex flex-col text-center md:mb-2">
          <span>Photo Credits</span>
          <span>{author}</span>
        </div>
      </div>}
    </div>
  )
}

export default LoadMore