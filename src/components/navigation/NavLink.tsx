import { FC, PropsWithChildren } from 'react'

const NavLink : FC<PropsWithChildren<{to: string, inFooter?: boolean}>> = ({ to, children, inFooter }) => {
  return (
    <a href={to} target="_blank" className="font-medium text-gray-700 hover:text-tangerine">
      <p className={`text-serif block px-3 py-2 hover:text-gray-600 transition-colors duration-200
                     ${inFooter ? "font-normal text-charcoal-light text-sm" : "text-charcoal font-semibold text-lg"}`}>
        {children}
      </p>
    </a>
  )
}

export default NavLink