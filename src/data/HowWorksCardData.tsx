import icon1 from "../assets/imgs/How-Works/icon1.svg";
import icon2 from "../assets/imgs/How-Works/icon2.svg";
import icon3 from "../assets/imgs/How-Works/icon3.svg";

interface Card {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export const HowWorksCardData: Card[] = [
  {
    id: 1,
    icon: icon1,
    title: "Search Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Select Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Confirm Apartment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.",
  },
];
