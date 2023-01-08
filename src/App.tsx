import "./App.css"
import google_play from "./assets/google-play-badge.png"
import app_store from "./assets/app-store-badge.svg"
import startingw360 from "./assets/starting/w360starting.jpg"
import startingw375 from "./assets/starting/w375starting.jpg"
import startingw414 from "./assets/starting/w414starting.jpg"
import startingw1366 from "./assets/starting/w1366starting.jpg"
import startingw1536 from "./assets/starting/w1920starting.jpg"
import startingw1920 from "./assets/starting/w1920starting.jpg"

function App() {
  return (
    <div className="flex flex-col font-poppins">
      <div className="bg-black/50">
        <img
          className="w-screen h-screen object-cover mix-blend-overlay"
          src={startingw1920}
          srcSet={
            startingw360 +
            " 360w,\n" +
            startingw375 +
            " 375w,\n" +
            startingw414 +
            " 414w,\n" +
            startingw1366 +
            " 1366w,\n" +
            startingw1536 +
            " 1536w,\n" +
            startingw1920 +
            " 1920w"
          }
          sizes="100vw"
          alt="Reading a tale to your kids"
        />
      </div>
      <div className="flex flex-col absolute bottom-0 w-full items-center mb-[4.0133vh] tablet:mb-[5.3511vh] desktop:mb-[7.8125vh]">
        <div className="text-center text-headline-s-600 tablet:text-headline-m-600 desktop:text-headline-l-600 text-gray1">
          Den Kindern vorlesen - egal wo du bist.
        </div>
        <div className="flex mt-[6.8561vh] tablet:mt-[6.6889vh] desktop:mt-[3.9062vh]">
          <img
            className="w-[35.2vw] tablet:w-[14.6666vw] desktop:w-[9.1666vw]"
            src={app_store}
            alt="App Store badge"
          />
          <img
            className="w-[40vw] tablet:w-[16.6666vw] desktop:w-[10.4166vw]"
            src={google_play}
            alt="Google Play badge"
          />
        </div>
        <div className="text-paragraph-s-500 tablet:text-paragraph-m-500 desktop:text-paragraph-l-500 text-gray1 mt-[2.8428vh] tablet:mt-[2.8428vh] desktop:mt-[1.6601vh]">
          * Produkt empfohlen für Kinder im Alter von 3-12 Jahren
        </div>
      </div>
    </div>
  )
}

export default App
