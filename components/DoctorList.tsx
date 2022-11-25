import { isProd, apiUrlProd, apiUrlLocal } from "../env";
import { useState, useEffect } from "react";
import { Doctor } from "./models/Doctor";
import DoctorItem from "../components/DoctorItem";
import styles from "../styles/DoctorList.module.css";

const doctorsPath = "/doctors?populate=*";

const fetchDoctors = async () => {
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

  tempBaseUrl += doctorsPath;

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();
  return data.data;
};

const DoctorList = () => {
  const [doctors, setDoctors] = useState<[Doctor]>();

  useEffect(() => {
    const getDoctors = async () => {
      const doctorsList = await fetchDoctors();
      setDoctors(doctorsList);
    };

    getDoctors();
  }, []);

  const doctorItems = doctors?.map((doctorItem: Doctor) => (
    <DoctorItem doctor={doctorItem} />
  ));

  return (
    <section className={styles.container.concat(" ").concat(styles.doctors)}>
      <h2>Doctors</h2>
      <ul className={styles.doctor_list}>{doctorItems}</ul>
    </section>
  );
};

export default DoctorList;
