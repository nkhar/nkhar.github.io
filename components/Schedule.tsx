import styles from "../styles/Schedule.module.css";

const Schedule = () => {
  return (
    <section className={styles.schedule.concat(" ").concat(styles.container)}>
      <div className={styles.location}>
        <div className={styles.location_title}>
          <h3>Location</h3>
        </div>
        <div className={styles.location_details}>
          <p>Georgia Foot and Ankle Institute</p>
          <p>Bezhan Kalandadze St. 26</p>
          <p>Phone: 2752996</p>
        </div>
      </div>
      <div className={styles.office_hours}>
        <div className={styles.office_hours_title}>
          <h3>office hours</h3>
        </div>
        <div className={styles.week_days}>
          <div className={styles.week_day}>
            <p>Monday</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
          <div className={styles.week_day}>
            <p>Tuesday</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
          <div className={styles.week_day}>
            <p>Wednesday</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
          <div className={styles.week_day}>
            <p>Thursday</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
          <div className={styles.week_day}>
            <p>Friday</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
          <div className={styles.week_day}>
            <p>Saturday</p>
            <p>8:00 am - 5:00 pm</p>
          </div>
          <div className={styles.week_day}>
            <p>Sunday</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
