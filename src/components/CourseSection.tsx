import { FC, PropsWithChildren } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CourseSectionTitle: FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <h2 className="text-4xl font-semibold mb-4">{children}</h2>
    )
}

const CourseSectionDescription: FC<PropsWithChildren<{}>> = ({children}) => {
    return (
        <p className="text-xl font-light mb-8">
            {children}
        </p>
    )
}

const CourseSectionImage: FC<{src: string, alt: string}> = ({src, alt}) => {
    return (
        <LazyLoadImage src={src} alt={alt} className="w-full order-first lg:-order-none" />
    )
}

const CourseSection: FC<PropsWithChildren<{}>> = ({children}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10 items-center px-10 my-32">
        {children}
    </section>
  )
}

export { CourseSectionTitle, CourseSectionImage, CourseSectionDescription, CourseSection }