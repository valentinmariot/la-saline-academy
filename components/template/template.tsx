import React, { FC, useState } from "react";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import Head from "next/head";

interface TemplateProps {
  children: React.ReactNode;
  title: string;
}

const Template: FC<TemplateProps> = ({ children, title }) => {
  const [isMenuMoved, setMenuMoved] = useState(false);

  const handleBurgerMenuClick = () => {
    setMenuMoved(!isMenuMoved);
  };

  return (
    <>
      <Head>
        <title>{title} - La Saline Academy</title>
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
          <div className="content border">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Template;
