import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../styles/theme";

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
          <ChakraProvider theme={theme} resetCSS>
            <Component {...pageProps} />
          </ChakraProvider>
        </motion.div>
      </AnimatePresence>
    </SessionProvider>
  );
}
