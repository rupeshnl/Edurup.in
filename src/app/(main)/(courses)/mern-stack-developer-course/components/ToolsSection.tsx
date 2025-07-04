import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Wrench, GitBranch } from "lucide-react";
import Image from "next/image";

const ToolsSection = () => {
  const toolCategories = [
    {
      category: "Development Environment",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      color: "blue",
      tools: [
        {
          name: "Visual Studio Code",
          description: "Primary code editor with extensions",
        },
        {
          name: "Chrome DevTools",
          description: "Browser debugging and optimization",
        },
        { name: "Postman", description: "API testing and documentation" },
        { name: "npm/yarn", description: "Package management" },
      ],
    },
    {
      category: "Version Control & Collaboration",
      icon: <GitBranch className="w-8 h-8 text-green-600" />,
      color: "green",
      tools: [
        { name: "Git", description: "Version control system" },
        { name: "GitHub", description: "Code hosting and collaboration" },
        { name: "GitLab", description: "DevOps platform" },
        { name: "Slack", description: "Team communication" },
      ],
    },
    {
      category: "Database & Storage",
      icon: <Database className="w-8 h-8 text-purple-600" />,
      color: "purple",
      tools: [
        { name: "MongoDB Atlas", description: "Cloud database service" },
        { name: "MongoDB Compass", description: "GUI for MongoDB" },
        { name: "Redis", description: "In-memory data store" },
        { name: "AWS S3", description: "File storage service" },
      ],
    },
    {
      category: "Deployment & Hosting",
      icon: <Server className="w-8 h-8 text-orange-600" />,
      color: "orange",
      tools: [
        { name: "Heroku", description: "Cloud platform for deployment" },
        { name: "Netlify", description: "Frontend hosting service" },
        { name: "AWS EC2", description: "Virtual servers in the cloud" },
        { name: "Docker", description: "Containerization platform" },
      ],
    },
    {
      category: "Design & Frontend",
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      color: "pink",
      tools: [
        { name: "Figma", description: "UI/UX design tool" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "Material-UI", description: "React component library" },
        { name: "React DevTools", description: "React debugging extension" },
      ],
    },
    {
      category: "Testing & Quality",
      icon: <Wrench className="w-8 h-8 text-red-600" />,
      color: "red",
      tools: [
        { name: "Jest", description: "JavaScript testing framework" },
        { name: "Cypress", description: "End-to-end testing" },
        { name: "ESLint", description: "Code linting and formatting" },
        { name: "Prettier", description: "Code formatting tool" },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      green:
        "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      purple:
        "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      orange:
        "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      pink: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20",
      red: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4 px-4 py-2">
            <Wrench className="w-4 h-4 mr-2" />
            Tools & Technologies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Industry-Standard
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Tools & Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master the tools and technologies used by professionals in leading
            tech companies
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <Card
              key={index}
              className={`border-0 shadow-xl bg-gradient-to-br ${getColorClasses(
                category.color
              )} hover:shadow-2xl transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-4 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Hands-on Experience</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Set up complete development environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Learn industry best practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Build and deploy real applications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Master debugging and testing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-blue-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Career Readiness</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Portfolio projects with these tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Interview preparation on tools</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Certification in key technologies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Industry networking opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tool Stats */}
        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-400">
                Tools Covered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">
                Hands-on Practice
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-400">
                Tool Categories
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">
                Lifetime Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
