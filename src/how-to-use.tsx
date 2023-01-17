import holdingphonew360 from "./assets/holdingphone/w360holdingphone.png"
import holdingphonew579 from "./assets/holdingphone/w579holdingphone.png"
import holdingphonew753 from "./assets/holdingphone/w753holdingphone.png"
import holdingphonew813 from "./assets/holdingphone/w813holdingphone.png"
import holdingphonefullw375 from "./assets/holdingphone/w375holdingphonefull.png"
import holdingphonefullw729 from "./assets/holdingphone/w729holdingphonefull.png"
import holdingphonefullw899 from "./assets/holdingphone/w899holdingphonefull.png"
import holdingphonesidecropped from "./assets/holdingphone/holdingphonesidecropped.png"
import FakeButtonList from "./fake-button-list"

function HowToUse() {
  return (
    <>
      <div className="w-full bg-white">
        <div className=" mx-auto text-center text-paragraph-l-500 text-blue my-[10.6vw] tablet:my-[6.2vw] desktop:my-[5.5vw] w-[87.2vw] tablet:w-[85.7vw] desktop:w-[43.3vw]">
          Mit unserer benutzerfreundlichen und intuitiven Benutzeroberfläche
          musst du einfach nur folgendes tun:
        </div>
      </div>
      <div className="w-full">
        <div className="w-full bg-blue overflow-hidden relative">
          <div className="flex flex-col tablet:flex-row-reverse justify-center items-center tablet:items-start tablet:ml-[4.8vw] desktop:ml-[10.9vw] ">
            <div className="flex flex-col w-[87.2vw] tablet:w-[41.2vw] justify-start mt-[10.6vw] tablet:mt-[14.2vw] desktop:mt-[4.4vw]">
              <div className="text-center tablet:text-left text-white text-headline-m-600 tablet:text-headline-l-600">
                Geschichte wählen
              </div>
              <div className="text-center tablet:text-left text-gray2 text-paragraph-m-500 desktop:text-paragraph-l-500 mb-[10.6vw] tablet:mb-[7.1vw] desktop:mb-[3.8vw]">
                Öffne die App und wähle eine Geschichte aus unserem
                Geschichten-Katalog oder wähle dein eigenes Lieblingsbuch.
              </div>
              <div className="hidden tablet:block">
                <FakeButtonList />
              </div>
            </div>
            <picture className="w-full tablet:w-auto">
              <source
                media="(min-width: 900px)"
                srcSet={
                  holdingphonew360 +
                  " 360w,\n" +
                  holdingphonew579 +
                  " 579w,\n" +
                  holdingphonew753 +
                  " 753w,\n" +
                  holdingphonew813 +
                  " 813w"
                }
                sizes="
                (min-width: 900px) 48.6vw,
                (min-width: 1440px) 34.2vw,
                34.2vw"
              />
              <source
                media="(min-width: 637px)"
                srcSet={
                  holdingphonefullw375 +
                  " 375w,\n" +
                  holdingphonefullw729 +
                  " 729w,\n" +
                  holdingphonefullw899 +
                  " 899w"
                }
              />
              <source
                className="bg-cover w-full tablet:w-full tablet:bg-auto"
                media="(min-width: 375px)"
                src={holdingphonesidecropped}
              />
              <img
                className="bg-cover w-full tablet:w-full tablet:bg-auto"
                src={holdingphonesidecropped}
                alt="Holding a phone in hand"
              />
            </picture>
            <div className="tablet:hidden absolute bottom-0 mb-[10vw]">
              <FakeButtonList />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToUse
