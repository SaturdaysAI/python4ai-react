import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import { FC, lazy, Suspense } from "react"
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/navigation/Footer"
import Layout from "./components/layout/Layout"
import ErrorPage from "./pages/ErrorPage"
import Courses from "./pages/Courses"
import About from "./pages/About"
import MasterIAOnline from "./pages/MasterIAOnline"
import Cities from "./pages/Cities"
import Contact from "./pages/Contact"
const Home = lazy(() => import("./pages/Home"))
const PythonCourse = lazy(() => import("./pages/PythonCourse"))

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/python4ai" element={<PythonCourse />} />
            <Route path="/online" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/master-ia-online" element={<MasterIAOnline />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
      <Footer />
    </Router>
  )
}

export default App
