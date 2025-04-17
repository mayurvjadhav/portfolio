export const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-6 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        fishes
      </div>
    </footer>
  );
};
