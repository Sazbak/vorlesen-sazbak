import readingTale from "assets/howitworks/readingtale.mp4"
import bearwithcub from "assets/howitworks/bearwithcub.svg"

function HowItWorks() {
  return (
    <div className="bg-gray2 flex flex-col px-[24px] tablet:px-[138px] desktop:px-[264px] items-center w-screen overflow-x-hidden">
      <div className="text-headline-s-600 desktop:text-headline-l-600 text-darkblue text-center my-[40px]">
        See how it works
      </div>
      <div className="relative">
        <video className="mb-[40px]" src={readingTale} controls />
        <img
          className="absolute -bottom-[20px] -right-[50px] desktop:-bottom-[40px] desktop:-right-[100px] w-[132px] desktop:w-[240px]"
          src={bearwithcub}
          alt="Bear with his cub"
        />
      </div>
    </div>
  )
}

export default HowItWorks
