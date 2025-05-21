import HowWorksCardComp from "../../components/HowWorksCardComp/HowWorksCardComp";
import TitleComp from "../../components/TitleComp/TitleComp";
import { HowWorksCardData } from "../../data/HowWorksCardData";
import "./SecHowWorks.css";
const SecHowWorks = () => {
  return (
    <section className="how-it-works-sec px m-bottom">
      <TitleComp
        title="How it Works"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className="cards">
        {HowWorksCardData?.map((item) => (
          <HowWorksCardComp
            key={item.id}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default SecHowWorks;
