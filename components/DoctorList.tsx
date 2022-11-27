import { useRouter } from "next/router";

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

function doctorClicked(name: string) {
  window.location.assign(`${window.origin}/doctors/${name}`);
}

const DoctorList = () => {
  const [doctors, setDoctors] = useState<[Doctor]>();

  useEffect(() => {
    const getDoctors = async () => {
      const doctorsList = await fetchDoctors();
      setDoctors(doctorsList);
    };

    getDoctors();
  }, []);

  const router = useRouter();

  const handleClick = (name: string, id: number) => {
    const href = `/doctors/${name}?doctorId=${id}`;
    router.push(href);
  };

  const doctorItems = doctors?.map((doctorItem: Doctor) => (
    <li
      className={styles.doctor_item}
      onClick={() =>
        handleClick(doctorItem.attributes.doctorName, Number(doctorItem.id))
      }
      key={doctorItem.id}
    >
      <DoctorItem doctor={doctorItem} />
    </li>
  ));

  return (
    <section className={styles.container.concat(" ").concat(styles.doctors)}>
      <h2>Doctors</h2>
      <ul className={styles.doctor_list}>{doctorItems}</ul>
    </section>
  );
};

export default DoctorList;
