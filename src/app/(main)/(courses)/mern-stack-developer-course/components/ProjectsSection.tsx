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
    {
      title: "Real Estate Platform",
      description:
        "Property listing and management system with search filters, virtual tours, and agent dashboard.",
      image: "/Updated-04.png",
      technologies: ["React", "Express", "MongoDB", "Cloudinary", "Maps API"],
      features: [
        "Property Search",
        "Virtual Tours",
        "Agent Portal",
        "Map Integration",
      ],
      level: "Advanced",
      duration: "4 weeks",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course creation, video streaming, assignments, and progress tracking.",
      image: "/Updated-05.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3", "Video.js"],
      features: [
        "Course Creation",
        "Video Streaming",
        "Assignments",
        "Progress Tracking",
      ],
      level: "Advanced",
      duration: "5 weeks",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Food Delivery App",
      description:
        "Restaurant and food delivery platform with order management, real-time tracking, and payment processing.",
      image: "/Updated-06.png",
      technologies: ["React", "Express", "MongoDB", "Razorpay", "Socket.io"],
      features: [
        "Restaurant Management",
        "Order Tracking",
        "Payment Processing",
        "Reviews",
      ],
      level: "Advanced",
      duration: "4 weeks",
      icon: <Smartphone className="w-6 h-6" />,
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

        {/* Project Learning Path */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-800/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Progressive Learning Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Start Simple
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Begin with basic CRUD applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Add Complexity
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Integrate authentication and APIs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Advanced Features
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Real-time features and deployment
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-100 dark:from-green-900/20 dark:to-blue-800/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Industry-Ready Portfolio
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    6+ Complete applications
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    GitHub repository with clean code
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Live deployments for demos
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Documentation and README files
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Interview-ready explanations
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
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
