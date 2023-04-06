import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>BLOG</span>
      </Link>
      <nav>
        <Link
          href="https://github.com/mehmetpekcan/nextjs-youtube-course/tree/02-layout"
          target="_blank"
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
