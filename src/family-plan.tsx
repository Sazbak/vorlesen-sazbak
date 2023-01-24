import startingw360 from "./assets/starting/w360starting.jpg"
import startingw842 from "./assets/starting/w842starting.jpg"
import startingw1171 from "./assets/starting/w1171starting.jpg"
import startingw1438 from "./assets/starting/w1438starting.jpg"
import startingw1811 from "./assets/starting/w1811starting.jpg"
import startingw1920 from "./assets/starting/w1920starting.jpg"
import stamp from "./assets/familyplan/stamp.svg"

function FamilyPlan() {
  return (
    <div className="relative">
      <div className="bg-black/50">
        <img
          className="w-screen h-screen object-cover mix-blend-overlay"
          src={startingw1920}
          srcSet={
            startingw360 +
            " 360w,\n" +
            startingw842 +
            " 842w,\n" +
            startingw1171 +
            " 1171w,\n" +
            startingw1438 +
            " 1438w,\n" +
            startingw1811 +
            " 1811w,\n" +
            startingw1920 +
            " 1920w"
          }
          sizes="100vw"
          alt="Reading a tale to your kids"
        />
      </div>
      <div className="flex flex-col absolute w-[327px] mx-auto my-auto left-0 right-0 top-0 bottom-0 justify-center ">
        <div className="text-headline-m-600 text-gray2 text-center tablet:text-headline-l-600">
          Family plan
        </div>
        <div className="text-paragraph-m-500 text-white text-center mt-[8px]">
          2 Vorleser, unlimitierte Anzahl von Kindern. Dein Abo is natürlich
          jederzeit kündbar.
        </div>
        <div className="bg-blue rounded-[6px] h-[40px] mt-[64px] flex items-center justify-center relative">
          <div className="text-paragraph-m-500 text-white text-center">
            39,99 € pro Jahr - 7 Tage gratis
          </div>
          <img
            className="absolute -right-[35px] -top-[40px]"
            src={stamp}
            alt="Discount stamp"
          />
        </div>
        <div className="bg-white rounded-[6px] h-[40px] mt-[16px] flex items-center justify-center">
          <div className="text-paragraph-m-500 text-blue text-center">
            4,99 € im Monat - 7 Tage gratis
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyPlan
