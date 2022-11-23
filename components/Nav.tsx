import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.actual_nav}>
      <Link href="#" className={navStyles.link} local-link="main">
        Home
      </Link>
      <a className={navStyles.link} local-link="about">
        Our story
      </a>
      <a className={navStyles.link} local-link="services">
        Services
      </a>
      <a className={navStyles.link} local-link="testimonials">
        Testimonials
      </a>
      <a className={navStyles.link} local-link="contact">
        Contact
      </a>

      <div className={navStyles.languages}>
        <div className={"georgian ".concat("active")}>
          <a href="#" lang="georgian">
            <img src="/images/language-georgia.png" alt="" />
          </a>
        </div>
        <div className={navStyles.english}>
          <a href="#" lang="english">
            <img src="/images/language-britain.png" alt="" />
          </a>
        </div>
        <div className={navStyles.russian}>
          <a href="#" lang="russian">
            <img src="/images/language-russia.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
