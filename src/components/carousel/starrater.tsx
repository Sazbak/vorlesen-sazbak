import { FC } from "react"
import star from "assets/carousel/star.svg"

const MAX_RATING = 5

type Props = {
  rating: number
}

const StarRater: FC<Props> = (props) => {
  return (
    <div className="flex gap-x-[2px]">
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <img
          className={`${index >= props.rating ? "opacity-50" : ""}`}
          src={star}
          alt="Star"
        />
      ))}
    </div>
  )
}

export default StarRater
