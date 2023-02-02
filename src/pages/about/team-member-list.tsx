import { FC } from "react"
import TeamMember from "./team-member"
import { TeamMemberProps } from "./team-member"

type TeamMemberListProps = {
  teamMembers: TeamMemberProps[]
}

const TeamMemberList: FC<TeamMemberListProps> = (props) => {
  const teamLayout = props.teamMembers.map((member) => (
    <TeamMember
      profilePic={member.profilePic}
      name={member.name}
      title={member.title}
    />
  ))

  return (
    <div className="flex flex-wrap  w-[80vw] gap-y-[24px] tablet:gap-y-[40px]">
      {teamLayout}
    </div>
  )
}

export default TeamMemberList
