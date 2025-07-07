import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Course } from "@/data/courses";

interface SkillsSectionProps {
  course: Course;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ course }) => {
  // Split skills into frontend and backend based on course type
  const frontendSkills = course.skills
    .filter((skill) =>
      [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Redux",
        "TypeScript",
        "Vue.js",
        "Angular",
        "Sass",
      ].some((frontend) => skill.toLowerCase().includes(frontend.toLowerCase()))
    )
    .map((skill) => ({
      name: skill,
      icon:
        skill.toLowerCase().includes("javascript") ||
        skill.toLowerCase().includes("js")
          ? "/Skills/js.png"
          : skill.toLowerCase().includes("css") ||
            skill.toLowerCase().includes("sass")
          ? "/Skills/css.png"
          : skill.toLowerCase().includes("html")
          ? "/Skills/html.png"
          : "/Skills/illustration.png",
    }));

  const backendSkills = course.skills
    .filter((skill) =>
      [
        "Node.js",
        "Express",
        "MongoDB",
        "SQL",
        "Python",
        "Django",
        "Flask",
        "PostgreSQL",
        "MySQL",
        "APIs",
      ].some((backend) => skill.toLowerCase().includes(backend.toLowerCase()))
    )
    .map((skill) => ({
      name: skill,
      icon: skill.toLowerCase().includes("node")
        ? "/Skills/node.png"
        : "/Skills/illustration.png",
    }));

  // If no clear frontend/backend split, use first half as frontend, second half as backend
  const skillsToShow =
    frontendSkills.length > 0 && backendSkills.length > 0
      ? { frontend: frontendSkills, backend: backendSkills }
      : {
          frontend: course.skills
            .slice(0, Math.ceil(course.skills.length / 2))
            .map((skill) => ({
              name: skill,
              icon: "/Skills/illustration.png",
            })),
          backend: course.skills
            .slice(Math.ceil(course.skills.length / 2))
            .map((skill) => ({
              name: skill,
              icon: "/Skills/illustration.png",
            })),
        };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4 px-4 py-2">
            Skills Development
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 heading-responsive">
            Master{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent inline-block">
              In-Demand Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Build expertise in the most sought-after technologies and skills in
            the industry
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Frontend Skills */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">F</span>
                </div>
                Frontend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsToShow.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend Skills */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">B</span>
                </div>
                Backend Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skillsToShow.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Development */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">T</span>
              </div>
              Tools & Development
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">S</span>
              </div>
              Professional Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Problem Solving",
                "Team Collaboration",
                "Code Review",
                "Project Management",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {course.skills.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {course.projects.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                Career Ready
              </div>
              <div className="text-gray-600 dark:text-gray-400">Skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
