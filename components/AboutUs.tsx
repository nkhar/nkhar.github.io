import { isProd, apiUrlProd, apiUrlLocal } from "../env";
import { useState, useEffect } from "react";
import styles from "../styles/AboutUs.module.css";

const fetchAboutUs = async () => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/about-us?populate=*`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/about-us?populate=*`;
  }

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();

  const attributes = data.data.attributes.aboutUs;
  return attributes;

  // aboutUs.insertAdjacentHTML("afterbegin", attributes.aboutUs);
};

const AboutUs = () => {
  const [info, setInfo] = useState<string>("");

  useEffect(() => {
    const getAboutUs = async () => {
      const aboutUsFromServer: string = await fetchAboutUs();
      setInfo(aboutUsFromServer);
    };

    getAboutUs();
  }, []);

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
