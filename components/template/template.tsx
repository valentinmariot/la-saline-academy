import React, {FC, useState} from "react";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";
import Head from "next/head";

interface TemplateProps {
    props: any;
}

const Template: FC<TemplateProps> = (props) => {
    const [isMenuMoved, setMenuMoved] = useState(false);

    const handleBurgerMenuClick = () => {
        setMenuMoved(!isMenuMoved);
    };

    return (
       <>
           <Head>
               <title>{props.title} - La Saline Academy</title>
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
                       {props.children}
                   </div>
               </div>
           </main>
       </>
    );
};

export default Template;
