import React from "react";

const Footer = () => {
  return (
    <div className="py-3 px-2 sm:px-10 bg-amber-700 bg-opacity-10 flex items-center justify-center client">
      <div className="text-xl font-bold">
        <h1>
          made with ❤️ by
          <a
            href="https://github.com/khananas007"
            className=" text-amber-800 text-2xl"
          >
            {" "}
            Anas
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
