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

interface CourseDetailProps {
  icon: string,
  title: string,
  description: string,
}

const CourseDetail: FC<CourseDetailProps> = ({ icon, title, description}) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row items-center md:items-start w-80">
      <img src={icon} alt="Course Detail Icon" className="h-10 w-10" />
      <div className="flex flex-col gap-y-2">
        <h3 className="text-xl font-semibold text-center md:text-left">{title}</h3>
        <p className="text-lg font-light text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  )
}

export { CourseInfo, CourseDetail }