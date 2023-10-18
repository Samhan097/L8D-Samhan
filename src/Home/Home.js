import React from "react";
import Hero from "./Hero";
import CaseStudy from "./CaseStudy";
import Clients from "./Clients";
import NumberedBox from "./NumberedBox";
import Articles from "./Articles";
import Card from "./Card";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <CaseStudy />
      <Clients />
      <NumberedBox />
      <Articles />
      <Card />
      <Footer />
    </div>
  );
}
