import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { useRouter } from "next/router";
import { TEXTS_BY_LANGUAGE, localeNames } from "../../../locale/constants";

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div>
        <figure>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </figure>
        <div className={styles.appName}>
          <p>tienda</p>
          <p>libre</p>
        </div>
      </div>
      <div className={styles.navbar}>
        <Link href={router.pathname } locale="es-ES">
          {localeNames["es-ES"]}
        </Link>
        <Link href={router.pathname } locale="en-US">
          {localeNames["en-US"]}
        </Link>
        <Link href={router.pathname } locale="pt-BR">
          {localeNames["pt-BR"]}
        </Link>
      </div>
      <div className={styles.navbar}>
        <Link href="./"> {TEXTS_BY_LANGUAGE[router.locale].HEADER.PRODUCTS} </Link>
        <Link href="./tycs"> {TEXTS_BY_LANGUAGE[router.locale].HEADER.TYCS} </Link>
      </div>
    </header>
  );
};

export default Header;
