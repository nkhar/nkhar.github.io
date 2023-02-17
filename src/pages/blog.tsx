import Head from "next/head";
import BlogList from "@src/components/BlogList";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

const blog = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />
      <BlogList />
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default blog;
