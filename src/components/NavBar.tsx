import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-cyan-600 text-amber-100 min-h-10 p-2">
      <ul className="flex flex-col md:flex-row items-center justify-evenly md:gap-4 flex-wrap md:text-lg lg:text-2xl font-semibold">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/accordion"}>Accordion</Link></li>
        <li><Link to={"/randomColorGen"}>RandomColorGen</Link></li>
        <li><Link to={"/imageSlider"}>ImageSlider</Link></li>
        <li><Link to={"/rating"}>Rating</Link></li>
        <li><Link to={"/loadMore"}>LoadMore</Link></li>
        <li><Link to={"/treeView"}>TreeView</Link></li>
        <li><Link to={"/qrCodeGen"}>QrCodeGen</Link></li>
        <li><Link to={"/switchTheme"}>SwitchTheme</Link></li>
        <li><Link to={"/numberGame"}>NumberGame</Link></li>
      </ul>
    </nav>
  )
}
export default NavBar