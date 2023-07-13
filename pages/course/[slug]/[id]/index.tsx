import Head from "next/head";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import React, { useState } from "react";

const Course = () => {
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
          <div className="content border">
            {/*// content*/}
            <h1>Hey from courses</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Course;
