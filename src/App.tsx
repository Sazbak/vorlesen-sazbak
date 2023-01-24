import "./App.css"
import HowToUse from "./how-to-use"
import Starting from "./starting"
import Benefits from "./benefits"
import FamilyPlan from "./family-plan"

function App() {
  return (
    <div className="flex flex-col font-poppins">
      <Starting />
      <HowToUse />
      <Benefits />
      <FamilyPlan />
    </div>
  )
}

export default App
