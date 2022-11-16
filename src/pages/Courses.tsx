import { FC } from "react"
import CourseHero from "../components/CourseHero"
import { CourseDetail } from "../components/CourseInfo"
import { CourseSectionTitle, CourseSectionDescription, CourseSectionImage, CourseSection } from "../components/CourseSection"
import { CourseButton, CTAButton} from "../components/CTAButton"
import PythonCourseHero from "/pythonCourseHero.webp"
import LearningPlatform from "/learningPlatform.webp"
import LearningPath from "/learningPath.png"
import DSFundamentalsImage from "/datascienceFundamentals.webp"
import MLPath from "/machinelearningPath.png"
import DLPath from "/deeplearningPath.png"
import GenerativeAI from "/generativeAI.webp"
import Clock from "../assets/clock.svg"
import Chat from "../assets/chat.svg"
import Certificate from "../assets/certificate.svg"
import Code from "../assets/code.svg"
import Map from "../assets/map.svg"
import Save from "../assets/save.svg"
import { SectionTitle, SectionSubtitle } from "../components/SectionTitle"

const Courses: FC = () => {
  return (
    <div className="mt-20">
      <CourseHero
        title1="Build"
        title2="AI"
        title3="skills online"
        description="Get the skills you need for the future of work!"
        description2="Learn about A.I. from 0, with online courses on Python, data science, machine learning and new technologies."
        image="/coursesHero.webp"
        alt="Python course hero"
        subtitle={false}
        ctaButtons={false}
      />
      <section className="my-36 flex justify-center flex-wrap gap-10">
        <SectionTitle><span className="text-tangerine">What's great</span> about our courses</SectionTitle>
        <CourseDetail
            icon={Map}
            title="Well-structured courses"
            description="Lectures are consistent, informative, and easy to follow."
        />
        <CourseDetail
            icon={Code}
            title="Hands-on exercises"
            description="Each module includes exercises that, in addition to summarizing the key concepts of each module, will guide you through the activities proposed in the lessons of that module."
        />
        <CourseDetail
            icon={Chat}
            title="Peer feedback and community"
            description="The program includes private forums where you can ask your questions and schedule, getting in touch with mentors and peers."
        />
        <CourseDetail
            icon={Clock}
            title="Unlimited access"
            description="You will gain unrivaled knowledge in programming, stadistics, and machine learning- wherever you are. 15-minute online classes that you will be able to watch anywhere."
        />
        <CourseDetail
            icon={Save}
            title="Additional materials"
            description="Mental maps in text to learn more effectively and additional info to keep learning"
        />
        <CourseDetail
            icon={Certificate}
            title="Certificate"
            description="Get a certificate confirming completion of an online lecture or a whole course."
        />

      </section>
      <div className="bg-gray-100 py-20 px-10 rounded-md">
        <SectionTitle><span className="text-tangerine">Choose</span> your learning path</SectionTitle>
        <SectionSubtitle>You can choose different study plans through the courses depending on your knowledge and interests in AI.</SectionSubtitle>
        <CourseSection>
            <CourseSectionImage src={PythonCourseHero} alt="Learning platform" />
            <div className="flex flex-col gap-y-4">
            <CourseSectionTitle>Python 4 <span className="text-tangerine">AI</span></CourseSectionTitle>
            <CourseSectionDescription>
                <b className="mr-3"><i>*in Spanish*</i></b> Learn to program in AI from scratch. We have prepared a customized roadmap to transform your Python skills in a short time, in a fun and less stressful way.
                <br /><br />
                The program is organized in several modules where we will challenge you in a practical way. You will have the opportunity to tell the community about your progress, ask your doubts and program with other people. 
            </CourseSectionDescription>
            <CourseButton to="/python4ai/">Free · Join now</CourseButton>
            </div>
        </CourseSection>
        <CourseSection>
            <div className="flex flex-col gap-y-4">
                <CourseSectionTitle><span className="text-tangerine">DS</span> Fundamentals</CourseSectionTitle>
                <CourseSectionDescription>
                    <b className="mr-3"><i>*in English*</i></b> Learn the foundations of Data Science with this course that includes short explanatory videos of around 5 minutes each along with mental maps in text to learn more effectively, hands-on exercises and a project to learn by doing. You will get peer feedback and a community to learn in good company.
                    <br /><br />
                    Lay the grounds to kick start your Data Science superpowers.
                </CourseSectionDescription>
                <CourseButton to="https://ti.to/saturdaysai/data-science-fundamentals">Free · Join now</CourseButton>
            </div>
            <CourseSectionImage src={DSFundamentalsImage} alt="DS Fundamentals" />
        </CourseSection>
        <CourseSection>
            <CourseSectionImage src={MLPath} alt="Learning platform" />
            <div className="flex flex-col gap-y-4">
            <CourseSectionTitle>Intro. <span className="text-tangerine">Machine Learning</span></CourseSectionTitle>
            <CourseSectionDescription>
                <b className="mr-3"><i>*New!*</i></b> Do you already know Python? Then get into Machine Learning with this customized course: you will learn in a project based way coupled with educational videos and the support of a engaged community of learners. From regressions to random forest while building predictors, you will gain the skills needed to progress in your data related career.
                <br /><br />
                During the course you will get peer feedback and a community to learn in good company, because learning with others while building projects it is the most effective way of learning.
            </CourseSectionDescription>
            <CourseButton to="/master-ia-online/">Pre-register</CourseButton>
            </div>
        </CourseSection>
        <CourseSection>
            <div className="flex flex-col gap-y-4">
            <CourseSectionTitle>Intro. <span className="text-tangerine">Deep Learning</span></CourseSectionTitle>
            <CourseSectionDescription>
                <b className="mr-3"><i>*New!*</i></b> If you already know Python and some Machine Learning, deep dive into Deep Learning with this customized course! You will learn the foundations of Deep Learning in a practical, project based way, coupled with educational videos and the support of an engaged community of learners. From CNN's to Transformers, learn by doing!
                <br /><br />
                During the course you will get peer feedback and a community to learn in good company, because learning with others while building projects it is the most effective way of learning.
            </CourseSectionDescription>
            <CourseButton to="/master-ia-online/">Pre-register</CourseButton>
            </div>
            <CourseSectionImage src={DLPath} alt="Learning path" />
        </CourseSection>
        <CourseSection>
            <CourseSectionImage src={GenerativeAI} alt="Learning platform" />
            <div className="flex flex-col gap-y-4">
            <CourseSectionTitle><span className="text-tangerine">IA Generativa y</span> Prompt Engineering</CourseSectionTitle>
            <CourseSectionDescription>
                <b className="mr-3"><i>*in Spanish*</i></b> Mini-course to learn the foundations of Generative AI and Prompt Engineering in a fun, from scratch way, good for total newbies and AI artists alike.
                <br /><br />
                We cover from a bird-eye POV hot topics like LLMs, Diffusion and of course, what tools and “tricks” we can use to generate what we want.
                <br /><br />
                This particular field (<b>generative AI</b>) is changing superfast, so we are going to keep updating the content often.
            </CourseSectionDescription>
            <CourseButton to="https://saturdays.ai/curso-ia-generativa">Free · Join now</CourseButton>
            </div>
        </CourseSection>
      </div>
    </div>
  )
}

export default Courses