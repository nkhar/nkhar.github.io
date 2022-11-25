import { isProd, apiUrlProd, apiUrlLocal } from "../env";
import { useState, useEffect } from "react";
import { Service } from "./models/Service";
import ServiceItem from "../components/ServiceItem";
import styles from "../styles/ServiceList.module.css";

const servicesPath = "/services?populate=*";

const fetchServices = async () => {
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

  tempBaseUrl += servicesPath;

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();
  return data.data;
};

const ServiceList = () => {
  const [services, setServices] = useState<[Service]>();

  useEffect(() => {
    const getServices = async () => {
      const servicesList = await fetchServices();
      setServices(servicesList);
    };

    getServices();
  }, []);

  const serviceItems = services?.map((serviceItem: Service) => (
    <li className={styles.service_item} key={serviceItem.id}>
      <ServiceItem service={serviceItem} />
    </li>
  ));

  return (
    <section className={styles.container.concat(" ").concat(styles.services)}>
      <h2>Services</h2>
      <ul className={styles.services_list}>{serviceItems}</ul>
    </section>
  );
};

export default ServiceList;
