import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-around font-medium text-sm border-t-2 px-6 py-8 border-solid border-black md:px-24 md:text-lg">
      <span>
        {new Date().getFullYear().toString()} &copy; All Rights Reserved
      </span>
      <span>
        Crafted with ❤️ by{" "}
        <span className="underline underline-offset-2">Yash</span>
      </span>
    </footer>
  );
};

export default Footer;
