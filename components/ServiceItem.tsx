import { isProd, photoUrlProd, photoUrlLocal } from "../env";
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

      <a
        href={
          window.location.origin + `/services/service.html?id=${service.id}`
        }
      >
        <div className={styles.service_item_info}>
          <h4 className={styles.service_name}>
            {service.attributes.postTitle}
          </h4>
          <p>Read More</p>
        </div>
      </a>
    </>
  );
};

export default ServiceItem;
