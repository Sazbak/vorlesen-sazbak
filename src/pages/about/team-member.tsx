import { FC } from "react"

export type TeamMemberProps = {
  name: string
  title: string
  profilePic: string
}

const TeamMember: FC<TeamMemberProps> = (props) => {
  return (
    <div className="flex flex-col tablet:flex-row w-[50%] desktop:w-[25%] items-center tablet:justify-center text-center text-paragraph-m-500 text-darkblue">
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
