import Carousel from "components/carousel/carousel"

function CarouselSection() {
  return (
    <>
      <div className="text-headline-m-600 tablet:text-headline-l-600 text-center text-darkblue mt-[40px] mb-[24px]">
        What users are saying
      </div>
      <Carousel
        cards={[
          {
            title: "Title",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet rhoncus fringilla aliquet nisl, turpis quam pharetra turpis. Aliquam amet dictumst vitae proinre...",
            name: "Balazs",
            rating: 5,
            date: new Date("2022-10-03T00:00:00")
          },
          {
            title: "Title22222",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet rhoncus fringilla aliquet nisl, turpis quam pharetra turpis. Aliquam amet dictumst vitae proinre...",
            name: "Béla",
            rating: 3,
            date: new Date("2022-10-03T00:00:00")
          },
          {
            title: "Title33333",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet rhoncus fringilla aliquet nisl, turpis quam pharetra turpis. Aliquam amet dictumst vitae proinre...",
            name: "Pista",
            rating: 4,
            date: new Date("2022-10-03T00:00:00")
          },
          {
            title: "Title6666",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet rhoncus fringilla aliquet nisl, turpis quam pharetra turpis. Aliquam amet dictumst vitae proinre...",
            name: "Marika",
            rating: 1,
            date: new Date("2022-10-03T00:00:00")
          },
          {
            title: "Title6666",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet rhoncus fringilla aliquet nisl, turpis quam pharetra turpis. Aliquam amet dictumst vitae proinre...",
            name: "Joska",
            rating: 2,
            date: new Date("2022-10-03T00:00:00")
          }
        ]}
      />
    </>
  )
}

export default CarouselSection
