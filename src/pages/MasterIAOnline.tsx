import { FC } from "react"
import CourseHero from "../components/CourseHero"
import { CourseInfo } from "../components/CourseInfo"
import { CourseSectionTitle, CourseSectionDescription, CourseSectionImage, CourseSection } from "../components/CourseSection"
import { CourseButton, CTAButton} from "../components/CTAButton"
import PythonCourseHero from "/pythonCourseHero.webp"
import LearningPlatform from "/learningPlatform.webp"
import LearningPath from "/learningPath.png"
import DSFundamentalsImage from "/datascienceFundamentals.webp"
import MLPath from "/machinelearningPath.png"
import DLPath from "/deeplearningPath.png"
import GenerativeAI from "/generativeAI.webp"
import PlayButton from "../assets/play-button.svg"
import Book from "../assets/book.svg"
import Check from "../assets/check.svg"
import Clock from "../assets/clock.svg"
import Chat from "../assets/chat.svg"
import Certificate from "../assets/certificate.svg"
import Code from "../assets/code.svg"
import Map from "../assets/map.svg"
import Save from "../assets/save.svg"
import SaturdaysMap from "/saturdaysMap.webp"
import { SectionTitle, SectionSubtitle } from "../components/SectionTitle"

const MasterIAOnline = () => {
  const MASTER_VIDEO_ID = "QRqsh5Znupg"

  const videoCoverStyles = `
    <style>
      * {
        padding:0;
        margin:0;
        overflow:hidden;
      }
      html, body {
        height:100%;
      }
      img, span {
        position:absolute;
        width:100%;
        top:0;
        bottom:0;
        margin:auto;
      }
      span {
        height:1.5em;
        text-align:center;
        font:48px sans-serif;
        color:white;
        text-shadow:0 0 32px black;
        overflow: visible;
      }</style>  
  `

  return (
    <div className="mt-20">
      <section className="flex flex-col items-center">
        {/* Properties: 100% online, 12 meses, 149€ */}
        <div className="flex flex-wrap font-medium text-tangerine text-xl">
          <h4>100% online</h4>
          <img src={Check} className="w-5 mx-4" alt="check" />
          <h4>12 meses</h4>
          <img src={Check} className="w-5 mx-4" alt="check" />
          <h4>149€</h4>
        </div>

        <h1 className="text-6xl font-bold text-center text-gray-800 my-10">
          Máster Saturdays.AI
        </h1>
        <h3 className="text-2xl font-normal text-center w-3/4 leading-9 mb-10">
          La <b>comunidad online (en +30 ciudades)</b> donde aprenderás Inteligencia Artificial desde 0 mientras creas un proyecto de impacto social 🚀
        </h3>
        <CourseButton orangeBg={true} to="https://form.typeform.com/to/t6cIe3Is#parte_web=xxxxx&isalumni=xxxxx">
          ME INTERESA
        </CourseButton>
        <p className="text-gray-500 text-md w-3/4 mt-6">
          Hemos cerrado las puertas en octubre de 2022, y no volveremos a abrirlas hasta principios de 2023.
        </p>
        <img src={SaturdaysMap} className="w-3/4 mt-20" alt="saturdays map" />
        <p className="text-lg md:text-2xl font-normal text-center w-3/4 leading-8 md:leading-9 my-10">
          El Máster de Saturdays.AI es la comunidad donde cualquier estudiante de I.A. viene a aprender. Tanto si estás empezando como si llevas años en profesiones paralelas, aquí vas a encontrar compañeros/as, mentores y retos para apoyarte en tu aprendizaje. 
          <br /><br />
          Si quieres adquirir experiencia en programación, machine learning  y datos, esta es la comunidad para lograrlo <b>mientras creas un proyecto de impacto social</b> ✊
        </p>
      </section>
      <div className="mt-52">
        <SectionTitle>¿Qué harás <span className="text-tangerine">dentro</span>?</SectionTitle>
        <iframe title="Tutorial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                className="rounded-lg drop-shadow-blue w-full sm:w-3/4 h-[200px] sm:h-[250px] md:h-[300px] xl:h-[480px] 2xl:h-[720px] 2xl:w-[1280px] mx-auto mt-6"
                srcDoc={`
                  ${videoCoverStyles}
                  <a href=https://www.youtube-nocookie.com/embed/${MASTER_VIDEO_ID}/?autoplay=1>
                    <img
                        src=https://img.youtube.com/vi/${MASTER_VIDEO_ID}/hqdefault.jpg 
                        alt='Tutorial Cover'
                        loading="lazy">
                    <span>▶️</span>
                  </a>
                `} />
        <section className="mt-36 flex justify-center flex-wrap gap-10">
          <CourseInfo
            logo={PlayButton}
            messageTitle="Crear un proyecto en 12 meses"
          >
            Aprenderás las bases del machine y/o deep learning. 
            <br /><br />
            Y terminarás creando un proyecto de impacto social <b>con la ayuda de mentores</b> con experiencia para conseguir el certificado final.
          </CourseInfo>
          <CourseInfo
            logo={Code}
            messageTitle="Adquirir habilidades prácticas."
          >
            A tu disposición clases grabadas, contenido explicativo, retos y feedback entre alumnos para <b>aprender haciendo</b>.
          </CourseInfo>
          <CourseInfo
            logo={Chat}
            messageTitle="Conectar con gente como tú"
          >
            Únete y conoce a una comunidad diversa de +200 apasionados de la I.A. en diferentes ciudades del mundo. 
            <br /><br />
            <b>No aprendas en solitario</b>.
          </CourseInfo>
      </section>
      </div>
    </div>
  )
}

export default MasterIAOnline