
import { HiBars3, HiXMark, } from "react-icons/hi2";
import { FaGithub, FaLinkedinIn, FaArrowRight, FaDownload, FaTerminal  } from "react-icons/fa";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Link } from "react-router";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

const App = () => {
  


  return (
    <>
      {/* Navbar Start */}
      <Navbar/>
      {/* Navbar End */}

      {/* Hero Section Start */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-300 opacity-20 blur-3xl"></div>

        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-purple-300 opacity-20 blur-3xl"></div>

        <div className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-pink-300 opacity-20 blur-3xl"></div>

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Available for new opportunities
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
                Building digital <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  experiences
                </span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-slate-600">
                I'm a full-stack developer specializing in building exceptional
                digital experiences. Currently focused on creating accessible,
                human-centered products.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
                >
                  View Work
                  <FaArrowRight size={14} />
                </a>

                <Link
                  to="https://docs.google.com/document/d/1_5xwgNCQZY1RUYhqWBrNdTkLWuJ8D7eN/edit"
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  <FaDownload size={14} />
                  Resume
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-md">

                {/* Code Card */}
                <div className="rotate-3 rounded-2xl bg-slate-900 shadow-2xl transition duration-500 hover:rotate-0">

                  {/* Top Dots */}
                  <div className="flex h-8 items-center gap-2 border-b border-slate-700 px-4">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Code Area */}
                  <div className="p-6 font-mono text-sm text-slate-300">
                    <p>
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-blue-400">developer</span> = {"{"}
                    </p>

                    <p className="pl-4">
                      name:{" "}
                      <span className="text-green-400">
                        "Al-Amin Hossain"
                      </span>
                      ,
                    </p>

                    <p className="pl-4">
                      role:{" "}
                      <span className="text-green-400">
                        "Full Stack Developer"
                      </span>
                      ,
                    </p>

                    <p className="pl-4">
                      skills: [
                      <span className="text-green-400">"React"</span>,
                      <span className="text-green-400"> "Node.js"</span>,
                      <span className="text-green-400"> "MongoDB"</span>
                      ]
                    </p>

                    <p className="pl-4">
                      passion:{" "}
                      <span className="text-green-400">
                        "Building Modern UI"
                      </span>
                    </p>

                    <p>{"};"}</p>

                    <br />

                    <p>
                      <span className="text-blue-400">developer</span>.
                      <span className="text-yellow-300">code()</span>;
                    </p>

                    <span className="mt-2 inline-block h-4 w-2 animate-pulse bg-slate-400"></span>
                  </div>
                </div>

                {/* Floating Icon */}
                <div className="absolute -right-6 -top-6 rounded-xl border border-slate-100 bg-white p-4 shadow-xl">
                  <FaTerminal className="text-3xl text-blue-600" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Hero Section End */}


      <About />
      <Contact/>
      <Footer/>

    </>

  )
}

export default App
