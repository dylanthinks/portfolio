import React from "react";
import Image from "next/image";
import profile from "../public/images/profile.jpg";

const About = () => {
  return (
    <div className="container max-w-4xl px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-6xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey, I'm Dylan.
          </h1>
          <h2 className="pt-2 px-4 lg:px-0 text-3xl dark:text-white">
            I'm here to help launch and expand your web presence.
          </h2>
          <div className="mt-4 text-gray-800 dark:text-white px-20 lg:px-0">
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={375}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
