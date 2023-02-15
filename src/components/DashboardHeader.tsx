import styles from "@styles/DashboardHeader.module.css";
import Nav from "./Nav";

const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.header_container}>
        <h1>Georgia Foot and Ankle Institute</h1>
      </div>
    </header>
  );
};

export default DashboardHeader;
