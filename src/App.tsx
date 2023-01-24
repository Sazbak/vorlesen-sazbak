import "./App.css"
import HowToUse from "./how-to-use"
import Starting from "./starting"
import Benefits from "./benefits"

function App() {
  return (
    <div className="flex flex-col font-poppins">
      <Starting />
      <HowToUse />
      <Benefits />
    </div>
  )
}

export default App
