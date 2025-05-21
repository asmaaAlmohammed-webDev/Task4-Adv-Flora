import icon1 from "../assets/imgs/location.svg";
import icon2 from "../assets/imgs/dollar-circle.svg";
import icon3 from "../assets/imgs/house.svg";
interface CardData {
  icon: string;
  title: string;
  description: string;
}

export const CardsHeroData: CardData[] = [
  {
    icon: icon1,
    title: " Location",
    description: " Ahmedabad, India",
  },
  {
    icon: icon2,
    title: "Price",
    description: " $1000 - $10,000",
  },
  {
    icon: icon3,
    title: "Type of Property",
    description: " Apartment  ",
  },
];
