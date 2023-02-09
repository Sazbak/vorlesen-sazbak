import "./App.css"
import HowToUse from "./how-to-use"
import Starting from "./starting"
import Benefits from "./benefits"
import FamilyPlan from "./family-plan"
import Footer from "../../components/footer"
import HowItWorks from "./how-it-works"

function App() {
  return (
    <div className="flex flex-col font-poppins">
      <Starting />
      <HowItWorks />
      <HowToUse />
      <Benefits />
      <FamilyPlan />
      <Footer />
    </div>
  )
}

export default App
