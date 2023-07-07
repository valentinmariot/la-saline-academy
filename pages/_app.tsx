import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/global.scss";
import Header from "@/components/header/header";
import MenuLateral from "@/components/menuLateral/menuLateral";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AnimatePresence>
        <motion.div
          // key={router.route}
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
          <Header />
          <main>
            <MenuLateral />
            <div className="container">
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
