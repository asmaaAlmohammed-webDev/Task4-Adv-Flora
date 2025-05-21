import logo from "../assets/imgs/logo.svg";

export interface NavLink {
  name: string;
  href: string;
}

export interface NavbarData {
  logo: string;
  links: NavLink[];
}

export const NavBarData: NavbarData = {
  logo,
  links: [
    { name: "Home", href: "#" },
    { name: "About", href: "#About" },
    { name: "Service", href: "#Service" },
    { name: "New Property", href: "#New Property" },
    { name: "Contact", href: "#Contact" },
  ],
};
