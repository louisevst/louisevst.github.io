import { useState } from "react";
import UX from "./UX";
import Internship from "./Internship";
import Sales from "./Sales";
import Fashion from "./Fashion";
import Becode from "./Becode";
import Navbar from "./Navbar";
import MobileBecode from "./MobileBecode";
import MobileFashion from "./MobileFashion";
import MobileInternship from "./MobileInternship";
import MobileSales from "./MobileSales";
import MobileUX from "./MobileUX";

export default function Timeline() {
  const [currentSection, setCurrentSection] = useState("UX");

  const handleSectionEnter = (sectionTitle: string) => {
    setCurrentSection(sectionTitle);
  };

  return (
    <section className="py-6 px-4 md:px-20 lg:px-0">
      <h2 className="lg:text-center font-serif text-xs-h3 md:text-h3 lg:pt-20">
        My Journey
        <span className="text-red"> & </span>
        Digital Projects
      </h2>
      <div className="lg:flex justify-between hidden">
        <Navbar
          currentSection={currentSection}
          sectionTitles={["UX", "Internship", "Becode", "Sales", "Fashion"]}
        />
        <div className="space-y-20 xl:py-20 xl:pr-20 w-3/4">
          <UX onSectionEnter={handleSectionEnter} />
          <Internship onSectionEnter={handleSectionEnter} />
          <Becode onSectionEnter={handleSectionEnter} />
          <Sales onSectionEnter={handleSectionEnter} />
          <Fashion onSectionEnter={handleSectionEnter} />
        </div>
      </div>
      <div className="lg:hidden pt-6 space-y-4 md:mx-14">
        <MobileUX />
        <MobileInternship />
        <MobileBecode />
        <MobileSales />
        <MobileFashion />
      </div>
    </section>
  );
}
