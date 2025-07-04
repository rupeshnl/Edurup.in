import React from "react";
import HeroSection from "./components/HeroSection";
import CompanyLogos from "./components/CompanyLogos";
import CourseOverview from "./components/CourseOverview";
import Mentors from "./components/Mentors";
import CourseCurriculum from "./components/CourseCurriculum";
import SkillsSection from "./components/SkillsSection";
import ToolsSection from "./components/ToolsSection";
import ProjectsSection from "./components/ProjectsSection";
import PlacementSupport from "./components/PlacementSupport";
import Testimonials from "./components/Testimonials";
import FeeSection from "./components/FeeSection";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";

const page = () => {
  return (
    <>
      <div className="min-h-full">
        {/* Header Section Course intro with form */}
        <HeroSection />

        {/* Companies hire Logos */}
        <CompanyLogos />

        {/* Course Overview */}
        <CourseOverview />

        {/* Mentors */}
        <Mentors />

        {/* Course Curriculum / Detailing */}
        <CourseCurriculum />

        {/* Skills you learn */}
        <SkillsSection />

        {/* Tools */}
        <ToolsSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Placement Support */}
        <PlacementSupport />

        {/* Testimonials */}
        <Testimonials />

        {/* Fee */}
        <FeeSection />

        {/* FAQ */}
        <FAQ />

        {/* Form / Call to action button */}
        <CallToAction />
      </div>
    </>
  );
};

export default page;
