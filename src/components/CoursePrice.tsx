import { FC } from "react"
import {CTAButton} from "./CTAButton"

const CoursePrice: FC = () => {
    return (
        <div className="flex flex-col gap-y-4 items-center">
            <h2 className="text-4xl font-semibold mb-4 text-center">Precio y acceso</h2>
            <p className="text-xl font-light mb-8 text-center">
                El precio total del programa es de
            </p>
            <div className="flex flex-col gap-y-4 w-72 lg:w-96">
                <h2 className="text-3xl font-semibold mb-4 text-center">Gratuito</h2>
            </div>
            {/* <div className="flex gap-x-20 flex-wrap justify-center">
                <div className="flex flex-col gap-y-4 w-72 lg:w-96">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Individual</h2>
                    <p className="text-xl font-light mb-8 text-center">
                        49 $ (USD)
                    </p>
                </div>
                <div className="flex flex-col gap-y-4 w-72 lg:w-96">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Empresas</h2>
                    <p className="text-xl font-light mb-8 text-center">
                        Contáctanos a team@saturdays.ai
                    </p>
                </div>
            </div> */}
            <p className="text-xl font-light text-center mb-20 lg:w-2/3">
                Con la compra tendrás acceso ilimitado al programa y a todas las sesiones en vivo que se vayan organizando, para siempre.
            </p>
            <CTAButton active={true} to="https://ti.to/saturdaysai/python-4-ai-program">Inscríbete ahora</CTAButton>
        </div>
    )
}

export default CoursePrice