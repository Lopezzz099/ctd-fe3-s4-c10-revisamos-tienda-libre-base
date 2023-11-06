import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({locale}) => {
  const router = useRouter();

  console.log(locale);

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
        <Link href="/" locale="es-ES">
          ES
        </Link>
        <Link href="/" locale="en-US">
          EN
        </Link>
        <Link href="/" locale="pt-BR">
          PT
        </Link>
      </div>
      {/* <Link href="/" locale="en-US">cambio a ingles</Link> */}
      <div className={styles.navbar}>
        <Link href="./"> Productos destacados</Link>
        <Link href="./tycs"> Tèrminos y condiciones </Link>
      </div>
    </header>
  );
};
export async function getServerSideProps(context) {
  // const { lan } = context.params; 
  console.log(context)

  return {
    props: {
      locale,
    },
  };
}

export default Header;
