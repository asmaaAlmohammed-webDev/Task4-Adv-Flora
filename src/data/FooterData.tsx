export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface IFooterData {
  logo: string;
  desc: string;
  address: string;
  columns: FooterColumn[];
  socialIcons: { icon: string; href: string }[];
}

export const FooterData: IFooterData = {
  logo: "/Task4-Adv-Flora/assets/imgs/logo.svg",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  columns: [
    {
      title: "Service",
      links: [
        { label: "Payment & Tax", href: "#" },
        { label: "Features", href: "#" },
        { label: "View Booking", href: "#" },
        { label: "Support", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "About us", href: "#" },
        { label: "News", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "New Property", href: "#" },
      ],
    },
  ],
  socialIcons: [
    {
      icon: "/Task4-Adv-Flora/assets/imgs/socail-icons/facebook-fill.svg",
      href: "#",
    },
    {
      icon: "/Task4-Adv-Flora/assets/imgs/socail-icons/twitter-fill.svg",
      href: "#",
    },
    {
      icon: "/Task4-Adv-Flora/assets/imgs/socail-icons/linkedin-fill.svg",
      href: "#",
    },
  ],
};
