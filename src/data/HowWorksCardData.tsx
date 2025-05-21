// import icon1 from "../assets/imgs/How-Works/icon1.svg";
// import icon2 from "../assets/imgs/How-Works/icon2.svg";
// import icon3 from "../assets/imgs/How-Works/icon3.svg";

interface Card {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export const HowWorksCardData: Card[] = [
  {
    id: 1,
    icon: "/Task4-Adv-Flora/assets/imgs/How-Works/icon1.svg",
    title: "Search Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    id: 2,
    icon: "/Task4-Adv-Flora/assets/imgs/How-Works/icon2.svg",
    title: "Select Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    id: 3,
    icon: "/Task4-Adv-Flora/assets/imgs/How-Works/icon3.svg",
    title: "Confirm Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];
