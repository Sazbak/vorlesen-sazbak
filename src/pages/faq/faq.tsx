import Header from "components/header"
import { FC } from "react"
import { FaqSubElementProps } from "./faq-dropdown-element"
import FaqDropdownElement from "./faq-dropdown-element"
import Footer from "components/footer"

export type FaqProps = {
  faqElements: {
    headline: string
    subElements: FaqSubElementProps[]
  }[]
}

const Faq: FC<FaqProps> = ({ ...props }) => {
  const listLayout = (
    <>
      {props.faqElements.map((element, index) => (
        <>
          <div className="text-headline-s-600 pb-[10px]">
            {element.headline}
          </div>
          {element.subElements.map((subElement) => (
            <FaqDropdownElement {...subElement} />
          ))}
        </>
      ))}
    </>
  )
  return (
    <div className="flex flex-col text-darkblue text-start bg-gray1">
      <Header />
      <div className="flex flex-col  mx-[24px] tablet:mx-[232px] desktop:mx-[370px] mt-[40px] tablet:mt-[56px] pb-[112px]">
        <div className="text-headline-m-600">FAQ</div>
        <div className="text-paragraph-s-400 mt-[8px] mb-[32px] tablet:mb-[40px] desktop:mb-[48px]">
          Browse help topics
        </div>
        {listLayout}
      </div>
      <Footer />
    </div>
  )
}

export default Faq
