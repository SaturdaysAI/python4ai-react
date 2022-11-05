import { FC, useState } from "react"
import { Link } from "react-router-dom"
import NavLink from "./NavLink"
import Logo from "/logoSaturdays.webp"
import FacebookLogo from "../../assets/social/facebook.svg"
import TwitterLogo from "../../assets/social/twitter.svg"
import YoutubeLogo from "../../assets/social/youtube.svg"
import GitHubLogo from "../../assets/social/github.svg"
import InstagramLogo from "../../assets/social/instagram.svg"
import LinkedInLogo from "../../assets/social/linkedin.svg"

const Footer: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const socialIconStyle = "w-6 h-6 text-white hover:text-tangerine transition-colors duration-200"

  return (
    <footer className="flex flex-row justify-between items-center py-20 px-10 bg-gunmetal mt-20">
      {/* Logo, main links and log in link */}
      <Link to="/">
        <img src={Logo} alt="Saturdays AI Logo" className="h-12" />
      </Link>
      <div className="flex flex-row space-x-10">
        <NavLink inFooter={true} to="https://saturdays.ai/master-ia-online/">Máster</NavLink>
        <NavLink inFooter={true} to="https://saturdays.ai/online/">Courses</NavLink>
        <NavLink inFooter={true} to="https://saturdays.ai/cities/">Cities</NavLink>
        <NavLink inFooter={true} to="https://saturdays.ai/proyectos/">Projects</NavLink>
        <NavLink inFooter={true} to="https://saturdays.ai/create-your-own-ai-saturdays/">Join Us</NavLink>
        {/* burger menu */}
        <div className="flex flex-col justify-center relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center gap-x-2">
            <svg className="w-8 h-8 stroke-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            {/* down arrow icon */}
            <svg className="w-4 h-4 stroke-charcoal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* dropdown menu */}
          {/* transition max height */}
          <div className={`absolute top-10 bg-white rounded-lg shadow-lg overflow-hidden w-40 transition-all duration-300 ease-in-out z-10
                          ${isOpen ? "max-h-96" : "max-h-0 pointer-events-none"}`}>
              <NavLink inFooter={true} to="https://saturdays.ai/about/">About</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/podcast/">Podcast</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/blog-y-noticias/">Blog</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/ai-saturdays/">Ai Saturdays</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/ai-4-schools/">Ai 4 Schools</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/fridais-4-business/">Ai 4 Business</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/partners/">Partners</NavLink>
              <NavLink inFooter={true} to="https://saturdays.ai/contact/">Contact</NavLink>
            </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center space-x-10 space-y-4">
        {/* social icons -> if they don't fit, they're put below them */}
        <a href="https://www.facebook.com/pg/AISaturdaysEsp/posts/" target="_blank" rel="noreferrer">
          <img src={FacebookLogo} alt="Facebook Logo" className={socialIconStyle} />
        </a>
        <a href="https://twitter.com/AISaturdays_ES" target="_blank" rel="noreferrer">
          <img src={TwitterLogo} alt="Twitter Logo" className={socialIconStyle} />
        </a>
        <a href="https://www.youtube.com/channel/UCPsMstZvlGJ7dOxWiAaRurQ" target="_blank" rel="noreferrer">
          <img src={YoutubeLogo} alt="Youtube Logo" className={socialIconStyle} />
        </a>
        <a href="https://github.com/saturdaysai" target="_blank" rel="noreferrer">
          <img src={GitHubLogo} alt="GitHub Logo" className={socialIconStyle} />
        </a>
        <a href="https://www.instagram.com/ai_saturdays_global/" target="_blank" rel="noreferrer">
          <img src={InstagramLogo} alt="Instagram Logo" className={socialIconStyle} />
        </a>
        <a href="https://www.linkedin.com/school/18553937" target="_blank" rel="noreferrer">
          <img src={LinkedInLogo} alt="LinkedIn Logo" className={socialIconStyle} />
        </a>
      </div>
    </footer>
  )
}

export default Footer