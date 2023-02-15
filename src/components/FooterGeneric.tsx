import styles from "@styles/FooterGeneric.module.css";

const FooterGeneric = () => {
  return (
    <footer className={styles.actual_footer}>
      <div className={styles.footer_wrapper}>
        <p>Georgia Foot and Ankle Institute</p>
        <p>
          Phone (appointments): 2-752-996 | Phone (general inquiries): 2-752-996
        </p>
        <p>Adress: 26 Bezhan Kalandadze St, Tbilisi, Georgia</p>
        <p>&copy; Georgian Foot and Ankle Institute 2022</p>
      </div>
    </footer>
  );
};

export default FooterGeneric;
