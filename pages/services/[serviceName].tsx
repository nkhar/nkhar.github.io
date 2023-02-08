import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  isProd,
  apiUrlProd,
  apiUrlLocal,
  photoUrlProd,
  photoUrlLocal,
} from "../../env";
import FooterGeneric from "../../components/FooterGeneric";
import SocialMediaShare from "../../components/SocialMediaShare";
import { Service } from "../../components/models/Service";
import styles from "../../styles/ServicePage.module.css";

const fetchService = async (articleId: string) => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/services/${articleId}?populate=*`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/services/${articleId}?populate=*`;
  }

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();
  return data.data;
};

export default function DoctorPage() {
  const [service, setService] = useState<Service>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const getService = async () => {
        const { name, articleId } = router.query;
        if (!articleId) return null;
        const doctor = await fetchService(articleId as string);
        setService(doctor);
      };

      getService();
    }
  }, [router.isReady]);

  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }

  return (
    <>
      <Head>
        <title>{service?.attributes.postTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>

      <div className={styles.blue_cover}>
        <h1>{service?.attributes.postTitle + " Specialist"}</h1>
      </div>

      <main>
        <div className={styles.main_container}>
          <section className={styles.service_header}>
            <SocialMediaShare />
            <div className={styles.identity_summary_wrapper}>
              <div className={styles.identity}>
                <h2>
                  <span>Georgia Foot and Ankle Institute</span>
                </h2>
                <h3>
                  <span>
                    Podiatrists &amp; Foot and Ankle Surgeons located in
                    Tbilisi, Georgia
                  </span>
                </h3>
              </div>

              <div className={styles.summary}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: service?.attributes.postSummary,
                  }}
                ></p>
              </div>
            </div>
          </section>

          <section className={styles.service}>
            <h2 className={styles.postQA}>
              {service?.attributes.postTitle + " Q & A"}
            </h2>
            <div
              className={styles.details}
              dangerouslySetInnerHTML={{
                __html: service?.attributes.postBody,
              }}
            ></div>
          </section>
        </div>
      </main>
      <FooterGeneric />
    </>
  );
}
