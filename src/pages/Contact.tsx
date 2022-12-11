import { FC } from "react"
import BgImage from "/contact-us-img.png"
import GeometryBg1 from '/geometryBg1.png'
import GeometryBg2 from '/geometryBg2.png'

// the contact page is composed by two columns.
// the left column contains the contact form (name, email, subject and message optional) and a submit button
// the right column is just the BgImage over the geometry background
// in tablet and mobile, the columns are stacked
const Contact = () => {
    const inputContainerClass = "flex flex-col gap-2"
    const labelClass = "text-xl font-semibold"
    const inputClass = "border-2 border-gray-300 p-4 rounded-md"

  return (
    <div className="flex gap-10 flex-col xl:flex-row mt-12 lg:mt-0">
        <div className="flex flex-col justify-center w-full md:w-1/3">
            <h3 className="text-xl font-light">
                DO YOU HAVE SOMETHING TO TELL US?
            </h3>
            <h1 className="text-5xl font-semibold mt-4">
                Get In Touch
            </h1>
            <form className="flex flex-col gap-4 mt-12">
                {/* label and input form */}
                <div className={inputContainerClass}>
                    <label htmlFor="name" className={labelClass}>Your name</label>
                    <input type="text" name="name" id="name" className={inputClass} />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="email" className={labelClass}>Your email</label>
                    <input type="email" name="email" id="email" className={inputClass} />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="subject" className={labelClass}>Subject</label>
                    <input type="text" name="subject" id="subject" className={inputClass} />
                </div>
                <div className={inputContainerClass}>
                    <label htmlFor="message" className={labelClass}>Your Message (optional)</label>
                    <textarea name="message" id="message" className={inputClass} />
                </div>
                <button type="submit" className="bg-charcoal text-white p-4 rounded-md font-semibold text-xl">
                    SUBMIT
                </button>
            </form>
        </div>
        <div className="relative flex items-center w-full md:w-2/3">
            <img src={BgImage} alt="contact us" className="w-2/3 mx-auto object-cover" />
            <img src={GeometryBg1} alt="geometry background" className="absolute top-0 left-0" />
            <img src={GeometryBg2} alt="geometry background" className="absolute bottom-0 right-0" />
        </div>
    </div>
  )
}

export default Contact