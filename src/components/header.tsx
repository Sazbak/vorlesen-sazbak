import vorlesen_text from "assets/vorlesen_text.svg"
import logo from "assets/logo.svg"

function Header() {
  return (
    <div className="flex gap-x-[9.65px] bg-darkblue h-[82px] justify-center w-full">
      <img src={logo} alt="Vorlesen text" width="46" height="46" />
      <img src={vorlesen_text} alt="Vorlesen logo" width="97" height="16" />
    </div>
  )
}

export default Header
