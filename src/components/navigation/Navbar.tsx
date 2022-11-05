import { FC, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "/logoSaturdays.webp"

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const textLink = "text-charcoal text-serif block px-3 py-2 font-semibold hover:text-gray-600 transition-colors duration-200"

  return (
    <nav className="flex flex-row justify-between items-center py-20 px-10">
      {/* Logo, main links and log in link */}
      <Link to="/">
        <img src={Logo} alt="Saturdays AI Logo" className="h-12" />
      </Link>
      <div className="flex flex-row space-x-10">
        <a href="https://saturdays.ai/master-ia-online/" target="_blank" rel="noreferrer">
          <p className={textLink}>Máster</p>
        </a>
        <a href="https://saturdays.ai/online/" target="_blank" rel="noreferrer">
          <p className={textLink}>Courses</p>
        </a>
        <a href="https://saturdays.ai/cities/" target="_blank" rel="noreferrer">
          <p className={textLink}>Cities</p>
        </a>
        <a href="https://saturdays.ai/proyectos/" target="_blank" rel="noreferrer">
          <p className={textLink}>Projects</p>
        </a>
        <a href="https://saturdays.ai/create-your-own-ai-saturdays/" target="_blank" rel="noreferrer">
          <p className={textLink}>Join Us</p>
        </a>
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
          <div className={`absolute top-10 bg-white rounded-lg shadow-lg overflow-hidden w-40 transition-all duration-300 ease-in-out
                          ${isOpen ? "max-h-96" : "max-h-0 pointer-events-none"}`}>
              <a href="https://saturdays.ai/master-ia-online/" target="_blank" rel="noreferrer">
                <p className={textLink}>About</p>
              </a>
              <a href="https://saturdays.ai/online/" target="_blank" rel="noreferrer">
                <p className={textLink}>Podcast</p>
              </a>
              <a href="https://saturdays.ai/cities/" target="_blank" rel="noreferrer">
                <p className={textLink}>Blog</p>
              </a>
              <a href="https://saturdays.ai/proyectos/" target="_blank" rel="noreferrer">
                <p className={textLink}>Ai Saturdays</p>
              </a>
              <a href="https://saturdays.ai/proyectos/" target="_blank" rel="noreferrer">
                <p className={textLink}>Ai 4 Schools</p>
              </a>
              <a href="https://saturdays.ai/proyectos/" target="_blank" rel="noreferrer">
                <p className={textLink}>Ai 4 Business</p>
              </a>
              <a href="https://saturdays.ai/proyectos/" target="_blank" rel="noreferrer">
                <p className={textLink}>Partners</p>
              </a>
              <a href="https://saturdays.ai/proyectos/" target="_blank" rel="noreferrer">
                <p className={textLink}>Contact</p>
              </a>
            </div>
        </div>
      </div>
      <div className="flex flex-row space-x-10">
        <a href="https://community.saturdays.ai/home?_ga=2.61332911.2030651977.1667657747-1663343911.1624126094" target="_blank" rel="noreferrer">
          <p className={textLink}>Log In</p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar