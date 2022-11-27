import { isProd, photoUrlProd, photoUrlLocal } from "../env";

import Link from "next/link";

import { Service } from "./models/Service";
import styles from "../styles/ServiceItem.module.css";

const ServiceItem = (props: any) => {
  const service: Service = props.service;
  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }

  return (
    <>
      <div className={styles.service_item_bg}>
        <img
          src={
            tempPhotoUrl +
            service.attributes.serviceGridIcon.data.attributes.url
          }
        />
      </div>

      <Link
        legacyBehavior
        href={`/services/${service?.attributes.postTitle}?articleId=${service.id}`}
      >
        <a>
          <div className={styles.service_item_info}>
            <h4 className={styles.service_name}>
              {service.attributes.postTitle}
            </h4>
            <p>Read More</p>
          </div>
        </a>
      </Link>
    </>
  );
};

export default ServiceItem;
