import "./HowWorksCardComp.css";
interface WorksCardProps {
  id?: number;
  icon: string;
  title: string;
  desc: string;
}
const HowWorksCardComp = ({ icon, title, desc }: WorksCardProps) => {
  return (
    <div className="how-works-card" data-aos="fade-up" data-aos-duration="2300">
      <img src={icon} alt="icon-work" />
      <div className="content">
        <h4 className="title">{title}</h4>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default HowWorksCardComp;
