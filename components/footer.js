import styles from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <p>
          Made with <a href='https://nextjs.org'>Nextjs</a>
        </p>
        <div>
          <p>
            Contact{" "}
            <a href='mailto:dylanthinks@gmail.com'>dylanthinks@gmail.com</a>
          </p>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a
                href='https://www.linkedin.com/in/dylanhinks/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href='https://github.com/dylanthinks'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
