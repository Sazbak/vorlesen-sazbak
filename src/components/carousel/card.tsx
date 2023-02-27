import { FC } from "react"

export type CardProps = {
  title: string
  message: string
  name: string
  rating: number
  date: Date
}

const Card: FC<CardProps> = (props) => {
  const formattedDate = props.date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })

  return (
    <div className="flex flex-col bg-white text-start text-darkblue border border-blue rounded-[14px] shrink-0 w-[320px] tablet:w-[370px] desktop:w-[568px] h-[299px] relative px-[16px]">
      <div className="text-headline-s-600 mt-[24px] mb-[8px]">
        {props.title}
      </div>
      <div className="text-paragraph-s-500">{props.message}</div>
      <div className="flex flex-col absolute bottom-0">
        <div className="flex">
          <div className="text-headline-s-600 mr-[8px]">{props.name}</div>
          <div className="text-headline-s-600 mr-[8px]">{props.rating}</div>
        </div>
        <div className="text-paragraph-s-400 mb-[24px]">{formattedDate}</div>
      </div>
    </div>
  )
}

export default Card
