import { FC } from "react"

type Props = {
  title: string
  ic_src: string
}

const FakeButton: FC<Props> = ({ ...props }) => {
  return (
    <div className="rounded-[25px] bg-gray2 ml-[4.9vw] tablet:ml-[0px] inline-flex items-center self-start mb-[2.1vw] tablet:mb-[0.8vw] desktop:mb-[1.3vw]">
      <div className="flex m-[16px] desktop:m-[16px]">
        <img src={props.ic_src} alt="Story icon" />
        <div className="text-paragraph-s-500 desktop:text-paragraph-l-500 text-darkblue ml-[8px] desktop:ml-[0.5vw]">
          {props.title}
        </div>
      </div>
    </div>
  )
}

export default FakeButton
