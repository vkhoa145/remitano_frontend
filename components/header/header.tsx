import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Form from "./form"
import Info from "./info"

export default function Header() {
  return (
    <div className="text-slate-900 h-16">
      <div className="flex justify-between h-full items-center border-b-2 border-slate-900">
        <div className="flex justify-start items-center w-2/4 h-full cursor-pointer">
          <div className="flex justify-between h-2/3">
            <FontAwesomeIcon icon={faHouse}/>
          </div>
          <p className="text-justify text-3xl px-4">FUNNY VIDEOS</p>
        </div>
        <div className="w-2/4">
          {/* <Form/> */}
          <Info/>
        </div>
      </div>
    </div>
  )
}
