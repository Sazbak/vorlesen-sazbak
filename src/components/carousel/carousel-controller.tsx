import left_arrow from "assets/carousel/left-arrow.svg"
import right_arrow from "assets/carousel/right-arrow.svg"
import full_dot from "assets/carousel/full-dot.svg"
import empty_dot from "assets/carousel/empty-dot.svg"
import { FC } from "react"

type Props = {
  cardNumber: number
  selectedIndex: number
  scrollCards: (direction: Direction) => void
}

export enum Direction {
  Forward = 1,
  Backward = -1
}

const CarouselController: FC<Props> = (props) => {
  return (
    <div className="flex justify-between w-[151px] self-center mt-[34px] mb-[42px]">
      <img
        src={left_arrow}
        alt="Left arrow for carousel"
        onClick={() => props.scrollCards(Direction.Backward)}
      />
      <div className="flex gap-x-[8px] self-center">
        {Array.from({ length: props.cardNumber }).map((_, index) =>
          index === props.selectedIndex ? (
            <img
              src={full_dot}
              alt="A filled dot of the carousel controller"
              key={props.selectedIndex}
            />
          ) : (
            <img
              src={empty_dot}
              alt="Empty circle for the carousel controller"
              key={index}
            />
          )
        )}
      </div>
      <img
        src={right_arrow}
        alt="Right arrow for carousel"
        onClick={() => props.scrollCards(Direction.Forward)}
      />
    </div>
  )
}

export default CarouselController
