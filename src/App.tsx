import "./App.css"
import starting_img from "./assets/starting_img.png"

function App() {
  return (
    <div className="w-screen">
      <img
        className="w-full"
        src={starting_img}
        alt="Reading a tale to your kids"
      />
      <div className="flex flex-col absolute bottom-0">
        <div className="headline-l-400">
          Den Kindern vorlesen - egal wo du bist.
        </div>
      </div>
    </div>
  )
}

export default App
