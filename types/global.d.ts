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
