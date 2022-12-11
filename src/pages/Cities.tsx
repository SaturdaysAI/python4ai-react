import { FC, PropsWithChildren } from "react"
import SaturdaysMap from "/saturdaysMap.webp"
import AmbassadorImg from "/ambassador.webp"
import { City, statusMsg, citiesJson} from "../assets/data/cities"
import { CourseButton } from "../components/CTAButton"

const ImageContainer:FC<PropsWithChildren<{image: string, mt?:boolean}>> = ({image, mt, children}) => {
    return (
        <section className={`flex flex-col items-center text-center mb-24
                            ${mt ? "mt-24": ""}`}>
            <img className="w-full md:w-4/5 lg:w-1/2" src={image} alt="Saturdays Map" />
            {children}
        </section>
    )
}

const Cities:FC = () => {
    return (
    <div className="mt-16 lg:mt-0">
        <ImageContainer image={SaturdaysMap}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-10 mb-4">
                Find your community among +
                <span className="text-tangerine">30 cities</span>
            </h2>
            <h4 className="w-full md:w-2/3 text-md md:text-lg">
                Saturdays.AI is a global community with campuses all around the world. Each city has its own ecosystem and network of graduates. Explore them and find out the one that is waiting for you!
            </h4>
        </ImageContainer>
        <section className="flex flex-col gap-y-24 w-full bg-slate-50 py-24 px-20">
            {citiesJson.map((continentsInfo, index) => {
                const { continent, cities } = continentsInfo
                const imgClass = "w-full transition-transform duration-300 hover:scale-95"

                return (
                    <div>
                        <h3 className="text-5xl font-bold text-center mb-10 drop-shadow-lg">{continent}</h3>
                        <div className="flex flex-wrap gap-10 justify-between">
                            {cities.map((city, index) => {
                                const cityWithType = city as City
                                const CityImage = () => { return <a href={city.link}><img className={imgClass} src={city.image} alt={city.name} loading="lazy" /></a>}
                                const CityText = () => { return <figcaption className="text-center mt-4">{statusMsg[cityWithType.status]}</figcaption>}

                                return <figure className="w-52 h-full self-center mx-auto"><CityImage/><CityText/></figure>
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
        <ImageContainer image={AmbassadorImg} mt={true}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-10 mb-4">
                Can't find &nbsp;
                <span className="text-tangerine">your campus</span>?
            </h2>
            <h4 className="w-full mb-12 md:w-2/3 text-md md:text-lg">
                Become a <b>community leader</b> of Saturdays.AI
            </h4>
            <CourseButton to={"https://saturdays.ai/create-your-own-ai-saturdays/"} orangeBg={true}>
                CREATE YOUR COMMUNITY
            </CourseButton>
        </ImageContainer>
    </div>
    )
}

export default Cities