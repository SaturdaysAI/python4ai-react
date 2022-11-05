import { FC } from "react"
import CourseHero from "../components/CourseHero"

const PythonCourse: FC = () => {
  return (
    <div>
      <CourseHero
        title1="Python 4"
        title2="AI"
        description="Aprende a programar en I.A. desde 0. Para ello, hemos preparado una hoja de ruta personalizada para transformar tus skills de python en poco tiempo, de forma divertida y menos estresante."
        image="/pythonCourseHero.webp"
        alt="Python course hero"
      />
    </div>
  )
}

export default PythonCourse