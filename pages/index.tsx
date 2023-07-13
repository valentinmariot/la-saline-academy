import Head from "next/head";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ListingCours from "@/components/cours/ListingCours";

const Home = () => {
  const session = useSession();
  const [isMenuMoved, setMenuMoved] = useState(false);

  const handleBurgerMenuClick = () => {
    setMenuMoved(!isMenuMoved);
  };

  if (session.status === "authenticated") {
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
              <ListingCours />
            </div>
          </div>
        </main>
      </>
    );
  } else if (session.status === "unauthenticated") {
    return (
      <div className="dflexcolumn">
        <h1>Landing page</h1>
        <Link
          href="/authentification/login"
          className="btn btn-purple-link hover-effect"
        >
          Se connecter
        </Link>
        <Link
          href="/authentification/register"
          className="btn btn-purple-solid-intense"
        >
          Inscription
        </Link>
      </div>
    );
  }
};
export default Home;
