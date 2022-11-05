import { FC } from "react"
import CourseHero from "../components/CourseHero"
import CourseInfo from "../components/CourseInfo"
import { CourseSectionTitle, CourseSectionDescription, CourseSectionImage, CourseSection } from "../components/CourseSection"
import { CourseExtra, CourseExtraItem } from "../components/CourseExtra"
import CoursePrice from "../components/CoursePrice"
import CTAButton from "../components/CTAButton"
import Clock from "../assets/clock.svg"
import PlayButton from "../assets/play-button.svg"
import Book from "../assets/book.svg"
import LearningPlatform from "/learningPlatform.webp"
import LearningPath from "/learningPath.png"
import SaturdaysMap from "/saturdaysMap.webp"
import PythonLogo from "/pythonLogo.png"
import CommunityIcon from "/communityIcon.png"
import PlatformIcon from "/platformIcon.png"
import CertificateIcon from "/certificateIcon.png"

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
      <section className="mt-36 flex justify-center flex-wrap gap-10">
        <CourseInfo
          logo={Clock}
          messageDescription="TIEMPO ESTIMADO"
          messageTitle="6 semanas"
          description="El programa dura 6 semanas. De media cada persona dedica unas 5 horas semanales."
        />
        <CourseInfo
          logo={PlayButton}
          messageDescription="INSCRÍBETE EN"
          messageTitle="Abril"
          description="Obtén acceso a la plataforma inmediatamente después de la inscripción."
        />
        <CourseInfo
          logo={Book}
          messageDescription="PREREQUISITOS"
          messageTitle="Ninguno"
          description="Sentirse cómodo con las matemáticas del instituto y con operaciones básicas de tu ordenador como abrir archivos, aplicaciones, copiar y pegar."
        />
      </section>
      <CourseSection>
        <CourseSectionImage src={LearningPlatform} alt="Learning platform" />
        <div className="flex flex-col gap-y-4">
          <CourseSectionTitle>¿Quieres aprender <span className="text-tangerine">I.A.</span>?</CourseSectionTitle>
          <CourseSectionDescription>
            El programa te enseñará a programar desde cero si aún no tienes experiencia, sin clases largas y aburridas. Hay demasiados cursos en Internet y ser parte de una comunidad es la clave para mantener la motivación y conectarse con otras personas.
            <br /><br />
            En este programa aprenderás todo lo que necesitas saber para empezar a programar en I.A. El objetivo es que luego puedas dar el paso y unirte a uno de los AI Saturdays en tu ciudad.
          </CourseSectionDescription>
        </div>
      </CourseSection>
      <CourseSection>
        <div className="flex flex-col gap-y-4">
          <CourseSectionTitle>Lo que aprenderás</CourseSectionTitle>
          <CourseSectionDescription>
            El programa está organizado en <b>6 módulos</b> donde te desafiaremos de forma práctica. Podrás preguntar a la comunidad tus progresos, tus dudas y programar con más personas.
            <br /><br />
            Es un programa de Python enfocado a empezar en el mundo de la IA. No pretende ser un curriculum exhaustivo sobre ciencias de la computación.
          </CourseSectionDescription>
          <CTAButton active={false} to={"https://drive.google.com/file/d/1ez2SnuCfDJWDwis9g9FZXwS9Nns3MY5T/view?usp=sharing"}>
            Descargar Programa
          </CTAButton>
        </div>
        <CourseSectionImage src={LearningPath} alt="Learning path" />
      </CourseSection>
      <CourseSection>
        <CourseSectionImage src={SaturdaysMap} alt="Saturdays Map" />
        <div className="flex flex-col gap-y-4">
          <CourseSectionTitle>Aprender <span className="text-tangerine">I.A.</span> es más que un curso</CourseSectionTitle>
          <CourseSectionDescription>
            Hemos enseñado a +2000 alumnos a crear sus proyectos de impacto, y ahora <b>queremos ayudarte si no sabes cómo empezar</b>.
            <br /><br />
            En este programa aprenderás todo lo que necesitas saber para empezar a programar en I.A. El objetivo es que luego puedas dar el paso y unirte a uno de los AI Saturdays en tu ciudad.
          </CourseSectionDescription>
        </div>
      </CourseSection>
      <CourseExtra title="¿Qué más incluye el programa?">
        <CourseExtraItem
          icon={PythonLogo}
          title="Ejercicios prácticos"
          description="Cada módulo incluye ejercicios que, además de resumir los conceptos clave de cada módulo, te guiarán a través de las actividades propuestas en las lecciones de ese módulo."
        />
        <CourseExtraItem
          icon={CommunityIcon}
          title="Comunidad"
          description="El programa incluye foros privados donde puedes hacer tus preguntas y programar, poniéndote en contacto con mentores y otros compañeros."
        />
        <CourseExtraItem
          icon={PlatformIcon}
          title="Plataforma"
          description="Tendrás acceso a clases en video, documentación adjunta, foros, ejercicios entregables y feedback de los mentores."
        />
        <CourseExtraItem
          icon={CertificateIcon}
          title="Certificado"
          description="Al finalizar el programa obtendrás un certificado. Para ello es necesario superar las pruebas en las 6 semanas establecidas."
        />
      </CourseExtra>
      <CoursePrice />
    </div>
  )
}

export default PythonCourse