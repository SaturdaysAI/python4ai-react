import { FC } from "react"

interface CourseInfoProps {
  logo: string,
  messageDescription: string,
  messageTitle: string,
  description: string,
}

const CourseInfo: FC<CourseInfoProps> = ({logo, messageDescription, messageTitle, description}) => {
  return (
    <div className="flex flex-col text-center gap-y-4 w-72">
      <img src={logo} alt="Clock" className="h-14 w-14 mx-auto" />
      <h3 className="text-2xl font-light">{messageDescription}</h3>
      <h2 className="text-3xl font-semibold">{messageTitle}</h2>
      <p className="text-sm font-light">
        {description}
      </p>
    </div>
  )
}

export default CourseInfo