
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern e-commerce platform with product management, shopping cart, and secure checkout functionality.',
    image: '/ecommerce.webp',
    tech: ['React', 'Tailwind CSS', 'Redux Toolkit', 'dummyjson API'],
    github: 'https://github.com/alaminhossain1997web-tech/megamart.git',
    live: 'https://megamart-ecc.netlify.app/',
  },
  {
    title: 'Charity Website',
    description:
      'A responsive website for a charity organization with donation functionality, Role based access control and event management.',
    image: '/download.jpg',
    tech: ['React', 'JavaScript', 'Firebase', 'Tailwind CSS','Framer Motion'],
    github: '#',
    live: 'https://alpha-omega-inter-church-trust.netlify.app/',
  },
  {
    title: ' Ongoing School Management System',
    description:
      'A complete responsive web app for School management System, Role based access control and event management.',
    image: '/appIcon.jpg',
    tech: ['React', 'mongoDB', 'Express.js', 'Node.js'],
    github: 'https://github.com/alaminhossain1997web-tech/student-management-system.git',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="w-16 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></div>

          <p className="text-lg text-slate-600">
            Here are some of the projects I've worked on recently. Each one
            presented unique challenges and learning opportunities.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-slate-600">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t border-slate-100 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <FaExternalLinkAlt size={14} />
                   Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

