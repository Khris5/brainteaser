import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-bold text-brand-dark hover:text-brand-red transition-colors duration-300"
        >
          Brain<span className="text-brand-red">Teaser</span>
        </NavLink>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-brand-red" : "text-brand-dark"
              } hover:text-brand-red transition-colors duration-300`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              `text-lg font-medium ${
                isActive ? "text-brand-red" : "text-brand-dark"
              } hover:text-brand-red transition-colors duration-300`
            }
          >
            Terms
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
