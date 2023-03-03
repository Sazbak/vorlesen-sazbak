import React, { useCallback, useEffect, useRef, useState } from "react"
import { FC } from "react"
import Card from "./card"
import CarouselController from "./carousel-controller"
import { Direction } from "./carousel-controller"

type Props = {
  cards: {
    title: string
    message: string
    name: string
    rating: number
    date: Date
  }[]
}

const Carousel: FC<Props> = (props) => {
  const carouselRef = useRef(null)
  const cardWidth = useRef(0)
  const cardGapX = useRef(0)
  const cardScrollPositions = useRef([0])
  const cardSnapPortBounds = useRef([0])
  const activeCardIndex = useRef(0)
  const snapDelay = 100
  const controllerIndexUpdater = useRef((index: number) => {})
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const cardOpacityUpdaters = Array(props.cards.length).fill(null)

  for (let i = 0; i < props.cards.length; i++) {
    cardOpacityUpdaters[i] = { update: (isActive: boolean) => {} }
  }

  const scrollCards = useCallback(
    (direction: Direction) => {
      if (carouselRef.current) {
        if (direction === Direction.Forward) {
          activeCardIndex.current = Math.min(
            props.cards.length - 1,
            activeCardIndex.current + 1
          )
        } else {
          activeCardIndex.current = Math.max(0, activeCardIndex.current - 1)
        }

        ;(carouselRef.current as HTMLElement).scrollTo(
          cardScrollPositions.current[activeCardIndex.current],
          0
        )
      }
    },
    [props.cards.length]
  )

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    const carousel = carouselRef.current! as HTMLElement
    cardWidth.current = (carousel.children.item(0)! as HTMLElement).offsetWidth
    if (carousel !== null) {
      cardGapX.current = parseFloat(
        window.getComputedStyle(carousel).gap.match(/\d+/)?.[0] ?? "0px"
      )
    }

    cardScrollPositions.current = Array.from(
      { length: props.cards.length },
      (_, index) => index * (1 + cardWidth.current + cardGapX.current)
    )

    cardSnapPortBounds.current = Array.from(
      { length: props.cards.length },
      (_, index) => cardScrollPositions.current[index] - cardWidth.current / 2
    )

    carousel.scrollTo(cardScrollPositions.current[activeCardIndex.current], 0)

    let timeout: ReturnType<typeof setTimeout>

    const handleSnap = () => {
      clearTimeout(timeout)
      if (
        carousel.scrollLeft >
        cardSnapPortBounds.current[activeCardIndex.current + 1]
      ) {
        timeout = setTimeout(() => {
          //in order to handle the potential edge case of the scroll value passing a boundary on the last frame of stopping
          carousel.scrollTo(
            cardScrollPositions.current[activeCardIndex.current],
            0
          )

          cardOpacityUpdaters[activeCardIndex.current].update(true)
        }, snapDelay)
        cardOpacityUpdaters[activeCardIndex.current].update(false)
        activeCardIndex.current++
        controllerIndexUpdater.current(activeCardIndex.current)
      } else if (
        carousel.scrollLeft <
        cardSnapPortBounds.current[activeCardIndex.current]
      ) {
        timeout = setTimeout(() => {
          //in order to handle the potential edge case of the scroll value passing a boundary on the last frame of stopping
          carousel.scrollTo(
            cardScrollPositions.current[activeCardIndex.current],
            0
          )

          cardOpacityUpdaters[activeCardIndex.current].update(true)
        }, snapDelay)
        cardOpacityUpdaters[activeCardIndex.current].update(false)
        activeCardIndex.current--
        controllerIndexUpdater.current(activeCardIndex.current)
      } else {
        timeout = setTimeout(() => {
          carousel.scrollTo(
            cardScrollPositions.current[activeCardIndex.current],
            0
          )
          cardOpacityUpdaters[activeCardIndex.current].update(true)
        }, snapDelay)
      }
    }

    carousel.addEventListener("scroll", handleSnap)
    cardOpacityUpdaters[0].update(true)

    return () => {
      carousel.removeEventListener("scroll", handleSnap)
      window.removeEventListener("resize", handleResize)
    }
  }, [props.cards.length, screenWidth, cardOpacityUpdaters])

  return (
    <div className="flex flex-col">
      <div
        className="flex gap-x-[16px] tablet:gap-x-[32px] desktop:gap-x-[40px] overflow-x-auto scrollbar-hide scroll-smooth px-[calc(50vw-160px)] tablet:px-[calc(50vw-185px)] desktop:px-[calc(50vw-284px)]"
        ref={carouselRef}
      >
        {props.cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            message={card.message}
            name={card.name}
            rating={card.rating}
            date={card.date}
            updater={cardOpacityUpdaters[index]}
          />
        ))}
      </div>
      <CarouselController
        cardNumber={props.cards.length}
        selectedIndex={activeCardIndex.current}
        scrollCards={scrollCards}
        updater={controllerIndexUpdater}
      />
    </div>
  )
}

export default Carousel
