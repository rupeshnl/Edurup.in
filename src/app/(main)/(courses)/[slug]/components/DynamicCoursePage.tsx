import React from "react";
import { Course } from "@/data/courses";
import HeroSection from "./HeroSection";
import CompanyLogos from "./CompanyLogos";
import CourseOverview from "./CourseOverview";
import Mentors from "./Mentors";
import CourseCurriculum from "./CourseCurriculum";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import PlacementSupport from "./PlacementSupport";
import Testimonials from "./Testimonials";
import FeeSection from "./FeeSection";
import FAQ from "./FAQ";
import CallToAction from "./CallToAction";

interface DynamicCoursePageProps {
  course: Course;
}

const DynamicCoursePage: React.FC<DynamicCoursePageProps> = ({ course }) => {
  return (
    <>
      <div className="min-h-full">
        {/* Header Section Course intro with form */}
        <HeroSection course={course} />

        {/* Companies hire Logos */}
        <CompanyLogos course={course} />

        {/* Course Overview */}
        <CourseOverview course={course} />

        {/* Mentors */}
        <Mentors course={course} />

        {/* Course Curriculum / Detailing */}
        <CourseCurriculum course={course} />

        {/* Skills you learn */}
        <SkillsSection course={course} />

        {/* Projects */}
        <ProjectsSection course={course} />

        {/* Placement Support */}
        <PlacementSupport course={course} />

        {/* Testimonials */}
        <Testimonials course={course} />

        {/* Fee */}
        <FeeSection course={course} />

        {/* FAQ */}
        <FAQ course={course} />

        {/* Form / Call to action button */}
        <CallToAction course={course} />
      </div>
    </>
  );
};

export default DynamicCoursePage;
