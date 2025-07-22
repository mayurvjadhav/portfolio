import { Link } from "react-router-dom";

export const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Full-Stack Chat Application",
      description:
        "A full-stack Chat application with React, Node.js and MongoDB",
      tags: ["React", "Node.js", "MongoDB"],
      image: "Chatty_Screenshot_69.jpg",
      link: "https://full-stack-chat-app-chatty-d5w5.onrender.com/",
    },
    {
      id: 2,
      title: "Link Shortner (NOT HOSTED)",
      description:
        "Full Stack URL Shortener with React JS with Tailwind CSS, Supabase, Shadcn UI, With Analytics",
      tags: ["React.js", "Supabase", "Tailwind CSS"],
      image: "shrinkly.jpg",
      // link: "",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time responsive weather tracking forecasts",
      tags: ["JavaScript", "OpenWeather API", "React.js"],
      image: "Weather_Screenshot_69.jpg",
      link: "https://mayurvjadhav.github.io/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl font-bold mb-2 ${
            darkMode ? "text-blue-400" : "text-blue-600"
          } text-center`}
        >
          Projects
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          expertise in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a href={project.link} target="_blank">
              <div
                key={project.id}
                className={`rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 hover:shadow-blue-400/20"
                    : "bg-white hover:shadow-blue-600/20"
                }`}
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <button
                        className={`w-full py-2 rounded ${
                          darkMode
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-blue-600 hover:bg-blue-700"
                        } text-white font-medium transition-colors duration-200`}
                        onClick={() => window.open(project.link, "_blank")}
                      >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p
                    className={`mb-4 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded ${
                          darkMode
                            ? "bg-gray-700 text-blue-300"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
