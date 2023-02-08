import ic_adventure from "assets/howtouse/ic_adventure.svg"
import ic_allday from "assets/howtouse/ic_allday.svg"
import ic_goodnight from "assets/howtouse/ic_goodnight.svg"
import FakeButton from "pages/home/fake-button"

function FakeButtonList() {
  return (
    <>
      <FakeButton title="Abenteuer Geschichten" ic_src={ic_adventure} />
      <div className="ml-[80px]">
        <FakeButton title="Alltags Geschichten" ic_src={ic_allday} />
      </div>
      <div className="ml-[160px]">
        <FakeButton title="Gute Nacht Geschichten" ic_src={ic_goodnight} />
      </div>
    </>
  )
}

export default FakeButtonList
