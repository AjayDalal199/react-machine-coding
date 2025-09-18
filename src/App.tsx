import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import NavBar from "./components/NavBar";
import AppLayout from "./AppLayout";

const Home = lazy(() => import("./components/Home"))
const Accordion = lazy(() => import("./components/Accordion"));
const ImageSlider = lazy(() => import("./components/ImageSlider"));
const LoadMore = lazy(() => import("./components/LoadMore"));
const QRCodeGen = lazy(() => import("./components/QRCodeGen"));
const Rating = lazy(() => import("./components/Rating"));
const SwitchTheme = lazy(() => import("./components/SwitchTheme"));
const TreeView = lazy(() => import("./components/TreeView"));
const RandomColorGen = lazy(() => import("./components/RandomColorGenerator"));

// url: "https://picsum.photos/v2/list"

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/loadMore" element={<LoadMore url="https://picsum.photos/v2/list" page={1} limit={10} />} />
          <Route path="/randomColorGen" element={<RandomColorGen />} />
          <Route path="/qrCodeGen" element={<QRCodeGen />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/switchTheme" element={<SwitchTheme />} />
          <Route path="/treeView" element={<TreeView />} />
        </Routes>
      </AppLayout>

    </BrowserRouter>
  )
}

export default App;