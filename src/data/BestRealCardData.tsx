import img1 from "../assets/imgs/Best-Real/Image1.jpg";
import img2 from "../assets/imgs/Best-Real/Image-2.jpg";
import img3 from "../assets/imgs/Best-Real/Image-3.jpg";
import img4 from "../assets/imgs/Best-Real/Image1.jpg";
import img5 from "../assets/imgs/Best-Real/Image-2.jpg";
import img6 from "../assets/imgs/Best-Real/Image-3.jpg";
import img7 from "../assets/imgs/Best-Real/Image1.jpg";
import img8 from "../assets/imgs/Best-Real/Image-2.jpg";
import img9 from "../assets/imgs/Best-Real/Image-3.jpg";
import img10 from "../assets/imgs/Best-Real/Image1.jpg";
import img11 from "../assets/imgs/Best-Real/Image-2.jpg";
import img12 from "../assets/imgs/Best-Real/Image-3.jpg";
interface BestRealCardData {
  id: number;
  images: string[];
}

export const BestRealCardData: BestRealCardData[] = [
  { id: 1, images: [img1, img2, img3] },
  { id: 2, images: [img5, img5, img6] },
  { id: 3, images: [img9, img8, img9] },
  { id: 4, images: [img10, img11, img12] },
];
