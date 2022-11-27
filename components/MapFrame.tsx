import styles from "../styles/MapFrame.module.css";

const MapFrame = () => {
  return (
    <section className={styles.map}>
      <div className={styles.actual_map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2858.4168904043204!2d44.81897846422817!3d41.6816249651505!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x283715d38dd5938c!2z4YOi4YOU4YOg4YOk4YOY4YOhIOGDk-GDkCDhg5nhg53hg63hg6zhg5Xhg5jhg5Xhg5jhg6Eg4YOh4YOQ4YOu4YOh4YOg4YOY4YOhIOGDmOGDnOGDoeGDouGDmOGDouGDo-GDouGDmA!5e0!3m2!1sen!2sge!4v1663442844114!5m2!1sen!2sge"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapFrame;
