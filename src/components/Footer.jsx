import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-dark text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          © {currentYear} Brain Teaser by Capivas Africa Ltd. All Rights
          Reserved.
        </p>
        <div className="mt-4">
          <Link
            to="/terms"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
