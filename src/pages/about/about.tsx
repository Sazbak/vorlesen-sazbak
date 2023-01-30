import logo from "assets/logo.svg"
import TeamMemberList from "./team-member-list"
import Footer from "components/footer"
import Header from "components/header"

function About() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="bg-gray1 w-full flex justify-center">
        <div className="flex flex-col w-[327px] tablet:w-[772px] desktop:w-[700px] items-center mt-[40px] tablet:mt-[56px]">
          <div className="text-headline-m-600 desktop:text-headline-l-600 text-darkblue text-center">
            About the app
          </div>
          <div className="text-headline-xs-500 tablet:text-headline-s-500 desktop:text-headline-m-500 text-darkblue text-center mt-[16px] tablet:mt-[32px] tablet:px-[63px] desktop:px-0">
            Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem.
          </div>
          <div className="text-paragraph-s-500 tablet:text-paragraph-m-500 desktop:text-paragraph-l-500 text-darkblue text-center mt-[16px] tablet:mt-[32px] mb-[112px]">
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Sed porttitor lectus nibh.
          </div>
        </div>
      </div>
      <div className="bg-blue w-full h-[160px] tablet:h-[138px] desktop:h-[198px] flex items-center justify-center">
        <div className="text-gray2 text-center w-[200px] tablet:w-[720px] text-headline-s-600 desktop:text-headline-m-600">
          Join <span className="text-pink">10,000</span> people already using
          Vorlesen
        </div>
      </div>
      <div className="bg-gray2 flex flex-col items-center w-full pb-[112px]">
        <div className="text-headline-m-600 desktop:text-headline-l-600 text-darkblue text-center mt-[56px] tablet:mt-[64px] desktop:mt-[56px] mb-[40px] tablet:mb-[56px] desktop:mb-[80px]">
          Meet our Team
        </div>
        <TeamMemberList
          teamMembers={[
            { name: "hello", profilePic: logo, title: "bello" },
            { name: "hello", profilePic: logo, title: "bello" },
            { name: "hello", profilePic: logo, title: "bello" },
            { name: "hello", profilePic: logo, title: "bello" },
            { name: "hello", profilePic: logo, title: "bello" },
            { name: "hello", profilePic: logo, title: "bello" },
            { name: "hello", profilePic: logo, title: "bello" }
          ]}
        />
      </div>
      <Footer />
    </div>
  )
}

export default About
