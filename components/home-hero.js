import Image from "next/image";
import profile from "../public/profile.jpg";

import styles from "../styles/components/home.module.css";

const HomeHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Hey, I'm Dylan.</h1>
        <h2>I develop websites. I'm here to optimize your web presence. 🚀</h2>
        <div>
          <p className={styles.p}>
            I'm a front-end developer interested in building high-performing
            websites. For over a decade, I had many opportunities to work with
            various web technologies. Over the past 3 years, I have worked in
            anti-violence advocacy at{" "}
            <a href='https://thedeafhotline.org'>the deaf hotline</a>. I also
            currently build and maintain Wordpress websites at Revolutions Web
            Co. On the side, I write about deaf identity politics and work on
            React projects.
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={profile}
          alt='Profile'
          priority={true}
          className={styles.profile}
          width={250}
          height={375}
          placeholder='blur'
        />
      </div>
    </div>
  );
};

export default HomeHero;
