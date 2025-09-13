import AppLayout from "./AppLayout";
import Accordion from "./components/Accordion";
import BreakLine from "./components/BreakLine";
import RandomColorGenerator from "./components/RandomColorGenerator";

const App = () => {
  return (
    <AppLayout>
      <div><Accordion /></div>
      <BreakLine />
      <div><RandomColorGenerator /></div>
      <BreakLine />
    </AppLayout>
  )
}

export default App;