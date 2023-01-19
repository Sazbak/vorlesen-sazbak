import holdingphonew360 from "./assets/holdingphone/w360holdingphone.png"
import holdingphonew579 from "./assets/holdingphone/w579holdingphone.png"
import holdingphonew753 from "./assets/holdingphone/w753holdingphone.png"
import holdingphonew813 from "./assets/holdingphone/w813holdingphone.png"
import holdingphonefullw375 from "./assets/holdingphone/w375holdingphonefull.png"
import holdingphonefullw729 from "./assets/holdingphone/w729holdingphonefull.png"
import holdingphonefullw899 from "./assets/holdingphone/w899holdingphonefull.png"
import holdingphonesidecropped from "./assets/holdingphone/holdingphonesidecropped.png"
import phone2 from "./assets/holdingphone/phone2.png"
import record from "./assets/holdingphone/record.png"
import phone3 from "./assets/holdingphone/phone3.png"
import postbear from "./assets/holdingphone/postbear.svg"
import kidsreadingtale from "./assets/holdingphone/kidsreadingtale.png"
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
        <div className="bg-blue overflow-hidden relative desktop:mx-[5.5vw] ">
          <div className="flex flex-col tablet:flex-row-reverse justify-center items-center tablet:items-start tablet:ml-[4.8vw] desktop:ml-[10.9vw] ">
            <div className="flex flex-col w-[87.2vw] tablet:w-[41.2vw] justify-start mt-[10.6vw] tablet:mt-[14.2vw] desktop:mt-[4.4vw]  desktop:ml-[2vw]">
              <div className="text-center tablet:text-left text-white text-headline-m-600 tablet:text-headline-l-600">
                Geschichte wählen
              </div>
              <div className="text-center tablet:text-left text-gray2 text-paragraph-m-500 desktop:text-paragraph-l-500 mb-[10.6vw] tablet:mb-[7.1vw] desktop:mb-[3.8vw] desktop:w-[24.3vw]">
                Öffne die App und wähle eine Geschichte aus unserem
                Geschichten-Katalog oder wähle dein eigenes Lieblingsbuch.
              </div>
              <div className="hidden tablet:block">
                <FakeButtonList />
              </div>
            </div>
            <picture className="mt-[3.8vw] tablet:mt-[4.4vw] desktop:mt-[3.8vw]">
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
                className="bg-cover tablet:bg-auto"
                media="(min-width: 375px)"
                src={holdingphonesidecropped}
              />
              <img
                className="object-contain w-screen tablet:w-auto desktop:h-full desktop:w-auto"
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
      <div className="flex flex-col mx-[6.4vw]">
        <div className="text-headline-m-600 text-darkblue text-center mt-[1.5vw] tablet:mt-[0px]">
          Next, choose your listener
        </div>
        <div className="text-paragraph-m-500 text-darkblue text-center mt-[8px]">
          Select one or more children you would like to read the story to.
        </div>
        <img
          className="mt-[6.4vw] w-[33.3vw]"
          src={phone2}
          alt="Phone screen"
        />
        <img
          className="mt-[6.4vw] mx-auto"
          src={record}
          alt="Record icon"
          width="72"
          height="72"
        />
      </div>
      <div className="text-headline-m-600 text-darkblue mt-[6.4vw] text-center">
        And hit record
      </div>
      <div className="text-paragraph-m-500 text-darkblue mt-[2.1vw] text-center ">
        Start reading out loud the story.
      </div>
      <img className="mt-[6.4vw] mx-[10vw]" src={phone3} alt="Phone screen" />
      <div className="text-headline-m-600 text-darkblue text-center mt-[14.9vw]">
        Get notified
      </div>
      <div className="text-paragraph-m-500 text-darkblue text-center mt-[2.1vw] mx-[3.4vw]">
        Whenever a story is sent to your children by a family member, you will
        get an email notification. <span className="text-blue">And so....</span>
      </div>
      <img
        className="mt-[6.4vw] w-[194px] h-[204px] mx-auto mb-[10.6vw]"
        src={postbear}
        alt="Bear holding envelope"
      />
      <div className="bg-darkblue">
        <div className="text-headline-m-600 text-white text-center mt-[10.6vw] mx-[6.4vw]">
          Your kids start to listen
        </div>
        <div className="text-paragraph-m-500 text-white text-center mx-[6.4vw] mt-[2.1vw]">
          the story you or their grandpa has just recorded for them.
        </div>
        <img
          className="mx-[2.8vw] mt-[6.4vw]"
          src={kidsreadingtale}
          alt="Kids reading tale"
        />
      </div>
    </>
  )
}

export default HowToUse
