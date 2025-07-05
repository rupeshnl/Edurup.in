import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Database, Globe, Server } from "lucide-react";

const CourseOverview = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Frontend Mastery",
      description:
        "Master React, Redux, and modern JavaScript to build interactive user interfaces",
      technologies: ["React", "Redux", "JavaScript ES6+", "HTML5", "CSS3"],
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Backend Development",
      description:
        "Build robust APIs and server-side applications with Node.js and Express",
      technologies: ["Node.js", "Express.js", "RESTful APIs", "Authentication"],
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Management",
      description: "Learn MongoDB for NoSQL database design and data modeling",
      technologies: ["MongoDB", "Mongoose", "Database Design", "Data Modeling"],
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Full-Stack Integration",
      description:
        "Connect frontend and backend to create complete web applications",
      technologies: [
        "API Integration",
        "State Management",
        "Deployment",
        "DevOps",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4 px-4 py-2">
            Course Overview
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 heading-responsive">
            Complete MERN Stack{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent inline-block">
              Learning Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From zero to full-stack developer in 32 weeks with hands-on projects
            and industry mentorship
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900"
            >
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Path & Course Info */}
        {/* <div className="grid lg:grid-cols-2 gap-12 items-start">
        
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              What You&apos;ll Learn
            </h3>
            <div className="space-y-4">
              {learningPath.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Duration</span>
                  <span className="font-semibold">32 Weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Format</span>
                  <span className="font-semibold">Live + Recorded</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Projects</span>
                  <span className="font-semibold">8+ Real-world</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Mentorship</span>
                  <span className="font-semibold">1:1 Support</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Placement</span>
                  <span className="font-semibold">Guaranteed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Certificate</span>
                  <span className="font-semibold">Industry Recognized</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm">Course Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-300">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="font-bold">4.8/5</span>
                  <span className="text-sm opacity-80">(2,450 reviews)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </section>
  );
};

export default CourseOverview;
