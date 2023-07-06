import { extendTheme } from "@chakra-ui/react";
import { Colors } from "./colors";
import { Breakpoints } from "./breakpoints";
import { Buttons } from "./components/buttons";

const styles = {
  global: () => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: "gray.50",
      bg: "gray.900",
    },
    "#__next": {
      minH: "100vh",
    },
  }),
};

const components = {
  Button: Buttons,
};

const theme = extendTheme({
  breakpoints: Breakpoints,
  colors: Colors,
  components,
  fonts: {
    heading: `'Gotham', sans-serif`,
    body: `'Helvetica', sans-serif`,
  },
  styles,
});

export default theme;
