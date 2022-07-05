import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";

const About = () => {
  return (
    <div className='container  px-8 lg:px-4 pt-4 mx-auto'>
      <div className='lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left'>
        <div className='lg:px-4 lg:mt-12 '>
          <h1 className='text-5xl px-4 md:px-0 font-bold text-gray-900 lg:text-4xl dark:text-white'>
            Hey, I'm Dylan. I develop websites.
          </h1>
          <h2 className='pt-2 px-16 lg:px-0 text-2xl dark:text-white'>
            I'm here to optimize your web presence. 🚀
          </h2>
          <div className='mt-4 text-gray-800 dark:text-white px-4 md:px-10 lg:px-0'>
            <p className='mb-4'>
              I'm a front-end developer specializing in building high-performing
              websites. For over a decade, I had many opportunities to work with
              various web technologies. For more than 3 years, I have worked in
              anti-violence advocacy at{" "}
              <a
                href='https://thedeafhotline.org'
                className='underline font-semibold hover:no-underline'
              >
                the deaf hotline
              </a>
              . I currently build and maintain websites at{" "}
              <a
                href='https://chilmarketing.com'
                className='underline font-semibold hover:no-underline'
              >
                Chilmarketing
              </a>
              . On the side, I write about deaf identity politics and work on
              React projects.
            </p>
          </div>
        </div>
        <div className='flex-shrink-0 lg:mt-12 lg:px-4 mb-10'>
          <Image
            src={profile}
            alt='Profile'
            priority={true}
            className='rounded-3xl hero-pattern shadow-md'
            width={250}
            height={375}
            placeholder='blur'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
