// App.tsx
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.scss";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";
import styles from "@/components/menuLateral/menuLateral.module.scss";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    const [isMenuMoved, setMenuMoved] = useState(false);

    const handleBurgerMenuClick = () => {
        setMenuMoved(!isMenuMoved);
    };

    return (
        <SessionProvider session={session}>
            <AnimatePresence>
                <motion.div
                    exit="pageExit"
                    initial="pageInitial"
                    animate="pageAnimate"
                    variants={{
                        pageInitial: {
                            opacity: 0,
                        },
                        pageAnimate: {
                            opacity: 1,
                        },
                        pageExit: {
                            opacity: 0,
                        },
                    }}
                >
                    <Header onBurgerMenuClick={handleBurgerMenuClick} />
                    <main>
                        <MenuLateral isMenuMoved={isMenuMoved} />
                        <div className={"container " + `${isMenuMoved ? styles.menuMoved : "smallContainer"}`}>
                            <div className="content border">
                                <Component {...pageProps} />
                            </div>
                        </div>
                    </main>
                </motion.div>
            </AnimatePresence>
        </SessionProvider>
    );
}
