import Head from "next/head";
import ServiceList from "@src/components/ServiceList";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

const services = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      <ServiceList />
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default services;
