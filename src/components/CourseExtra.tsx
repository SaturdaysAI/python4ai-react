import { FC, PropsWithChildren } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

interface CourseExtraItemProps {
    icon: string,
    title: string,
    description: string,
}

const CourseExtraItem : FC<CourseExtraItemProps> = ({icon, title, description}) => {
    return (
        <div className="flex flex-col gap-y-4 w-64 md:w-80 lg:w-96 xl:w-[30rem]">
            <LazyLoadImage src={icon} alt={title} className="mx-auto h-24 w-24" />
            <h2 className="text-4xl font-semibold mb-4 text-center">{title}</h2>
            <p className="text-xl font-light mb-8 text-center">
                {description}
            </p>
        </div>
    )
}

const CourseExtra : FC<PropsWithChildren<{title: string}>> = ({title, children}) => {
    return (
        <section>
            <h2 className="text-5xl font-semibold text-center">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 items-center justify-items-center px-10 my-28">
                {children}
            </div>
        </section>
    )
}

export { CourseExtra, CourseExtraItem }