export const Skills = ({ darkMode }) => {
  const skills = [
    {
      name: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "axios",
        "redux",
      ],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express"],
    },
    {
      name: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      name: "Version Control",
      skills: ["git/github"],
    },
    // {
    //   name: "DevOps & Tools",
    //   skills: [
    //     "Git",
    //     "GitHub",
    //     "Docker",
    //     "AWS",
    //     "Azure",
    //     "Heroku",
    //     "Netlify",
    //     "Vercel",
    //     "CI/CD",
    //     "Jest",
    //     "Webpack",
    //   ],
    // },
    // {
    //   name: "Design",
    //   skills: [
    //     "Figma",
    //     "Adobe XD",
    //     "Photoshop",
    //     "Illustrator",
    //     "UI/UX Design",
    //     "Responsive Design",
    //     "Wireframing",
    //     "Prototyping",
    //   ],
    // },
  ];

  return (
    <section
      id="skills"
      className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold mb-6 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          } text-center`}
        >
          Skills
        </h2>

        <div
          className={`p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800" : "bg-gray-50"
          } max-w-4xl mx-auto`}
        >
          <div className="flex flex-wrap gap-y-6">
            {skills.map((category, index) => (
              <div key={index} className="w-full md:w-1/2 px-3">
                <h3
                  className={`text-lg font-semibold mb-3 ${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  }`}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? "bg-gray-700 text-blue-300 border border-blue-400/30 hover:border-blue-400/70"
                          : "bg-blue-100 text-blue-800 border border-blue-200 hover:border-blue-300"
                      } transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
