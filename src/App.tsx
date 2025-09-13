import AppLayout from "./AppLayout";
import Accordion from "./components/Accordion";
import BreakLine from "./components/BreakLine";
import RandomColorGenerator from "./components/RandomColorGenerator";
import Rating from "./components/Rating";

const App = () => {
  return (
    <AppLayout>
      <div><Accordion /></div>
      <BreakLine />
      <div><RandomColorGenerator /></div>
      <BreakLine />
      <div><Rating /></div>
      <BreakLine />
    </AppLayout>
  )
}

export default App;