import Head from "next/head";
import Schedule from "@components/Schedule";
import MapFrame from "@components/MapFrame";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

const contact = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      <Schedule />
      <MapFrame />
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default contact;
