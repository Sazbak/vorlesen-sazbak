import React, { useCallback, useEffect, useRef } from "react"
import { FC } from "react"
import Card from "./card"
import { CardProps } from "./card"
import CarouselController from "./carousel-controller"
import { Direction } from "./carousel-controller"

type Props = {
  cards: CardProps[]
}

const Carousel: FC<Props> = (props) => {
  const cards = props.cards
  const carouselRef = useRef(null)
  const cardWidth = useRef(0)
  const cardGapX = useRef(0)
  const cardScrollPositions = useRef([0])
  const cardSnapPortBounds = useRef([0])
  const activeCardIndex = useRef(0)
  const snapDelay = 100
  const controllerIndexUpdater = useRef((index: number) => {})

  const scrollCards = useCallback(
    (direction: Direction) => {
      if (carouselRef.current) {
        if (direction === Direction.Forward) {
          activeCardIndex.current = Math.min(
            cards.length - 1,
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
    [cards.length]
  )

  useEffect(() => {
    const carousel = carouselRef.current! as HTMLElement
    cardWidth.current = (carousel.children.item(0)! as HTMLElement).offsetWidth
    if (carousel !== null) {
      cardGapX.current = parseFloat(
        window.getComputedStyle(carousel).gap.match(/\d+/)?.[0] ?? "0px"
      )
    }

    cardScrollPositions.current = Array.from(
      { length: cards.length },
      (_, index) => index * (1 + cardWidth.current + cardGapX.current)
    )

    cardSnapPortBounds.current = Array.from(
      { length: cards.length },
      (_, index) => cardScrollPositions.current[index] - cardWidth.current / 2
    )

    let timeout: ReturnType<typeof setTimeout>

    const handleScroll = () => {
      clearTimeout(timeout)
      if (
        carousel.scrollLeft >
        cardSnapPortBounds.current[activeCardIndex.current + 1]
      ) {
        timeout = setTimeout(() => {
          carousel.scrollTo(
            cardScrollPositions.current[activeCardIndex.current + 1],
            0
          )
        }, snapDelay)
        activeCardIndex.current++
        controllerIndexUpdater.current(activeCardIndex.current)
      } else if (
        carousel.scrollLeft <
        cardSnapPortBounds.current[activeCardIndex.current]
      ) {
        timeout = setTimeout(() => {
          carousel.scrollTo(
            cardScrollPositions.current[activeCardIndex.current - 1],
            0
          )
        }, snapDelay)
        activeCardIndex.current--
        controllerIndexUpdater.current(activeCardIndex.current)
      } else {
        timeout = setTimeout(() => {
          carousel.scrollTo(
            cardScrollPositions.current[activeCardIndex.current],
            0
          )
        }, snapDelay)
      }
    }

    carousel.addEventListener("scroll", handleScroll)

    return () => {
      carousel.removeEventListener("scroll", handleScroll)
    }
  }, [cards.length])

  return (
    <div className="flex flex-col">
      <div
        className="flex gap-x-[16px] tablet:gap-x-[32px] desktop:gap-x-[40px] overflow-x-auto scrollbar-hide scroll-smooth px-[calc(50vw-160px)] tablet:px-[calc(50vw-185px)] desktop:px-[calc(50vw-284px)]"
        ref={carouselRef}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            message={card.message}
            name={card.name}
            rating={card.rating}
            date={card.date}
          />
        ))}
      </div>
      <CarouselController
        cardNumber={cards.length}
        selectedIndex={activeCardIndex.current}
        scrollCards={scrollCards}
        updater={controllerIndexUpdater}
      />
    </div>
  )
}

export default Carousel
