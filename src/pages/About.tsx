import { FC, PropsWithChildren } from "react"

// Images First Section
import SaturdaysAILogo from "/about/saturdaysAI-Logo.webp"

// Images Second Section
import LearnInCommunity from "/about/learnInCommunityIcon.webp"
import SocialImpactProjects from "/about/socialImpactProjectsIcon.webp"
import fosteringDiversity from "/about/fosteringDiversity.webp"

// Images Third Section
import Code from "../assets/code.svg"

// Fourth Section
import Team from "../components/Team"

interface CharacteristicProps {
  image: string,
  title: string
}

const Characteristic: FC<PropsWithChildren<CharacteristicProps>> = ({image, title, children}) => {
  return (
    <div className="flex flex-col items-center w-96 p-10 rounded-lg hover:shadow-lg
                    transition-all duration-200">
      <img src={image} alt={title} className="w-64" />
      <h4 className="text-center text-2xl font-bold text-tangerine mt-4">
        {title}
      </h4>
      <p className="text-center text-gray-800 mt-4">{children}</p>
    </div>
  )
}

const About: FC = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center mt-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">We are a community on a mission to make AI accessible to anyone.</h1>
          <p className="text-center md:text-left text-charcoal text-md md:text-lg">We connect the ecosystem of experts, individuals and companies through communities to create social impact.</p>
        </div>
        <figure className="flex flex-col justify-center items-center">
          <img src={SaturdaysAILogo} alt="about" className="w-48 md:w-80" />
        </figure>
      </section>
      <section className="flex flex-col items-center gap-10 mt-48">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-center">Together We Change The World</h2>
        <p className="text-center text-charcoal text-md md:text-lg w-4/5 md:w-2/3">
          In the context of the 4th industrial revolution, AI has the potential to yield the most significant productivity increase in the history of our civilization. At the same time, this fast change is likely to change the structure of work and leave many people behind.
        </p>
        <div className="flex flex-wrap gap-10 justify-center">
          <Characteristic
            image={LearnInCommunity}
            title="Learn in community">
              The learning of the future increasingly takes place in communities. We connect a global community of AI students.
          </Characteristic>
          <Characteristic
            image={SocialImpactProjects}
            title="Social impact projects">
              You can use AI to solve social problems, such as climate change, education, disease diagnosis or local problems in your city, but it can also be misused.
          </Characteristic>
          <Characteristic
            image={fosteringDiversity}
            title="Fostering diversity">
              At Saturdays.AI we believe that AI provides a set of tools that everyone should have access to. We hold that diversity enhances creativity.
          </Characteristic>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center mt-10">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-tangerine">Our Mission</h2>
          <p className="text-center md:text-left text-charcoal text-lg md:text-xl">
            At Saturdays.AI we want to make AI accessible to everyone through the formation of <b>communities</b>.
            <br />
            <br />
            We have designed our flagship programme, AI Saturdays, suitable for anyone that wants to start in AI. It takes students <b>12 to 15 Saturdays</b> to learn ML techniques and end up creating their <b>own project</b> in AI. Everything with the guide and support of the community during the whole process.
            <br />
            <br />
            We also offer courses exclusively for <b>schools and businesses</b> that want to lead in AI and we organise other initiatives such as talks, our own podcast or events in our community to bring AI closer and motivate the creation of real projects. 
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <img src={Code} alt="code" className="w-8" />
            <p className="text-charcoal text-md md:text-xl">
              To promote knowledge of new technologies
            </p>
          </li>
          <li className="flex items-center gap-4">
            <img src={Code} alt="code" className="w-8" />
            <p className="text-charcoal text-md md:text-xl">
              To grant an affordable course price
            </p>
          </li>
          <li className="flex items-center gap-4">
            <img src={Code} alt="code" className="w-8" />
            <p className="text-charcoal text-md md:text-xl">
              To advocate open technology initiatives
            </p>
          </li>
          <li className="flex items-center gap-4">
            <img src={Code} alt="code" className="w-8" />
            <p className="text-charcoal text-md md:text-xl">
              To bring the professional world closer to our community
            </p>
          </li>
          <li className="flex items-center gap-4">
            <img src={Code} alt="code" className="w-8" />
            <p className="text-charcoal text-md md:text-xl">
              To support organizations and events that share our values
            </p>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-10 mt-48">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-center">Our Team</h2>
        <Team />
      </section>
    </>
  )
}

export default About