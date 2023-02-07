import defaultColors from "../util/default-colors.json"
import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    ...defaultColors,
    text: "rgba(24, 18, 28, .9)",
    textShadow: "0 2px 2px rgba(255, 255, 255, .7)",
    background: "rgba(215, 208, 219, 1)",
    primary: "var(--primary-color)",
    accent: "#fff",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "rgba(235, 234, 236, 0.1)",
    borderColor: "#444",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor", 0.4),
    socialIconsHover: lightness("siteColor", 0.3),
    buttonColor: lightness("siteColor", 0.9),
    buttonHoverBg: lightness("siteColor", 0.4),
    buttonHoverColor: lightness("siteColor", 0.8),
    modes: {
      dark: {
        text: "#f5f5f5",
        textShadow: "0 2px 2px rgba(0, 0, 0, .7)",
        background: "rgba(28, 19, 32, 0.898)",
        primary: "var(--primary-color)",
        accent: "#5C2941",
        muted: "rgba(255, 255, 255, 0.7)",
        cardBg: "rgba(27, 25, 29, 0.3)",
        borderColor: "#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons: lightness("siteColor", 0.5),
        socialIconsHover: lightness("siteColor", 0.9),
        buttonColor: lightness("siteColor", 0.7),
        buttonHoverBg: lightness("siteColor", 0.3),
        buttonHoverColor: lightness("siteColor", 0.9),
        ...darkColors,
      },
    },
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text",
      },
    },
  },
  variants: {
    button: {
      bg: "siteColor",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor",
      },
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover",
        },
      },
    },
  },
}

export default theme