import { isProd, photoUrlProd, photoUrlLocal } from "env";
import { Doctor } from "@src/data/models/Doctor";
import styles from "@styles/DoctorItem.module.css";

const DoctorItem = (props: any) => {
  const doctor: Doctor = props.doctor;
  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }

  return (
    <>
      <img
        src={tempPhotoUrl + doctor.attributes.doctorIcon.data.attributes.url}
      />
      <p className={styles.doctor_name}>{doctor?.attributes?.doctorName}</p>
      <p className={styles.doctor_position}>
        {doctor.attributes.doctorPosition}
      </p>
    </>
  );
};

export default DoctorItem;
