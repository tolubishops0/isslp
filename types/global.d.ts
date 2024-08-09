import { StaticImageData } from "next/image";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";

declare module "@splidejs/react-splide" {
  export { Options } from "@splidejs/splide";
  export { Splide, SplideSlide } from "@splidejs/react-splide";
}

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
  icon: StaticImageData;
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

//AUTH SCREENS
export interface HeaderProps {
  text: string;
  active?: string;
}
export interface ButtonPropss {
  text: string;
  icon?: StaticImageData;
  bgcolor?: string;
  textcolor?: string;
  gradient?: string;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  dropdown?: boolean;
  type?: string;
}

export interface AuthFormData {
  email?: string;
  username: string;
  password: string;
  confirmPassword?: string;
  terms?: boolean;
}

export interface InputFieldPropss {
  label: string;
  placeholder: string;
  type?: string;
  fieldname: keyof AuthFormData;
  error?: string;
  register: UseFormRegister<AuthFormData>;
}

export interface DropdownOption {
  option: string;
  icon?: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder: string;
}
