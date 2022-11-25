import { isProd, photoUrlProd, photoUrlLocal } from "../env";
import { Doctor } from "./models/Doctor";
import styles from "../styles/DoctorItem.module.css";

function doctorClicked(id: Number) {
  window.location.assign(`${window.origin}/doctors/doctor.html?id=${id}`);
}

const DoctorItem = (props: any) => {
  const doctor: Doctor = props.doctor;
  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }

  return (
    <li
      className={styles.doctor_item}
      onClick={() => doctorClicked(Number(doctor.id))}
      key={doctor.id}
    >
      <img
        src={tempPhotoUrl + doctor.attributes.doctorIcon.data.attributes.url}
      />
      <p className={styles.doctor_name}>{doctor?.attributes?.doctorName}</p>
      <p className={styles.doctor_position}>
        {doctor.attributes.doctorPosition}
      </p>
    </li>
  );
};

export default DoctorItem;
