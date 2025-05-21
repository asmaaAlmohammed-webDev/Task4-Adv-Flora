import CardHeroComp from "../../components/CardHeroComp/CardHeroComp";
import { CardsHeroData } from "../../data/CardsHeroData";
import "./HeroComp.css";
interface HeroProps {
  title: string;
  desc: string;
}
const HeroComp = ({ title, desc }: HeroProps) => {
  return (
    <section className="hero px m-bottom">
      <div className="content-hero">
        <h1 className="title" data-aos="zoom-in" data-aos-duration="2000">
          {title}
        </h1>
        <p className="desc" data-aos="zoom-in" data-aos-duration="2000">
          {desc}
        </p>
        <div className="infos" data-aos="zoom-in" data-aos-duration="2000">
          {CardsHeroData.map((item, index) => (
            <CardHeroComp
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroComp;
