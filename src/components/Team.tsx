import { FC } from "react"
import teamData from "../assets/data/team"
import LinkedinLogo from "../assets/social/linkedin.svg"

interface TeamMemberProps {
    image:string,
    name:string,
    role:string,
    description:string,
    linkedin:string
}

const TeamMember: FC<TeamMemberProps> = ({ name, image, role, description, linkedin }) => {
    return (
        <div className="flex flex-col items-start w-80">
            <img src={image} alt={name} className="w-72 h-72 rounded-full" />
            <h4 className="text-left text-2xl font-light text-charcoal mt-4">
                {name}
            </h4>
            <p className="text-left text-gray-500 mt-4 italic">{role}</p>
            <p className="text-left text-charcoal mt-4">{description}</p>
            <hr className="w-full my-4" />
            <a href={linkedin} className="self-start" target="_blank" rel="noreferrer">
                <img src={LinkedinLogo} alt="linkedin" className="w-6 h-6 mt-4 bg-charcoal" />
            </a>
        </div>
    )
}

const Team: FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
            {teamData.map((member: TeamMemberProps) => (
                <TeamMember
                    key={member.name}
                    name={member.name}
                    image={member.image}
                    role={member.role}
                    description={member.description}
                    linkedin={member.linkedin}
                />
            ))}
        </div>
    )
}

export default Team