import stamp from "assets/familyplan/stamp.svg"

function FamilyPlan() {
  return (
    <div className="relative text-center w-screen overflow-x-hidden">
      <div className="bg-black/50">
        <div className="w-screen h-screen bg-[url('assets/starting/starting.png')] mix-blend-overlay bg-cover bg-center bg-no-repeat" />
      </div>
      <div className="flex flex-col absolute w-[327px] mx-auto my-auto left-0 right-0 top-0 bottom-0 justify-center ">
        <div className="text-headline-m-600 text-gray2 tablet:text-headline-l-600">
          Family plan
        </div>
        <div className="text-paragraph-m-500 text-white  mt-[8px]">
          2 Vorleser, unlimitierte Anzahl von Kindern. Dein Abo is natürlich
          jederzeit kündbar.
        </div>
        <div className="bg-blue rounded-[6px] h-[40px] mt-[64px] flex items-center justify-center relative">
          <div className="text-paragraph-m-500 text-white">
            39,99 € pro Jahr - 7 Tage gratis
          </div>
          <img
            className="absolute -right-[35px] -top-[40px]"
            src={stamp}
            alt="Discount stamp"
          />
        </div>
        <div className="bg-white rounded-[6px] h-[40px] mt-[16px] flex items-center justify-center">
          <div className="text-paragraph-m-500 text-blue">
            4,99 € im Monat - 7 Tage gratis
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyPlan
