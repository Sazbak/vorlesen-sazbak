import "./App.css"
import starting_img from "./assets/starting_img.png"
import google_play from "./assets/google-play-badge.png"
import app_store from "./assets/app-store-badge.svg"

function App() {
  return (
    <div className="flex flex-col">
      <div className="font-poppins relative">
        <img
          className="w-screen h-screen object-cover"
          src={starting_img}
          alt="Reading a tale to your kids"
        />
        <div className="flex flex-col absolute bottom-0 w-full items-center mb-[5.555vw]">
          <div className="text-headline-l-600 text-gray1">
            Den Kindern vorlesen - egal wo du bist.
          </div>
          <div className="flex mt-[2.777vw]">
            <img
              className="w-[10.41vw]"
              src={app_store}
              alt="App Store badge"
            />
            <img
              className="w-[13vw]"
              src={google_play}
              alt="Google Play badge"
            />
          </div>
          <div className="text-paragraph-s-500 text-gray1 mt-[1.111vw]">
            * Produkt empfohlen für Kinder im Alter von 3-12 Jahren
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
