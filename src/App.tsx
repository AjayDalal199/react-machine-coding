import AppLayout from "./AppLayout";
import Accordion from "./components/Accordion";
// import BreakLine from "./components/BreakLine";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import RandomColorGenerator from "./components/RandomColorGenerator";
import Rating from "./components/Rating";

const App = () => {
  return (
    <AppLayout>
      <div><Accordion /></div>
      {/* <BreakLine /> */}
      <div><RandomColorGenerator /></div>
      {/* <BreakLine /> */}
      <div><Rating /></div>
      {/* <BreakLine /> */}
      <div><ImageSlider /></div>
      {/* <BreakLine /> */}
      {/* url: "https://picsum.photos/v2/list" */}
      <div><LoadMore url="https://picsum.photos/v2/list" page={2} limit={10} /></div>
      {/* <BreakLine /> */}
    </AppLayout>
  )
}

export default App;