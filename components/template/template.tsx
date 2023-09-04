import React, { FC, useEffect, useState } from "react";
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

  useEffect(() => {
    // Fonction pour détecter la largeur de l'écran et mettre à jour isMenuMoved
    function handleResize() {
      const isMobile = window.innerWidth <= 768; // Vous pouvez ajuster cette valeur en fonction de vos besoins
      setMenuMoved(isMobile);
    }
    // Ajoute un écouteur d'événement pour surveiller les changements de taille de l'écran
    window.addEventListener("resize", handleResize);
    // Appelez handleResize au chargement initial de la page
    handleResize();
    // Nettoyez l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

        <svg
          id="TopWhiteOvalBlurry"
          width="300"
          height="587"
          viewBox="0 0 300 587"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.6"
            cx="-10.2612"
            cy="243.427"
            rx="305.736"
            ry="346.584"
            transform="rotate(-17.484 -10.2612 243.427)"
            fill="url(#paint0_radial_447_4929)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_447_4929"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-10.2613 243.427) rotate(90) scale(346.584 305.736)"
            >
              <stop stopColor="white" stopOpacity="0.75" />
              <stop offset="1" stopColor="#ADADAD" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          id="whiteOvalBlurry"
          width="334"
          height="339"
          viewBox="0 0 334 339"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            opacity="0.6"
            cx="309.739"
            cy="343.427"
            rx="305.736"
            ry="346.584"
            transform="rotate(-17.484 309.739 343.427)"
            fill="url(#paint0_radial_303_12591)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_303_12591"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(309.739 343.427) rotate(90) scale(346.584 305.736)"
            >
              <stop stopColor="#F1E7FE" />
              <stop offset="1" stopColor="#F1E7FE" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </main>
    </>
  );
};

export default Template;
