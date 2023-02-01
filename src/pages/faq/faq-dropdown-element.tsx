import { FC } from "react"
import upArrow from "assets/faq/up-arrow.svg"
import { clsx } from "clsx"
import React, { useState } from "react"

export type FaqSubElementProps = {
  title: string
  content: string
}

export const FaqDropdownElement: FC<FaqSubElementProps> = ({ ...props }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col mt-[5px] tablet:mt-[10px]">
      <div
        className="flex justify-between bg-white pt-[8px] pb-[18px]"
        onClick={() => setOpen(!open)}
      >
        <div className="text-headline-xs-600 pl-[16px]">{props.title}</div>
        <img
          className={clsx(
            "w-[10px] mr-[17px] transition-transform duration-500",
            {
              "rotate-180": open
            }
          )}
          src={upArrow}
          alt="Dropdown arrow"
        />
      </div>
      <div
        className={clsx(
          "bg-gray2 px-[16px] max-h-0 overflow-hidden transition-max-height duration-500",
          {
            "max-h-[500px]": open
          }
        )}
      >
        <div className="h-[8px]" />
        <div className="pb-[8px]">{props.content}</div>
      </div>
    </div>
  )
}

export default FaqDropdownElement
