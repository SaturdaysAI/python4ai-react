import { FC, PropsWithChildren, useEffect, useState } from 'react'

interface NavLinkProps {
  to: string,
  inFooter?: boolean,
  currentRoute?: string
}

const NavLink : FC<PropsWithChildren<NavLinkProps>> = ({ to, children, inFooter, currentRoute }) => {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    if (currentRoute !== undefined && currentRoute === to) {
      setIsActive(true)
    }
  }, [])

  return (
    <a href={to} className="font-medium hover:text-tangerine">
      <p className={`text-serif block px-3 py-2 hover:text-gray-600 transition-colors duration-200
                     ${inFooter ? "font-normal text-charcoal-light text-sm" : "font-semibold text-lg"}
                     ${isActive ? "text-tangerine" : "text-charcoal"}`}>
        {children}
      </p>
    </a>
  )
}

export default NavLink