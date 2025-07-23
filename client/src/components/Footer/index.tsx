import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-darkText py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">
            <span className="text-primary">Dev</span>
            <span className="text-accent">Civitas</span>
          </h2>
          <p className="text-sm">
            Where your code becomes your identity. Join as a Civis, learn,
            build, and connect with Socius.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Get Started
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Stay Connected
          </h3>
          <p className="text-sm mb-2">Follow us on social media for updates:</p>
          <div className="flex space-x-4">
            <a href="#" className="text-accent hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-accent hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="text-accent hover:text-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-mutedGreen">
        © {new Date().getFullYear()} DevCivitas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
