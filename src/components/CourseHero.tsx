import { FC } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component"
import GeometryBg1 from '/geometryBg1.png'
import GeometryBg2 from '/geometryBg2.png'
import TechnologiesImage from '/coursesTechnologies.webp'
import {CTAButton} from "./CTAButton"

interface CourseHeroProps {
    title1: string,
    title2: string,
    title3?: string,
    description: string,
    description2?: string,
    image: string,
    alt: string,
    subtitle: boolean,
    ctaButtons: boolean,
}

const CourseHero: FC<CourseHeroProps> = (
    {
        title1,
        title2, 
        title3, 
        description, 
        description2,
        image,
        alt,
        subtitle,
        ctaButtons
    }) => {
    return (
        <div className="course-hero-container gap-10 flex-wrap">
            <div className="flex flex-col justify-center">
                {subtitle && <p className="text-base mb-8">Programa Online (en español)</p>}
                <h1 className="text-6xl font-semibold">
                    {title1} <span className="text-tangerine">{title2}</span> {title3}
                </h1>
                <p className={`text-xl ${description2 ? "my-8" : "my-10"}`}>{description}</p>
                {description2 && <p className="text-xl mb-10">{description2}</p>}
                {ctaButtons ? (
                    <div className="flex flex-col gap-y-4">
                        <CTAButton to="https://ti.to/saturdaysai/python-4-ai-program" active={true}>Inscríbete ahora</CTAButton>
                        <CTAButton to="https://drive.google.com/file/d/1ez2SnuCfDJWDwis9g9FZXwS9Nns3MY5T/view?usp=sharing" active={false}>Descargar programa</CTAButton>
                    </div>
                ) : (
                    <LazyLoadImage
                        src={TechnologiesImage}
                        alt="Technologies"
                    />
                )}
            </div>
            <div className="relative max-w-3xl">
                <img src={GeometryBg1} alt="Geometry bg 1" className="w-[120%] absolute top-0" />  
                <img src={GeometryBg2} alt="Geometry bg 2" className="w-[120%] absolute top-0" /> 
                <div className="flex flex-col justify-center h-full">
                    <LazyLoadImage src={image} alt={alt} className="w-[80%] md:min-w-[400px] mx-auto relative animate-imageFadeIn" />
                </div> 
            </div>

        </div>
    )
}

export default CourseHero