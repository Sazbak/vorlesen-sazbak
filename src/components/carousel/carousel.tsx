import React, { useRef } from "react"
import { FC } from "react"
import Card from "./card"
import { CardProps } from "./card"
import CarouselController from "./carousel-controller"

type Props = {
  cards: CardProps[]
}

const Carousel: FC<Props> = (props) => {
  const cards = props.cards
  const carouselRef = useRef(null)

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
        selectedIndex={0}
        carousel={carouselRef}
      />
    </div>
  )
}

export default Carousel
