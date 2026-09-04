import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaMobileAlt,
} from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    icon: FaReact,
    items: [ "HTML 5","CSS 3", "Bootstrap", "JavaScript", "React", "TypeScript","Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    icon: FaNodeJs,
    items: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Tools",
    icon: FaGitAlt,
    items: ["Git", "Docker", "Netlify",  "Vercel", "Figma"],
  },
  {
    category: "Other",
    icon: FaMobileAlt,
    items: ["Responsive Design", "Accessibility", "SEO", "Performance"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-lg text-slate-600">
            I'm a passionate developer who loves bridging the gap between design
            and engineering. I build things that look good and work well.
          </p>
        </div>

        {/* Skills*/}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.category}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-blue-600 text-2xl" />
                </div>

                {/* Category */}
                <h3 className="mb-4 text-xl font-semibold text-slate-900">
                  {skill.category}
                </h3>

                {/* Items */}
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;