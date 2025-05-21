import "./TitleComp.css";
interface TitleCompProps {
  title: string;
  desc: string;
}
const TitleComp = ({ title, desc }: TitleCompProps) => {
  return (
    <div
      className="title-comp "
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h3 className="title">{title}</h3>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default TitleComp;
