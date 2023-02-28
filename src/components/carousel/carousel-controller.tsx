import React, { useCallback, useEffect, useRef } from "react"
import left_arrow from "assets/carousel/left-arrow.svg"
import right_arrow from "assets/carousel/right-arrow.svg"
import full_dot from "assets/carousel/full-dot.svg"
import empty_dot from "assets/carousel/empty-dot.svg"
import { FC, MutableRefObject } from "react"

type Props = {
  cardNumber: number
  selectedIndex: number
  carousel: MutableRefObject<HTMLElement | null>
}

enum Direction {
  Forward = 1,
  Backward = -1
}

const CarouselController: FC<Props> = (props) => {
  const cardWidth = useRef(0)
  const cardGapX = useRef(0)
  const cardScrollPositions = useRef([0])
  const activeCardIndex = useRef(0)

  const scrollCards = useCallback(
    (direction: Direction) => {
      if (props.carousel) {
        if (direction === Direction.Forward) {
          activeCardIndex.current = Math.min(
            props.cardNumber - 1,
            activeCardIndex.current + 1
          )
        } else {
          activeCardIndex.current = Math.max(0, activeCardIndex.current - 1)
        }

        props.carousel.current?.scrollTo(
          cardScrollPositions.current[activeCardIndex.current],
          0
        )
      }
    },
    [props.carousel, props.cardNumber]
  )

  useEffect(() => {
    cardWidth.current = (
      props.carousel.current!.children.item(0)! as HTMLElement
    ).offsetWidth
    if (props.carousel.current !== null) {
      cardGapX.current = parseFloat(
        window.getComputedStyle(props.carousel.current).gap.match(/\d+/)?.[0] ??
          "0px"
      )
      console.log("cardwidth: " + cardWidth.current)
      console.log("gapX: " + cardGapX.current)
    }

    cardScrollPositions.current = Array.from(
      { length: props.cardNumber },
      (_, index) => index * (1 + cardWidth.current + cardGapX.current)
    )
  }, [props.carousel, props.cardNumber])

  return (
    <div className="flex justify-between w-[151px] self-center mt-[34px] mb-[42px]">
      <img
        src={left_arrow}
        alt="Left arrow for carousel"
        onClick={() => scrollCards(Direction.Backward)}
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
        onClick={() => scrollCards(Direction.Forward)}
      />
    </div>
  )
}

export default CarouselController
