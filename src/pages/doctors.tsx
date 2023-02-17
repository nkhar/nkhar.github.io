import Head from "next/head";
import DoctorList from "@src/components/DoctorList";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

const doctors = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      <DoctorList />
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default doctors;
