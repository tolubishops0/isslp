import { NavLink, heroFormProps } from "../types/global";

//NAVBAR ASSETS

export { default as menu } from "../public/assets/icons8-menu-24.png";
export { default as cancel } from "../public/assets/icons8-cancel-30.png";
export { default as logo } from "../public/assets/logo.svg";
export { default as arrowndown } from "../public/assets/arrowndown.svg";

export const navLinks: NavLink[] = [
  {
    label: "Study tools",
    subMenu: [
      {
        label: "with this",
        href: "",
      },
      {
        label: "with that",
        href: "",
      },
    ],
  },
  {
    label: "Select language",
    subMenu: [
      {
        label: "spanish",
        href: "",
      },
      {
        label: "igbo",
        href: "",
      },
    ],
  },
];

//HERO SECTION
export { default as meshbg } from "../public/assets/meshbg.svg";
export { default as search } from "../public/assets/search item.svg";
export { default as help } from "../public/assets/help.svg";
export { default as lefttwireframe } from "../public/assets/lefttwireframe.svg";
export { default as rightwireframe } from "../public/assets/rightwireframe.svg";
export { default as rightyellowstar } from "../public/assets/rightyellowstar.svg";
export { default as leftbluestart } from "../public/assets/leftbluestart.svg";
export { default as intelstar } from "../public/assets/intelstar.svg";
export { default as bluerightframe } from "../public/assets/bluerightframe.svg";
export { default as yellowsmstart } from "../public/assets/yellowsmstart.svg";

import askaqust from "../public/assets/askaqust.svg";
import convertformat from "../public/assets/convertformat.svg";
import sumarize from "../public/assets/sumarize.svg";

export const heroForm: heroFormProps[] = [
  {
    label: "convert Format",
    icon: askaqust,
  },
  {
    label: "ask a question",
    icon: convertformat,
  },
  {
    label: "summarize text",
    icon: sumarize,
  },
];
