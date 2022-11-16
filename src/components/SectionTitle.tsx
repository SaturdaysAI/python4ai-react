import { FC, PropsWithChildren } from "react"

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-charcoal w-full text-center">
        {children}
    </h2>
  )
}

const SectionSubtitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h4 className="text-md md:text-lg font-light mb-4 text-charcoal w-full text-center">
        {children}
    </h4>
  )
}

export { SectionTitle, SectionSubtitle }