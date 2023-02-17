import Head from "next/head";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

const gallery = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default gallery;
