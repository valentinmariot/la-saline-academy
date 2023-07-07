// header.tsx
import React from "react";
import BasicIcon from "../basicIcon/basicIcon";
import InputContainer from "../inputContainer/inputContainer";
import Link from "next/link";
import Image from "next/image";

import styles from "./header.module.scss";

interface HeaderProps {
  onBurgerMenuClick: () => void;
}

const Header = ({ onBurgerMenuClick }: HeaderProps) => {
  return (
    <>
      <header className={styles.header + " glassmorphism"}>
        <div>
          <button className="white" onClick={onBurgerMenuClick}>
            <BasicIcon name="burger-menu" />
          </button>
          <Link href="/" className="logo">
            <Image
              src="/logo_saline-academy.svg"
              alt="Logo de La Saline Academy"
              width={155}
              height={46}
            />
          </Link>
        </div>

        <InputContainer />

        <a href="" className="btn btn-purple-solid-intense">
          <BasicIcon name="profile" />
          Mon profil
        </a>
      </header>
    </>
  );
};

export default Header;
