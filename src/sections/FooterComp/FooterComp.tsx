import "./FooterComp.css";
import type { FooterColumn } from "../../data/FooterData";

interface FooterProps {
  logo: string;
  desc: string;
  address: string;
  columns: FooterColumn[];
  socialIcons: { icon: string; href: string }[];
}

const FooterComp = ({
  logo,
  desc,
  address,
  columns,
  socialIcons,
}: FooterProps) => {
  return (
    <footer className="footer px" data-aos="fade-up" data-aos-duration="3000">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={logo} alt="logo" className="logo" />
          <p className="desc">{desc}</p>
        </div>
        {columns?.map((col, index) => (
          <div className="footer-col" key={index}>
            <h4>{col.title}</h4>
            <ul>
              {col.links?.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-location">
          <h4>Our Location</h4>
          <p>{address}</p>
          <div className="social-icons">
            {socialIcons?.map((item, i) => (
              <a key={i} href={item.href}>
                <img src={item.icon} alt="socail-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 flora. All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
