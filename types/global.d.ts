import { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  subMenu: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  href: string;
}

export interface NavLinkProps {
  label: string;
}


export interface heroFormProps {
  label: string;
  icon: StaticImageData;
}
export interface hero6formProps {
  title: string;
  text1: string;
  text2: string;
}

export interface hero2SectionProps {
  text: string;
  title: string;
  img: StaticImageData;
  icon?: StaticImageData;
}
export interface hero3SectionProps {
  text1: string;
  text2: string;
  text3: string;
  title: string;
  img: StaticImageData;
}
export interface ButtonProps {
  text: string;
  width: number;
  height: number;
  color: string;
  bgColor: string;
}
