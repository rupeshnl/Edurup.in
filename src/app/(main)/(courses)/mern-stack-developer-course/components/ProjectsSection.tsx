import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
  Globe,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with user authentication, product management, shopping cart, and payment integration.",
      image: "/Updated-01.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      features: [
        "User Authentication",
        "Payment Gateway",
        "Admin Dashboard",
        "Real-time Updates",
      ],
      level: "Advanced",
      duration: "4 weeks",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Interactive social media management platform with real-time analytics, post scheduling, and engagement tracking.",
      image: "/Updated-02.png",
      technologies: ["React", "Express", "MongoDB", "Socket.io", "Chart.js"],
      features: [
        "Real-time Chat",
        "Analytics",
        "Post Scheduler",
        "User Profiles",
      ],
      level: "Intermediate",
      duration: "3 weeks",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with team workflows, task assignments, and progress tracking.",
      image: "/Updated-03.png",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Material-UI"],
      features: [
        "Team Collaboration",
        "Task Tracking",
        "File Upload",
        "Notifications",
      ],
      level: "Intermediate",
      duration: "3 weeks",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 mb-4 px-4 py-2">
            <Monitor className="w-4 h-4 mr-2" />
            Real-world Projects
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Build
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Portfolio-Ready Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create impressive full-stack applications that showcase your skills
            to potential employers
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getLevelColor(project.level)}>
                    {project.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {project.duration}
                  </Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 dark:text-gray-400">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Complete Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Hours of Coding
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies Used
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Portfolio Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
