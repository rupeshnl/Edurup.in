import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Database, Globe, Server } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseOverviewProps {
  course: Course;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ course }) => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Frontend Mastery",
      description:
        course.id === "mern-stack"
          ? "Master React, Redux, and modern JavaScript to build interactive user interfaces"
          : course.id === "data-analytics"
          ? "Master data visualization and frontend dashboard development"
          : "Master frontend technologies and user interface design",
      technologies:
        course.id === "mern-stack"
          ? ["React", "Redux", "JavaScript ES6+", "HTML5", "CSS3"]
          : course.id === "data-analytics"
          ? ["Python", "Jupyter", "Plotly", "Streamlit", "Dash"]
          : ["HTML5", "CSS3", "JavaScript", "React", "Vue.js"],
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Backend Development",
      description:
        course.id === "mern-stack"
          ? "Build robust APIs and server-side applications with Node.js and Express"
          : course.id === "data-analytics"
          ? "Learn data processing and API development for analytics applications"
          : "Build scalable backend systems and APIs",
      technologies:
        course.id === "mern-stack"
          ? ["Node.js", "Express.js", "RESTful APIs", "Authentication"]
          : course.id === "data-analytics"
          ? ["Python", "Flask", "Django", "FastAPI"]
          : ["Node.js", "Express.js", "API Development", "Authentication"],
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Management",
      description:
        course.id === "mern-stack"
          ? "Learn MongoDB for NoSQL database design and data modeling"
          : course.id === "data-analytics"
          ? "Master SQL databases and data warehousing for analytics"
          : "Learn database design and data management",
      technologies:
        course.id === "mern-stack"
          ? ["MongoDB", "Mongoose", "Database Design", "Data Modeling"]
          : course.id === "data-analytics"
          ? ["SQL", "PostgreSQL", "MySQL", "Data Warehousing"]
          : ["MongoDB", "PostgreSQL", "Database Design", "Data Modeling"],
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Full-Stack Integration",
      description:
        course.id === "mern-stack"
          ? "Connect frontend and backend to create complete web applications"
          : course.id === "data-analytics"
          ? "Build end-to-end analytics solutions and dashboards"
          : "Create complete applications with seamless integration",
      technologies:
        course.id === "mern-stack"
          ? ["API Integration", "State Management", "Deployment", "DevOps"]
          : course.id === "data-analytics"
          ? [
              "Dashboard Development",
              "Analytics Integration",
              "Cloud Deployment",
            ]
          : ["API Integration", "State Management", "Deployment", "DevOps"],
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
            Complete {course.label}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent inline-block">
              Learning Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {course.heroDescription}
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
      </div>
    </section>
  );
};

export default CourseOverview;
