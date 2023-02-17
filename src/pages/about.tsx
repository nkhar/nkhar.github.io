import AboutUs from "@src/components/AboutUs";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

export default function About() {
  return (
    <>
      <Nav isBlackBackground={true} />
      <AboutUs />
      <WhiteSpace80 />
      <Footer />
    </>
  );
}
