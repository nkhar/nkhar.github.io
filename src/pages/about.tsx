import Head from "next/head";
import AboutUs from "@src/components/AboutUs";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      <AboutUs />
      <WhiteSpace80 />
      <Footer />
    </>
  );
}
