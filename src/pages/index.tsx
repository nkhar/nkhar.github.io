import Head from "next/head";
import Image from "next/image";
import Footer from "@components/Footer";
import DashboardHeader from "@components/DashboardHeader";
import AboutUs from "@components/AboutUs";
import DoctorList from "@components/DoctorList";
import ServiceList from "@components/ServiceList";
import Schedule from "@components/Schedule";
import MapFrame from "@components/MapFrame";
import styles from "@styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Georgian Foot and Ankle Institute</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>

      <DashboardHeader />

      <main className={styles.main}>
        <AboutUs />
        <DoctorList />
        <ServiceList />
        <Schedule />
      </main>
      <MapFrame />

      <Footer />
    </div>
  );
}