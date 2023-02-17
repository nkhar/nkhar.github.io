import Head from "next/head";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect, useContext } from "react";
import { isProd, apiUrlProd, apiUrlLocal } from "env";
import { PictureCollection } from "@src/data/models/PictureCollection";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";
import styles from "@styles/GalleryPage.module.css";

const picturesPath = "/picture?populate=*";

const fetchPictures = async () => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = apiUrlProd;
  } else {
    tempBaseUrl = apiUrlLocal;
  }

  tempBaseUrl += picturesPath;

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();
  console.log(data.data);
  return data.data;
};

const settings = {
  swipeToSlide: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
};

const gallery = () => {
  const [pictures, setPictures] = useState<PictureCollection>();

  useEffect(() => {
    const getPictures = async () => {
      const pictureCollection = await fetchPictures();
      setPictures(pictureCollection);
    };

    getPictures();
  }, []);

  const pictureItems = pictures?.attributes.sliderImages.data.map(
    (pictureItem) => (
      <li key={pictureItem.id} className={styles.image_item}>
        <img src={pictureItem.attributes.url} />
      </li>
    )
  );

  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      {/* <div className="card">
        <div className="card-top"></div>
        <div className="card-bottom"></div>
      </div> */}
      <Slider {...settings}>
        {pictures?.attributes.sliderImages.data.map((pictureItem) => (
          <div className={styles.image_card}>
            <img src={pictureItem.attributes.url} />
          </div>
        ))}
      </Slider>
      <section className={styles.container}>
        <ul className={styles.images_list}>{pictureItems}</ul>
      </section>
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default gallery;
