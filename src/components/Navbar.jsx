export const Navbar = ({ darkMode, setDarkMode }) => {
  setDarkMode((darkMode = true));

  localStorage.setItem("portfolioTheme", darkMode ? "dark" : "light");

  return (
    <nav
      className={`sticky top-0 z-50 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span
              className={`text-xl font-bold ${
                darkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              TiME
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`hover:${
                darkMode ? "text-blue-400" : "text-blue-600"
              } transition-colors duration-200`}
            >
              About
            </a>
            <a
              href="#projects"
              className={`hover:${
                darkMode ? "text-blue-400" : "text-blue-600"
              } transition-colors duration-200`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hover:${
                darkMode ? "text-blue-400" : "text-blue-600"
              } transition-colors duration-200`}
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className={`p-2 rounded-md ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
