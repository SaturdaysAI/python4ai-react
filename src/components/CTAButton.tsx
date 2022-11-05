import { FC, PropsWithChildren } from 'react'

const CTAButton: FC<PropsWithChildren<{active: boolean, to: string}>> = ({children, active, to}) => {
    return (
        <a href={to} className={`rounded-lg py-3 px-8 text-lg font-semibold border-2 w-fit
        ${active ? "border-tangerine text-tangerine" : "border-charcoal line-through"}`}>
            {children}
        </a>
    )
}

export default CTAButton