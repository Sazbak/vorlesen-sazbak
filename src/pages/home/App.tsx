import "./App.css"
import HowToUse from "./how-to-use"
import Starting from "./starting"
import Benefits from "./benefits"
import FamilyPlan from "./family-plan"
import Footer from "../../components/footer"
import HowItWorks from "./how-it-works"
import CarouselSection from "./carousel-section"

function App() {
  return (
    <div className="font-poppins ">
      <Starting />
      <HowItWorks />
      <HowToUse />
      <Benefits />
      <CarouselSection />
      <FamilyPlan />
      <Footer />
    </div>
  )
}

export default App
