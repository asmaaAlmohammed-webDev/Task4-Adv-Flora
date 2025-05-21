import "./AdSection.css";
interface AdSecData {
  //   img: string;
  title: string;
  desc: string;
}
export const AdSection = ({ title, desc }: AdSecData) => {
  return (
    <section
      className="ad-sec m-bottom"
      data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-duration="1700"
    >
      <h3 className="title" data-aos="zoom-in" data-aos-duration="1800">
        {title}
      </h3>
      <p className="desc" data-aos="zoom-in" data-aos-duration="1800">
        {desc}
      </p>
    </section>
  );
};

export default AdSection;
