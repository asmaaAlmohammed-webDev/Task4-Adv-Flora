import "./CardHeroComp.css";
interface CardHeroProps {
  icon: string;
  title: string;
  description: string;
}
const CardHeroComp = ({ icon, title, description }: CardHeroProps) => {
  return (
    <div className="card-hero-comp">
      <div className="icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="content-card">
        <h6 className="title-card">{title}</h6>
        <p className="desc-card">{description}</p>
      </div>
    </div>
  );
};

export default CardHeroComp;
