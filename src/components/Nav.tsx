import Link from "next/link";
import { useContext } from "react";
import LocaleContext from "@context/languageContext";
import { LocaleContextType } from "@schema/LocaleContextType";
import navStyles from "@styles/Nav.module.css";

const Nav = () => {
  const { currentLocale, setCurrentLocale } = useContext(
    LocaleContext
  ) as LocaleContextType;

  const handleLanguageClick = (clickedLanguage: string) => {
    if (currentLocale == clickedLanguage) {
      return;
    } else {
      setCurrentLocale(clickedLanguage);
    }
  };

  return (
    <nav className={navStyles.actual_nav}>
      <Link href="#" className={navStyles.link} local-link="main">
        <div className={navStyles.main_logo_link}>
          <img src="/gfai_logo.ico" />
        </div>
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
            <img
              src="/images/language-georgia.png"
              alt=""
              onClick={() => handleLanguageClick("ka")}
            />
          </a>
        </div>
        <div className={navStyles.english}>
          <a href="#" lang="english">
            <img
              src="/images/language-britain.png"
              alt=""
              onClick={() => handleLanguageClick("en")}
            />
          </a>
        </div>
        <div className={navStyles.russian}>
          <a href="#" lang="russian">
            <img
              src="/images/language-russia.png"
              alt=""
              onClick={() => handleLanguageClick("ru")}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
