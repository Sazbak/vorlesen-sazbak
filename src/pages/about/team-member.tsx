import { FC } from "react"
import { clsx } from "clsx"

type Props = {
  index: number
  name: string
  title: string
  profilePic: string
}

const TeamMember: FC<Props> = ({ ...props }) => {
  return (
    <div
      className={clsx(
        "flex flex-col tablet:flex-row w-[50%] items-center tablet:justify-center text-center text-paragraph-m-500 text-darkblue",
        {
          "mt-[24px]": props.index > 1,
          "tablet:mt-[40px]": props.index > 1
        }
      )}
    >
      <img
        className="mb-[4px] tablet:mb-0 w-[64px] h-[64px] tablet:mr-[16px]"
        src={props.profilePic}
        alt="Profile pic of team member"
      />
      <div className="flex flex-col">
        <div>{props.name}</div>
        <div>{props.title}</div>
      </div>
    </div>
  )
}

export default TeamMember
