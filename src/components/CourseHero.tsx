import { FC } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component"
import GeometryBg1 from '/geometryBg1.png'
import GeometryBg2 from '/geometryBg2.png'
import CTAButton from "./CTAButton"

interface CourseHeroProps {
    title1: string,
    title2: string,
    description: string,
    image: string,
    alt: string
}

const CourseHero: FC<CourseHeroProps> = ({title1, title2, description, image, alt}) => {
    return (
        <div className="course-hero-container gap-10">
            <div className="flex flex-col justify-center">
                <p className="text-base mb-8">Programa Online (en español)</p>
                <h1 className="text-6xl font-semibold">
                    {title1} <span className="text-tangerine">{title2}</span>
                </h1>
                <p className="text-xl my-10">{description}</p>
                <div className="flex flex-col gap-y-4">
                    <CTAButton to="https://ti.to/saturdaysai/python-4-ai-program" active={true}>Inscríbete ahora</CTAButton>
                    <CTAButton to="https://drive.google.com/file/d/1ez2SnuCfDJWDwis9g9FZXwS9Nns3MY5T/view?usp=sharing" active={false}>Descargar programa</CTAButton>
                </div>
            </div>
            <div className="relative">
                <img src={GeometryBg1} alt="Geometry bg 1" className="w-[120%] absolute top-0" />  
                <img src={GeometryBg2} alt="Geometry bg 2" className="w-[120%] absolute top-0" /> 
                <div className="flex flex-col justify-center h-full">
                    <LazyLoadImage src={image} alt={alt} className="w-[80%] mx-auto relative animate-imageFadeIn" />
                </div> 
            </div>

        </div>
    )
}

export default CourseHero