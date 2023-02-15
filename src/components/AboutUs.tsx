import { isProd, apiUrlProd, apiUrlLocal } from "env";
import { useState, useEffect, useContext } from "react";
import LocaleContext from "@context/languageContext";
import styles from "@styles/AboutUs.module.css";
import { LocaleContextType } from "@src/shared/types/schema/LocaleContextType";

const fetchAboutUs = async (currentLocale: string) => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/about-us?populate=*&locale=${currentLocale}`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/about-us?populate=*&locale=${currentLocale}`;
  }

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();

  const attributes = data.data.attributes.aboutUs;
  return attributes;

  // aboutUs.insertAdjacentHTML("afterbegin", attributes.aboutUs);
};

const AboutUs = () => {
  const [info, setInfo] = useState<string>("");

  const { currentLocale } = useContext(LocaleContext) as LocaleContextType;

  useEffect(() => {
    const getAboutUs = async () => {
      const aboutUsFromServer: string = await fetchAboutUs(currentLocale);
      setInfo(aboutUsFromServer);
    };

    getAboutUs();
  }, [currentLocale]);

  const rawMarkup = () => {
    var rawMarkup = info;
    return { __html: rawMarkup };
  };

  return (
    <section className={styles.container.concat(" ").concat(styles.about_us)}>
      <div dangerouslySetInnerHTML={rawMarkup()}></div>
    </section>
  );
};

export default AboutUs;
