import { FC } from "react"
import TeamMember from "./team-member"

type Props = {
  teamMembers: {
    name: string
    title: string
    profilePic: string
  }[]
}

const TeamMemberList: FC<Props> = ({ ...props }) => {
  const teamLayout = props.teamMembers.map((member, index) => (
    <TeamMember
      index={index}
      profilePic={member.profilePic}
      name={member.name}
      title={member.title}
    />
  ))

  return <div className="flex flex-wrap  w-[80vw]">{teamLayout}</div>
}

export default TeamMemberList
