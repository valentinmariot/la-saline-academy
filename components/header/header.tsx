// header.tsx
import React from "react";
import BasicIcon from "../basicIcon/basicIcon";
import InputContainer from "../inputContainer/inputContainer";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import styles from "./header.module.scss";

interface HeaderProps {
  onBurgerMenuClick: () => void;
}

const Header = ({ onBurgerMenuClick }: HeaderProps) => {
  const handleSignOut = () => {
    signOut();
  };

  const handleChangeSearch = (e: any) => {
    console.log(e);
  };

  return (
    <>
      <header className={styles.header + " glassmorphism"}>
        <div>
          <button className="white dflex" onClick={onBurgerMenuClick}>
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
        <form id="searchbar">
          <InputContainer
            id="search"
            placeholder="search"
            icon="search"
            type="text"
            required
            onChange={(e: any) => handleChangeSearch(e)}
          />
        </form>

        <Link href="/profil" className="btn btn-purple-solid-intense">
          <BasicIcon name="profile" />
          Mon profil
        </Link>
        <button
          onClick={handleSignOut}
          className="btn btn-purple-solid-intense"
        >
          <BasicIcon name="logout" />
          Se deconnecter
        </button>
      </header>
    </>
  );
};

export default Header;
