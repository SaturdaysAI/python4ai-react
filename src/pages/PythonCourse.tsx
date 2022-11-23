import { FC } from "react"
import CourseHero from "../components/CourseHero"
import { CourseInfo } from "../components/CourseInfo"
import { CourseSectionTitle, CourseSectionDescription, CourseSectionImage, CourseSection } from "../components/CourseSection"
import { CourseExtra, CourseExtraItem } from "../components/CourseExtra"
import { CourseFAQItem, CourseFAQSection } from "../components/CourseFAQ"
import CoursePrice from "../components/CoursePrice"
import {CTAButton} from "../components/CTAButton"
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
        subtitle={true}
        ctaButtons={true}
      />
      <section className="mt-36 flex justify-center flex-wrap gap-10">
        <CourseInfo
          logo={Clock}
          messageDescription="TIEMPO ESTIMADO"
          messageTitle="6 semanas"
        >
          El programa dura 6 semanas. De media cada persona dedica unas 5 horas semanales.
        </CourseInfo>
        <CourseInfo
          logo={PlayButton}
          messageDescription="INSCRÍBETE EN"
          messageTitle="Abril"
        >
          Obtén acceso a la plataforma inmediatamente después de la inscripción.
        </CourseInfo>
        <CourseInfo
          logo={Book}
          messageDescription="PREREQUISITOS"
          messageTitle="Ninguno"
        >
          Sentirse cómodo con las matemáticas del instituto y con operaciones básicas de tu ordenador como abrir archivos, aplicaciones, copiar y pegar.
        </CourseInfo>
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
      <CourseFAQSection>
        <CourseFAQItem
          question="¿Por qué debería inscribirme?"
          answer="El programa de Python 4 AI te ofrece la oportunidad de aprender python, el lenguaje de programación más importante y más utilizado por los científicos de datos en la actualidad. Iníciate en el fascinante campo de la ciencia de datos y aprende Python con la ayuda de mentores y la comunidad."
          topLine={false}
        />
        <CourseFAQItem
          question="¿Cómo puedo saber si este programa es adecuado para mí?"
          answer="Si estás interesado en dar el primer paso en el campo de la Ciencia de Datos, este curso es para ti. Te enseñará rápidamente las herramientas de programación de ciencia de datos fundamentales. Este curso no requiere ningún conocimiento previo, por lo que puedes empezar ahora."
          answer2="Si te decides por Python 4 AI, también aprenderás bibliotecas de datos especializadas para Python, incluyendo Pandas y Numpy. Al aprender estas habilidades de programación fundamentales, estarás listo para avanzar en tu carrera en los datos."
          topLine={true}
        />
        <CourseFAQItem
          question="¿Me servirá el curso si ya se programar en otros lenguajes?"
          answer="Desde luego. Todo lo que cubre el curso te ayudará a definir los pilares fundamentales de la programación en Python, desde 0 hasta que seas capaz de crear un pequeño proyecto o prueba de I.A."
          topLine={true}
        />
        <CourseFAQItem
          question="¿Cómo es la metodología?"
          answer="Aunque el método de aprendizaje de cada persona es diferente, podemos contarte más sobre nuestra metodología de enseñanza: al principio te daremos un breve resumen del material, te daremos ejercicios prácticos con soluciones para alimentar tu cerebro. Y finalmente, tendrás que pasar algunos retos si quieres ir al siguiente módulo."
          answer2="Durante este proceso verás que la parte importante del contenido es propia, pero complementamos con los mejores recursos de Internet. La magia de este programa se centra en el contacto con la comunidad y los mentores."
          topLine={true}
        />
        <CourseFAQItem
          question="¿El curso es un pago único o una suscripción?"
          answer="Es un pago único. Una vez comprado es tuyo para siempre, sin ningún pago adicional. Podrás asistir además a todas las sesiones en vivo de resolución de dudas."
          topLine={true}
        />
        <CourseFAQItem
          question="¿Tendré apoyo durante el proceso?"
          answer="Sí. Por un lado, los dos profesores participaremos a diario en la comunidad privada que acompaña el curso, gestionada dentro de la plataforma. Además, cada varias semanas organizaremos sesiones en vivo para responder preguntas sobre temáticas concretas."
          topLine={true}
        />
        <CourseFAQItem
          question="¿Hay un límite de tiempo para realizar el curso?"
          answer="No. Lo recomendable es realizar un módulo a la semana aproximadamente, por lo que tardarías un mes y medio aproximadamente en realizar el programa completo, pero según tu disponibilidad de tiempo y la profundidad con la que quieras trabajar cada punto puedes tardar más o menos. La información siempre estará disponible."
          topLine={true}
        />
        <CourseFAQItem
          question="¿En qué consiste el proyecto?"
          answer="Te pondremos un reto para aplicar un sencillo algoritmo de I.A. y demuestres que has asimilado los conocimientos y habilidades."
          topLine={true}
        />
        <CourseFAQItem
          question="¿Y si no es lo que busco?"
          answer="El dinero del programa va destinado a cubrir las necesidades de la organización global. Tienes 30 días para revisar el contenido del curso, y si no es lo que buscas te devolvemos el dinero. No hay riesgo."
          topLine={true}
        />
      </CourseFAQSection>
      <div className="mt-20 mb-10 flex flex-col justify-center items-center gap-y-8">
        <CTAButton active={true} to="https://ti.to/saturdaysai/python-4-ai-program">Inscríbete ahora</CTAButton>
        <p className="text-center italic text-gunmetal text-xl font-light">
          “La hoja de ruta para comenzar tu viaje desde 0 hasta aprender a programar I.A.”
        </p>
      </div>
    </div>
  )
}

export default PythonCourse