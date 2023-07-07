// header.tsx
import React from "react";
import styles from "./header.module.scss";
import BasicIcon from "../basicIcon/basicIcon";

interface HeaderProps {
  onBurgerMenuClick: () => void;
}

const Header = ({ onBurgerMenuClick }: HeaderProps) => {
  return (
      <>
        <header className={styles.header + " glassmorphism"}>
          <div>
            <button className="white" onClick={onBurgerMenuClick}>
              <BasicIcon name="burger-menu"/>
            </button>
            <a href="#">
              <img src="#" alt="Logo Saline" />
            </a>
          </div>

          <div></div>

          <a href="" className="btn btn-purple-solid-intense">
            <BasicIcon name="profile" />
            Mon profil
          </a>
        </header>
      </>
  );
};

export default Header;
