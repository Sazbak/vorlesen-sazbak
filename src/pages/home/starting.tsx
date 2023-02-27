import google_play from "assets/google-play-badge.png"
import app_store from "assets/app-store-badge.svg"
import logo from "assets/logo.svg"
import vorlesen_text from "assets/vorlesen_text.svg"

function Starting() {
  return (
    <div className="w-screen overflow-x-hidden">
      <div className="bg-black/50">
        <div className="w-screen h-screen bg-[url('assets/starting/starting.png')] mix-blend-overlay bg-cover bg-center bg-fixed bg-no-repeat" />
      </div>
      <div className="flex flex-col items-center w-full absolute top-[17px] desktop:top-[23px]">
        <div className="flex gap-x-[9.65px]">
          <img src={logo} alt="Vorlesen text" width="46" height="46" />
          <img src={vorlesen_text} alt="Vorlesen logo" width="97" height="16" />
        </div>
      </div>
      <div className="flex flex-col absolute bottom-0 items-center mb-[6.4vw] tablet:mb-[3.5vw] desktop:mb-[5.5vw] w-[87.2vw]  mx-auto left-0 right-0">
        <div className="text-center text-headline-s-600 tablet:text-headline-m-600 desktop:text-headline-l-600 text-gray1">
          Den Kindern vorlesen - egal wo du bist.
        </div>
        <div className="flex mt-[40px] max-h-[150px]">
          <img
            className="w-[132px] tablet:w-[14.6vw] desktop:w-[9.1vw] "
            src={app_store}
            alt="App Store badge"
          />
          <img
            className="w-[150px] tablet:w-[16.6vw] desktop:w-[10.4vw]"
            src={google_play}
            alt="Google Play badge"
          />
        </div>
        <div className="mx-[6.4vw] text-paragraph-s-500 text-gray1 mt-[16px]">
          * Produkt empfohlen für Kinder im Alter von 3-12 Jahren
        </div>
      </div>
    </div>
  )
}

export default Starting
