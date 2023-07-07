// menuLateral.tsx
import React from "react";
import styles from "./menuLateral.module.scss";
import BasicIcon from "../basicIcon/basicIcon";
import Link from "next/link";

interface MenuLateralProps {
  isMenuMoved: boolean;
}

const MenuLateral = ({ isMenuMoved }: MenuLateralProps) => {
  return (
    <>
      <aside
        className={`${styles.menuLat} ${
          isMenuMoved ? styles.menuMoved : "menuOpen"
        }`}
      >
        <ul className="menu glassmorphism border">
          <li>
            <Link href="/" className="hover-effect">
              Academy
            </Link>
          </li>
          <li>
            <Link href="/quick-notes" className="hover-effect">
              Quick notes
            </Link>
          </li>
          <li>
            <Link href="/challenges" className="hover-effect">
              Challenges
            </Link>
          </li>
          <li>
            <Link href="/forum" className="hover-effect">
              Forum
            </Link>
          </li>
        </ul>
        <div className="footer">
          <div className="liens">
            <Link href="/offres" className="hover-effect">
              Offres
            </Link>
            <Link href="/contact" className="hover-effect">
              Nous contacter
            </Link>
            <Link href="/mentions-legales" className="hover-effect">
              Mentions légales
            </Link>
            <Link href="/conditions_generales" className="hover-effect">
              Conditions générales
            </Link>
          </div>
          <div className="reseaux">
            <a href="" target="_blank" rel="next">
              <BasicIcon name="tiktok" size="s" />
            </a>
            <a href="" target="_blank" rel="next">
              <BasicIcon name="youtube" size="s" />
            </a>
            <a href="" target="_blank" rel="next">
              <BasicIcon name="twitter" size="s" />
            </a>
            <a href="" target="_blank" rel="next">
              <BasicIcon name="instagram" size="s" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MenuLateral;
