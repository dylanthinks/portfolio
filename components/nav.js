import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "../constants/data";
import styles from "../styles/nav.module.css";

export default function Nav() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <h1>{userData.name}</h1>
              <p>{userData.designation}</p>
            </a>
          </Link>
        </div>

        <div className={styles.navMenu}>
          <Link href='/about'>
            <a
              className={`text-base  ${
                router.asPath === "/about" ? "font-bold" : "font-bold"
              }`}
            >
              About
              {router.asPath === "/about" && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className=''
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                  />
                </svg>
              )}
            </a>
          </Link>

          <Link href='/work'>
            <a
              className={`text-base  ${
                router.asPath === "/work" ? "font-bold " : "font-bold"
              }`}
            >
              Work
              {router.asPath === "/work" && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-arrow-down inline-block h-3 w-3'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                  />
                </svg>
              )}
            </a>
          </Link>

          <Link href='/blog'>
            <a
              className={`text-base  ${
                router.asPath === "/blog" ? "font-bold " : "font-bold"
              }`}
            >
              Blog{" "}
              {router.asPath === "/blog" && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-arrow-down inline-block h-3 w-3'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z'
                  />
                </svg>
              )}
            </a>
          </Link>
        </div>

        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className={styles.button}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              stroke='currentColor'
              className={styles.icon}
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1}
                  d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                />
              )}
            </svg>
          )}{" "}
        </button>
      </div>
    </nav>
  );
}
