import bearmic from "assets/benefits/bear-mic.svg"
import beartextbook from "assets/benefits/bear-textbook.svg"
import bearholdingpic from "assets/benefits/bear-holding-pic.svg"
import bearfamily from "assets/benefits/bear-family.svg"

function Benefits() {
  return (
    <div className="bg-gray2 py-[10.6vw] text-darkblue text-center tablet:text-start w-screen overflow-x-hidden">
      <div className="flex flex-col max-w-[87.2vw] items-center mx-auto">
        <div className="text-headline-m-600 tablet:text-headline-l-600">
          Benefits
        </div>
        <div className="flex flex-col mt-[3.5vw] items-center">
          <div className="flex flex-col tablet:flex-row items-center justify-center tablet:w-[85.7vw]">
            <div className="flex flex-col items-center justify-center tablet:mr-[3.5vw] tablet:w-[370px] desktop:w-[290px]">
              <div className="tablet:flex h-[203px] items-end mt-[11.9vw] tablet:mt-0">
                <img
                  className="w-[240px]"
                  src={bearmic}
                  alt="Bear holding mic"
                />
              </div>
              <div className="text-headline-s-600 mt-[2.1vw] w-full">
                Ein tool fuer das 21. Jahrhundert
              </div>
              <div className="text-paragraph-s-500 mt-[2.1vw] w-full">
                Digitale Medien werden gezielt und kontrolliert zur Förderung
                von Lesekompetenz und als Tool zum Wissenserwerb eingesetzt.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center tablet:w-[370px] desktop:w-[290px]">
              <div className="tablet:flex h-[203px] items-end mt-[11.9vw] tablet:mt-0">
                <img
                  className="w-[240px]"
                  src={beartextbook}
                  alt="Bear picking up textbook"
                />
              </div>
              <div className="text-headline-s-600 mt-[2.1vw] w-full">
                Leselust trainieren
              </div>
              <div className="text-paragraph-s-500   mt-[2.1vw] w-full">
                Die Leselust und Lesekompetenz von Kindern wird entwickelt,
                indem ihnen ein besonderes “Texterlebnis“ über den Weg des
                Zuhörens geboten wird.
              </div>
            </div>
          </div>
          <div className="flex flex-col tablet:flex-row items-center justify-center tablet:mt-[5.5vw] tablet:w-[85.7vw]">
            <div className="flex flex-col items-center justify-center tablet:mr-[3.5vw] tablet:w-[370px] desktop:w-[290px]">
              <div className="tablet:flex h-[164px] items-end mt-[11.9vw] tablet:mt-0">
                <img
                  className="w-[133px]"
                  src={bearholdingpic}
                  alt="Bear holding up pic"
                />
              </div>
              <div className="text-headline-s-600 mt-[2.1vw] w-full">
                Personalisierte Aneignung an Wissen
              </div>
              <div className="text-paragraph-s-500 mt-[2.1vw] w-full">
                Jungen Menschen wird niederschwellig, alters- und
                interessensgerecht der Zugang zu Wissen und zur Reflexion über
                Inhalte geboten.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center tablet:w-[370px] desktop:w-[290px]">
              <div className="tablet:flex h-[164px] items-end mt-[11.9vw] tablet:mt-0">
                <img className="w-[272px]" src={bearfamily} alt="Bear family" />
              </div>
              <div className="text-headline-s-600 mt-[2.1vw] w-full">
                Intergenerationelle Verbindungen stärken
              </div>
              <div className="text-paragraph-s-500 mt-[2.1vw] w-full">
                Digitalisierung kann als Mittel genutzt werden, um die Empathie
                und Bindung zwischen Menschen und die Verbindung zwischen
                Generationen zu fördern („Oma liest ihrem Enkel digital vor.“).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
