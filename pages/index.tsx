import BasicIcon from "@/components/basicIcon/basicIcon";
import Head from "next/head";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import React, { useState } from "react";

const Home = () => {
  const [isMenuMoved, setMenuMoved] = useState(false);

  const handleBurgerMenuClick = () => {
    setMenuMoved(!isMenuMoved);
  };
  return (
    <>
      <Head>
        <title>Accueil - La Saline Academy</title>
      </Head>
      <Header onBurgerMenuClick={handleBurgerMenuClick} />
      <main>
        <MenuLateral isMenuMoved={isMenuMoved} />
        <div
          className={
            "container " +
            `${isMenuMoved ? styles.menuMoved : "smallContainer"}`
          }
        >
          <div className="content border">{/*// content*/} hey</div>
        </div>
      </main>
    </>
  );
};

export default Home;
