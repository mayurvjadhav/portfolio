export const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? "text-green-400" : "text-blue-600"
              }`}
            >
              Hi, I'm Mayur Jadhav
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              I'm passionate about creating beautiful, functional, and
              user-friendly websites. With expertise in modern frontend
              frameworks and backend technologies, I develop seamless digital
              experiences that help businesses grow and users thrive.
            </p>
            <div className="flex gap-4">
              <button
                className={`px-6 py-3 rounded-md ${
                  darkMode
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white font-medium transition-colors duration-200`}
              >
                Download Resume
              </button>
              <a href="#contact">
                <button
                  className={`px-6 py-3 rounded-md border ${
                    darkMode
                      ? "border-blue-400 text-blue-400 hover:bg-blue-900"
                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                  } font-medium transition-colors duration-200 `}
                >
                  Let's Connect
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div
              className={`rounded-full overflow-hidden border-4 ${
                darkMode ? "border-blue-400" : "border-blue-600"
              } w-64 h-64 md:w-80 md:h-80 mx-auto`}
            >
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
