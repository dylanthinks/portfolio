import Link from "next/link";
import groq from "groq";
import client from "../client";
import Head from "next/head";
import Image from "next/image";
import profile from "../public/profile.jpg";

import Layout, { siteTitle } from "../components/layout";

const Index = ({ posts }) => {
  return (
    <Layout home>
      <div>
        <h1>Hey, I'm Dylan. I develop websites.</h1>
        <h2>I'm here to optimize your web presence. 🚀</h2>
        <div>
          <p className='text'>
            I'm a front-end developer specializing in building high-performing
            websites. For over a decade, I had many opportunities to work with
            various web technologies. For more than 3 years, I have worked in
            anti-violence advocacy at{" "}
            <a href='https://thedeafhotline.org'>the deaf hotline</a>. I
            currently build and maintain websites at{" "}
            <a href='https://chilmarketing.com'>Chilmarketing</a>. On the side,
            I write about deaf identity politics and work on React projects.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={profile}
          alt='Profile'
          priority={true}
          className=''
          width={250}
          height={375}
          placeholder='blur'
        />
      </div>
    </Layout>
  );
};

export default Index;
