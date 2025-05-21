import "./BestRealCard.css";

interface BestRealCardData {
  id?: number;
  img: string;
}

const BestRealCard = ({ img }: BestRealCardData) => {
  return (
    <div
      className="best-real-card"
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-duration="1500"
    >
      <img src={img} alt="property" />
      <div className="buttons">
        <button>Featured</button>
        <button>3D</button>
      </div>
    </div>
  );
};

export default BestRealCard;
