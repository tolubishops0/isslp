import { NavLink } from "../types/global";

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
        label: "study with this",
        href: "",
      },
      {
        label: "study with that",
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

