import DoctorList from "@src/components/DoctorList";
import Nav from "@src/components/Nav";
import Footer from "@src/components/Footer";
import WhiteSpace80 from "@src/components/WhiteSpace80";

import React from "react";

const doctors = () => {
  return (
    <>
      <Nav isBlackBackground={true} />
      <DoctorList />
      <WhiteSpace80 />
      <Footer />
    </>
  );
};

export default doctors;
