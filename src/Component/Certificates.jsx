
import React from 'react'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { LiaCertificateSolid } from 'react-icons/lia'

const certificates = [
  {
    title: 'Diploma in Business Communication',
    issuer: 'UniAthena',
    date: '29, October 2025',
    link: 'https://drive.google.com/file/d/1i745fCT-jtYhzHQjJCgtn_lTk6kSbmiG/view?usp=sharing',
  },
  {
    title: 'Cyber Hygiene',
    issuer: 'Asia Foundation',
    date: '23 October2025',
    link: 'https://drive.google.com/file/d/1P11koxE8oTemrOfQeq3qcOOFNKqmgHF5/view?usp=sharing',
  },
  {
    title: 'JavaScript Fundamentals',
    issuer: 'FreeCodeCamp',
    date: '2024',
    link: '#',
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Certificates
          </h2>

          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6"></div>

          <p className="text-lg text-slate-600">
            Professional certifications and achievements that reflect my
            continuous learning journey in web development.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                <LiaCertificateSolid className="text-3xl text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {certificate.title}
              </h3>

              <p className="text-slate-600 mb-2">
                Issued By: {certificate.issuer}
              </p>

              <p className="text-sm text-slate-500 mb-6">
                Completed: {certificate.date}
              </p>

              {/* Button */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
              >
                <FaExternalLinkAlt />
                Show Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
