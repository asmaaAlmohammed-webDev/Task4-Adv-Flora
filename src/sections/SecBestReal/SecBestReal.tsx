import { useState } from "react";
import { BestRealCardData } from "../../data/BestRealCardData";
import "./SecBestReal.css";
import TitleComp from "../../components/TitleComp/TitleComp";
import BestRealCard from "../../components/BestRealCard/BestRealCard";

const SecBestReal = () => {
  const [toggleState, setToggleState] = useState(1);

  const BestRealTabs = [
    { id: 1, label: "Residential Property" },
    { id: 2, label: "Commercial Property" },
    { id: 3, label: "Agriculture Property" },
    { id: 4, label: "Industrial Property" },
  ];

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const activeTabData = BestRealCardData.find((tab) => tab.id === toggleState);

  return (
    <section className="best-real-sec px m-bottom">
      <TitleComp
        title="Best Real Estate Deals"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />

      <div className="tabs" data-aos="fade-up" data-aos-duration="2500">
        {BestRealTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${toggleState === tab.id ? "active-tab" : ""}`}
            onClick={() => toggleTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="cards">
        {activeTabData?.images.map((img, index) => (
          <BestRealCard key={index} img={img} />
        ))}
      </div>
    </section>
  );
};

export default SecBestReal;
