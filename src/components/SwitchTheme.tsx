import { useState } from "react";

type ThemeArrayType = {
  id: number,
  name: string,
  class: string,
}

const themeArray: ThemeArrayType[] = [
  {
    id: 0,
    name: "light",
    class: "theme-light",
  },
  {
    id: 1,
    name: "dark",
    class: "theme-dark",
  }
]

const SwitchTheme = () => {
  const [themeID, setThemeID] = useState<number>(0);
  function handleChangeTheme() {
    setThemeID(id => (id + 1) % themeArray.length);
  }
  return (
    <div className="border border-dashed border-amber-300 p-2 min-h-100 flex">
      <div
        className={`flex flex-col justify-center items-center grow gap-4 ${themeArray[themeID].class} bg-[var(--color-bg)] text-[var(--color-text)] [&_button]:text-[var(--color-button-text)] [&_button]:bg-[var(--color-button-bg)]`}
      >
        <h1 className="md:text-3xl">Hello World!</h1>
        <button onClick={handleChangeTheme} className="p-2 cursor-pointer">Change Theme</button>
        <h2>Current theme is: {themeArray[themeID].name.toUpperCase()}</h2>
      </div>
    </div>
  )
}
export default SwitchTheme