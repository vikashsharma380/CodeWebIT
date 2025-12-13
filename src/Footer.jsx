import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-secondary">
        &copy; {new Date().getFullYear()} CW Institute. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
