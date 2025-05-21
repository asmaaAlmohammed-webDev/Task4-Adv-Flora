import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBarComp from "./components/NavBarComp/NavBarComp";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";
import HeroComp from "./sections/HeroComp/HeroComp";
import SecHowWorks from "./sections/SecHowWorks/SecHowWorks";
import AdSection from "./sections/AdSection/AdSection";
import SecMostTrending from "./sections/SecMostTrending/SecMostTrending";
import SecBestReal from "./sections/SecBestReal/SecBestReal";
import FooterComp from "./sections/FooterComp/FooterComp";
import { NavBarData } from "./data/NavBarData";
import { AdSecData } from "./data/AdSecData";
import { FooterData } from "./data/FooterData";

function App() {
  const [loading, setLoading] = useState(true);

  //to show the loader

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      once: false,
      delay: 100,
      mirror: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  if (loading) {
    return <LoaderComponent />;
  }

  return (
    <>
      <header>
        <NavBarComp logo={NavBarData.logo} links={NavBarData.links} />
        <HeroComp
          title=" Discover a place you will love to live"
          desc="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque."
        />
      </header>
      <main>
        <SecHowWorks />
        <AdSection title={AdSecData.title} desc={AdSecData.desc} />
        <SecMostTrending />
        <SecBestReal />
      </main>
      <FooterComp
        logo={FooterData.logo}
        desc={FooterData.desc}
        address={FooterData.address}
        columns={FooterData.columns}
        socialIcons={FooterData.socialIcons}
      />
    </>
  );
}

export default App;
