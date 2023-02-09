import holdingphone from "assets/howtouse/holdingphone.png"
import holdingphonefull from "assets/howtouse/holdingphonefull.png"
import holdingphonesidecropped from "assets/howtouse/holdingphonesidecropped.png"
import phone2 from "assets/howtouse/phone2.png"
import record from "assets/howtouse/record.png"
import phone3 from "assets/howtouse/phone3.png"
import postbear from "assets/howtouse/postbear.svg"
import kidsreadingtale from "assets/howtouse/kidsreadingtale.png"
import FakeButtonList from "pages/home/fake-button-list"
import { useEffect } from "react"

function HowToUse() {
  useEffect(() => {
    const animatedCollection = document.getElementsByClassName("animated")

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px",
      threshold: 0
    }

    function handleIntersect(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const classList = entry.target.classList
          if (classList.contains("delayed-animation")) {
            classList.add("opacity-0")
            setTimeout(() => classList.add("animate-fadeInUp"), 1000)
          } else {
            classList.add("animate-fadeInUp")
          }

          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    for (let i = 0; i < animatedCollection.length; i++) {
      observer.observe(animatedCollection[i])
    }
  })

  return (
    <>
      <div className="w-full bg-white">
        <div className="mx-auto text-center text-paragraph-l-500 text-blue my-[40px] tablet:my-[56px] desktop:my-[80px] w-[87.2vw] tablet:w-[85.7vw] desktop:w-[43.3vw] ">
          Mit unserer benutzerfreundlichen und intuitiven Benutzeroberfläche
          musst du einfach nur folgendes tun:
        </div>
      </div>
      <div className="w-full">
        <div className="bg-blue relative desktop:mx-[80px] tablet:h-[604px] desktop:h-[700px] flex justify-center">
          <div className="flex flex-col tablet:flex-row-reverse justify-center items-end  h-full">
            <div className="flex flex-col mt-[40px] tablet:mt-[0px] desktop:mt-[40px] desktop:ml-[2vw] mx-[14px] tablet:mx-[0px] tablet:w-[400px] desktop:w-[500px] self-center">
              <div className="text-center tablet:text-left text-white text-headline-m-600 tablet:text-headline-l-600 animated relative delayed-animation">
                Geschichte wählen
              </div>
              <div className="text-center tablet:text-left text-gray2 text-paragraph-m-500 desktop:text-paragraph-l-500 mb-[40px] tablet:mb-[64px] desktop:mb-[56px] desktop:w-[24.3vw] animated relative delayed-animation">
                Open the app, and select a story from our own catalog, or add
                your own.
              </div>
              <div className="hidden tablet:block animated relative">
                <FakeButtonList />
              </div>
            </div>
            <picture className="animated relative">
              <source media="(min-width: 900px)" srcSet={holdingphone} />
              <source media="(min-width: 637px)" srcSet={holdingphonefull} />
              <source
                className="bg-cover tablet:bg-auto"
                media="(min-width: 375px)"
                src={holdingphonesidecropped}
              />
              <img
                className="w-screen min-[637px]:w-auto"
                src={holdingphonesidecropped}
                alt="Holding a phone in hand"
              />
            </picture>
            <div className="absolute bottom-0 tablet:hidden left-0 right-0 flex justify-center mx-[14px]">
              <div className="relative animated">
                <FakeButtonList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col tablet:flex-row items-center tablet:justify-center">
        <div className="flex flex-col max-w-[87.2vw] tablet:max-w-[41.1vw] desktop:max-w-[24.3vw] desktop:mr-[6.6vw]">
          <div className="text-headline-m-600 tablet:text-headline-l-600 text-darkblue text-center tablet:text-left mt-[1.5vw] tablet:mt-[0px]">
            Next, choose your listener
          </div>
          <div className="text-paragraph-m-500 text-darkblue text-center tablet:text-left mt-[8px]">
            Select one or more children you would like to read the story to.
          </div>
        </div>
        <img
          className="mt-[6.4vw] tablet:w-[300px] mx-[10vw] tablet:mx-[0px] relative desktop:bottom-[9vw]"
          src={phone2}
          alt="Phone screen"
        />
      </div>
      <div className="flex flex-col tablet:flex-row-reverse mt-[56px] tablet:justify-center">
        <div className="flex flex-col items-center tablet:items-start tablet:justify-center">
          <img src={record} alt="Record icon" width="72" height="72" />
          <div className="text-headline-m-600 tablet:text-headline-l-600 text-darkblue tablet:mt-[24px] text-center">
            And hit record
          </div>
          <div className="text-paragraph-m-500 text-darkblue mt-[2.1vw] text-center">
            Start reading out loud the story.
          </div>
        </div>
        <img
          className="mx-[10vw] tablet:ml-[11vw] tablet:mr-[7.4vw] mt-[6.4vw] tablet:mt-[0px]"
          src={phone3}
          alt="Phone screen"
        />
      </div>
      <div className="flex flex-col tablet:flex-row tablet:justify-center items-center">
        <div className="flex flex-col tablet:max-w-[38.7vw] tablet:mr-[14.8vw] desktop:max-w-[24.3vw] desktop:mr-[7vw]">
          <div className="text-headline-m-600 text-darkblue text-center tablet:text-left mt-[14.9vw] tablet:mt-0">
            Get notified
          </div>
          <div className="text-paragraph-m-500 text-darkblue text-center mt-[2.1vw] tablet:text-left">
            Whenever a story is sent to your children by a family member, you
            will get an email notification.
            <span className="text-blue"> And so....</span>
          </div>
        </div>
        <img
          className="mt-[6.4vw] w-[194px] h-[204px] mb-[10.6vw]"
          src={postbear}
          alt="Bear holding envelope"
        />
      </div>
      <div className="bg-darkblue flex flex-col items-center pb-[10.6vw]">
        <div className="text-headline-m-600 text-white text-center mt-[10.6vw] mx-[6.4vw] tablet:mt-[7.1vw] desktop:mt-[64px]">
          Your kids start to listen
        </div>
        <div className="text-paragraph-m-500 text-white text-center mx-[6.4vw] mt-[8px]">
          the story you or their grandpa has just recorded for them.
        </div>
        <img
          className="mt-[6.4vw] tablet:mt-[4.4vw] w-[354px] tablet:w-[777px]"
          src={kidsreadingtale}
          alt="Kids reading tale"
        />
      </div>
    </>
  )
}

export default HowToUse
