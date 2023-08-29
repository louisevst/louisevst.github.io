import { useState } from "react";
import UX from "./UX";
import Internship from "./Internship";
import Sales from "./Sales";
import Fashion from "./Fashion";
import Becode from "./Becode";
import Navbar from "./Navbar";

export default function Timeline() {
  const [currentSection, setCurrentSection] = useState("Introduction");

  const handleSectionEnter = (sectionTitle) => {
    setCurrentSection(sectionTitle);
  };

  return (
    <section className="py-6">
      <h3 className="text-center font-serif text-xs-h3 md:text-h3 lg:pt-20">
        My Journey
        <span className="text-red"> & </span>
        Projects
      </h3>
      <div className="flex justify-between">
        <Navbar
          currentSection={currentSection}
          sectionTitles={["UX", "Internship", "Becode", "Sales", "Fashion"]}
        />
        <div className="space-y-14 py-20 pr-20">
          <UX onSectionEnter={handleSectionEnter} />
          <Internship onSectionEnter={handleSectionEnter} />
          <Becode onSectionEnter={handleSectionEnter} />
          <Sales onSectionEnter={handleSectionEnter} />
          <Fashion onSectionEnter={handleSectionEnter} />
        </div>
      </div>
    </section>
  );
}
