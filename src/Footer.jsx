import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-background border-border">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* BRAND */}
          <div>
            <h3 className="text-xl font-bold text-primary">
              Code Web Institute of Technology
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-secondary">
              Practical, career-focused technology education designed to prepare
              students for real-world industry challenges.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li className="cursor-pointer hover:text-primary">About Us</li>
              <li className="cursor-pointer hover:text-primary">Courses</li>
              <li className="cursor-pointer hover:text-primary">Contact</li>
              <li className="cursor-pointer hover:text-primary">Admissions</li>
            </ul>
          </div>

          {/* LEGAL / CREDIT */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide uppercase text-primary">
              Legal & Credits
            </h4>
            <p className="text-sm leading-relaxed text-secondary">
              Code Web Institute of Technology operates as a unit of{" "}
              <span className="font-semibold text-primary">
                Code Web Telecom
              </span>
              , delivering industry-aligned training and professional standards.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-border" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-secondary md:flex-row">
          <p>
            © {new Date().getFullYear()} Code Web Institute of Technology. All
            rights reserved.
          </p>
          <p className="text-xs">
            Powered by{" "}
            <span className="font-semibold text-primary">Code Web Telecom</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
