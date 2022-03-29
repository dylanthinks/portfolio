import React from "react";
import Image from "next/image";
import profile from "../public/images/profile.jpg";

const About = () => {
  return (
    <div className="container max-w-4xl px-4 pt-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-6xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Hey, I'm Dylan.
          </h1>
          <h2 className="pt-2 px-4 lg:px-0 text-2xl dark:text-white">
            I'm here to help launch and expand your web presence. Let's make the
            world a better place together. 🚀
          </h2>
          <div className="mt-4 text-gray-800 dark:text-white px-10 lg:px-0">
            <p className="mb-4">
              I've come back to web development after years of anti-violence
              advocacy for ADWAS. Currently developing websites with React,
              working for non-profit deaf advocacy to make accessibile
              materials, and in my free time, writing on deaf studies and
              political philosophy or teaching myself Framer. New to Next.js,
              Tailwindcss and Framer. I will be updating this site with posts
              and my work.
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
