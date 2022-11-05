import { FC, PropsWithChildren } from 'react'

const CTAButton: FC<PropsWithChildren<{active: boolean}>> = ({children, active}) => {
    return (
        <button className={`rounded-lg py-3 px-8 text-lg font-semibold border-2 w-fit
        ${active ? "border-tangerine text-tangerine" : "border-charcoal line-through"}`}>
            {children}
        </button>
    )
}

export default CTAButton