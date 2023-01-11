import holdingphonew360 from "./assets/holdingphone/w360holdingphone.png"
import holdingphonew579 from "./assets/holdingphone/w579holdingphone.png"
import holdingphonew753 from "./assets/holdingphone/w753holdingphone.png"
import holdingphonew813 from "./assets/holdingphone/w813holdingphone.png"

function HowToUse() {
  return (
    <>
      <div className="w-full bg-white">
        <div className=" mx-auto text-center text-paragraph-l-500 text-blue my-[10.6vw] tablet:my-[6.2vw] desktop:my-[5.5vw] w-[87.2vw] tablet:w-[85.7vw] desktop:w-[43.3vw]">
          Mit unserer benutzerfreundlichen und intuitiven Benutzeroberfläche
          musst du einfach nur folgendes tun:
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-full bg-blue overflow-hidden relative">
          <div className="flex flex-col items-center justify-center tablet:flex-row-reverse tablet:ml-[4.8vw] desktop:ml-[10.9vw]">
            <div className="flex flex-col w-[87.2vw] tablet:w-[41.2vw]">
              <div className="text-center tablet:text-left text-white text-headline-m-600 tablet:text-headline-l-600 mt-[10.6vw] ">
                Geschichte wählen
              </div>
              <div className="text-center tablet:text-left text-gray2 text-paragraph-m-500 desktop:text-paragraph-l-500">
                Öffne die App und wähle eine Geschichte aus unserem
                Geschichten-Katalog oder wähle dein eigenes Lieblingsbuch.
              </div>
            </div>
            <img
              className="ml-[8.3vw] tablet:ml-[0px] mt-[10.6vw] desktop:mt-[3.8vw] w-[100vw] tablet:w-[48.6vw] desktop:w-[34.2vw]"
              src={holdingphonew813}
              srcSet={
                holdingphonew360 +
                " 360w,\n" +
                holdingphonew579 +
                " 579w,\n" +
                holdingphonew753 +
                " 753w,\n" +
                holdingphonew813 +
                " 813w,\n"
              }
              sizes="(min-width: 375px) 100vw,
            (min-width: 900px) 48.6vw,
            (min-width: 1440px) 34.2vw,
            34.2vw"
              alt="Holding a phone in hand"
            />
          </div>
          <div className="rounded-[25px] bg-gray2 w-[219px] desktop:w-[18.9vw] h-[55px] overflow-hidden ml-[4.9vw] tablet:ml-[0px]">
            <div className="text-paragraph-s-500 desktop:text-paragraph-l-500 text-darkblue my-[18.5px] ml-[43px] mr-[16px]">
              Abenteuer Geschichten
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToUse
