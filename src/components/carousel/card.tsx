import React, { useState } from "react"
import { FC } from "react"
import StarRater from "./starrater"

type CardProps = {
  title: string
  message: string
  name: string
  rating: number
  date: Date
  updater: { update: (isActive: boolean) => void }
}

const Card: FC<CardProps> = (props) => {
  const formattedDate = props.date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })

  const [active, setActive] = useState(false)
  props.updater.update = (isActive: boolean) => {
    setActive(isActive)
  }

  return (
    //in case of card width change, change left padding of carousel flex layout inside carousel.tsx as well
    <div
      className={`${
        !active ? "opacity-50" : ""
      } flex flex-col bg-white text-start text-darkblue border border-blue rounded-[14px] shrink-0 w-[320px] tablet:w-[370px] desktop:w-[568px] h-[299px] relative px-[16px]`}
    >
      <div className="text-headline-s-600 mt-[24px] mb-[8px]">
        {props.title}
      </div>
      <div className="text-paragraph-s-500">{props.message}</div>
      <div className="flex flex-col absolute bottom-0">
        <div className="flex">
          <div className="text-headline-s-600 mr-[8px]">{props.name}</div>
          <StarRater rating={props.rating} />
        </div>
        <div className="text-paragraph-s-400 mb-[24px]">{formattedDate}</div>
      </div>
    </div>
  )
}

export default Card
