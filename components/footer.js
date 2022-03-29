import * as React from "react";

const Footer = () => {
  return (
    <div className="flex-1 justify-between mt-12 lg:mt-18 sm:py-12 py-6 px-6 items-end">
      <div className="max-w-full px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-4 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Made with Nextjs and Tailwind CSS</p>
          <div className="flex pt-2 lg:pt-0">
            <p>
              Email me at{" "}
              <a
                href="mailto:dylanthinks@gmail.com"
                className="underline hover:no-underline"
              >
                dylanthinks@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://twitter.com/signscloser"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/dylanhinks/"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dylanthinks"
              className="transition-colors hover:text-yellow-500"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
