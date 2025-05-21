import MostTrendingCard from "../../components/MostTrendingCard/MostTrendingCard";
import TitleComp from "../../components/TitleComp/TitleComp";
import { MostTrendingCardData } from "../../data/MostTrendingCardData";
import "./SecMostTrending.css";
const SecMostTrending = () => {
  return (
    <section className="most-trending-sec px m-bottom">
      <TitleComp
        title="Most Trending"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="cards">
        {MostTrendingCardData?.map((item) => (
          <MostTrendingCard
            key={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
};

export default SecMostTrending;
