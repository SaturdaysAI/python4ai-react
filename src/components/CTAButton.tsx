import { FC, PropsWithChildren } from 'react'
interface CourseButtonProps {
    active?: boolean,
    to: string,
    orangeBg?: boolean
}

const CTAButton: FC<PropsWithChildren<CourseButtonProps>> = ({children, active, to}) => {
    return (
        <a href={to} className={`rounded-lg py-3 px-8 text-lg font-semibold border-2 w-fit
        ${active ? "border-tangerine text-tangerine" : "border-charcoal line-through"}`}>
            {children}
        </a>
    )
}

const CourseButton: FC<PropsWithChildren<CourseButtonProps>> = ({children, to, orangeBg}) => {
    return (
        <a href={to} className={`rounded-full py-4 px-8 text-lg font-normal  w-fit
                               text-white mx-auto lg:mx-0 hover:scale-105 transition-transform duration-200
                               ${orangeBg !== undefined && orangeBg === true ?
                               "bg-tangerine border-0" :
                               "bg-charcoal border-2"}`}>
            {children}
        </a>
    )
}

export { CourseButton, CTAButton }