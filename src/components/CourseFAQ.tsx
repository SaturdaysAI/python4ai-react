import { FC, PropsWithChildren } from "react"

interface CourseFAQItemProps {
    question: string,
    answer: string,
    answer2?: string,
    topLine: boolean,
}

const CourseFAQItem : FC<CourseFAQItemProps> = ({ question, answer, answer2, topLine }) => {
    return (
        <div className="flex flex-col gap-y-4">
            <hr className={topLine ? "border-t-2 border-gray-200 mb-4" : "border-t-2 border-gray-200 hidden"} />
            <h3 className="text-3xl text-tangerine mb-2">{question}</h3>
            <p className="text-xl leading-8 font-light text-gunmetal">{answer}</p>
            {answer2 && <p className="mt-4 text-xl leading-8 font-light text-gunmetal">{answer2}</p>}
        </div>
    )
}

const CourseFAQSection : FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <section className="mt-36 px-20">
            <h2 className="text-4xl font-semibold">Preguntas frecuentes</h2>
            <h3 className="text-2xl mt-8 mb-20">Detalles del programa</h3>
            <div className="flex flex-col gap-y-10">
                {children}
            </div>
        </section>
    )
}

export { CourseFAQItem, CourseFAQSection }