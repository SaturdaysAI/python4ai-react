import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "/logoSaturdays.webp"
import NavLink from "./NavLink"

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex flex-row justify-between items-center py-20">
      {/* Logo, main links and log in link */}
      <Link to="/">
        <img src={Logo} alt="Saturdays AI Logo" className="h-12" />
      </Link>
      <div className="flex flex-row space-x-10">
        <NavLink to="https://saturdays.ai/master-ia-online/">Máster</NavLink>
        <NavLink to="https://saturdays.ai/online/">Courses</NavLink>
        <NavLink to="https://saturdays.ai/cities/">Cities</NavLink>
        <NavLink to="https://saturdays.ai/proyectos/">Projects</NavLink>
        <NavLink to="https://saturdays.ai/create-your-own-ai-saturdays/">Join Us</NavLink>
        {/* burger menu */}
        <div className="flex flex-col justify-center relative">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center gap-x-2">
            <svg className="w-8 h-8 stroke-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            {/* down arrow icon */}
            <svg className="w-4 h-4 stroke-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* dropdown menu */}
          {/* transition max height */}
          <div className={`absolute top-10 bg-white rounded-lg shadow-lg overflow-hidden w-40 transition-all duration-300 ease-in-out z-10
                          ${isOpen ? "max-h-96" : "max-h-0 pointer-events-none"}`}>
              <NavLink to="https://saturdays.ai/about/">About</NavLink>
              <NavLink to="https://saturdays.ai/podcast/">Podcast</NavLink>
              <NavLink to="https://saturdays.ai/blog-y-noticias/">Blog</NavLink>
              <NavLink to="https://saturdays.ai/ai-saturdays/">Ai Saturdays</NavLink>
              <NavLink to="https://saturdays.ai/ai-4-schools/">Ai 4 Schools</NavLink>
              <NavLink to="https://saturdays.ai/fridais-4-business/">Ai 4 Business</NavLink>
              <NavLink to="https://saturdays.ai/partners/">Partners</NavLink>
              <NavLink to="https://saturdays.ai/contact/">Contact</NavLink>
            </div>
        </div>
      </div>
      <div className="flex flex-row space-x-10">
        <NavLink to="https://community.saturdays.ai/home?_ga=2.61332911.2030651977.1667657747-1663343911.1624126094">Log In</NavLink>
      </div>
    </nav>
  )
}

export default Navbar