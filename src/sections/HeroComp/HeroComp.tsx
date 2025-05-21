import CardHeroComp from "../../components/CardHeroComp/CardHeroComp";
import { CardsHeroData } from "../../data/CardsHeroData";
import "./HeroComp.css";

const HeroComp = () => {
  return (
    <section className="hero px m-bottom">
      <div className="content-hero">
        <h1 className="title" data-aos="zoom-in" data-aos-duration="2000">
          Discover a place you will love to live
        </h1>
        <p className="desc" data-aos="zoom-in" data-aos-duration="2000">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque.
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
