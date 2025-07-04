import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML5", level: 95, icon: "/Skills/css.png" },
    { name: "CSS3 & Sass", level: 90, icon: "/Skills/css.png" },
    { name: "JavaScript ES6+", level: 95, icon: "/Skills/js.png" },
    { name: "React.js", level: 90, icon: "/Skills/illustration.png" },
    { name: "Redux", level: 85, icon: "/Skills/illustration.png" },
    { name: "TypeScript", level: 80, icon: "/Skills/js.png" },
  ];

  const backendSkills = [
    { name: "Node.js", level: 90, icon: "/Skills/node.png" },
    { name: "Express.js", level: 88, icon: "/Skills/node.png" },
    { name: "MongoDB", level: 85, icon: "/Skills/illustration.png" },
    { name: "Mongoose ODM", level: 82, icon: "/Skills/illustration.png" },
    { name: "RESTful APIs", level: 90, icon: "/Skills/illustration.png" },
    { name: "GraphQL", level: 75, icon: "/Skills/illustration.png" },
  ];

  const devOpsSkills = [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Heroku", level: 80 },
    { name: "CI/CD", level: 70 },
    { name: "Testing", level: 85 },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Code Review",
    "Project Management",
    "Communication",
    "Continuous Learning",
    "Debugging",
    "Performance Optimization",
  ];

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
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {skill.icon && (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                          />
                        )}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
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
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* DevOps & Deployment Skills */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">D</span>
              </div>
              DevOps & Deployment
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devOpsSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
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
              {softSkills.map((skill, index) => (
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Coding Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">Job Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
