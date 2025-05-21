import "./MostTrendingCard.css";

export interface CardItemProps {
  id?: number;
  img: string;
  price: string;
  title: string;
  location: string;
}
const MostTrendingCard = ({ img, price, title, location }: CardItemProps) => {
  return (
    <div
      className="most-trending-card"
      data-aos="flip-up"
      data-aos-offset="300"
      data-aos-duration="1500"
    >
      <img src={img} alt="trending-img" className="trending-img" />
      <div className="content">
        <p className="price">{price}$</p>
        <h5 className="title">{title}</h5>
        <p className="location">
          <img
            src="/Task4-Adv-Flora/assets/imgs/location-most-trending.svg"
            alt="location-img"
          />
          {location}
        </p>
      </div>
    </div>
  );
};

export default MostTrendingCard;
