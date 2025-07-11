import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Clock, PlayCircle, FileText, Code2 } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCurriculumProps {
  course: Course;
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({ course }) => {
  // Enhance curriculum data with lesson and project counts
  const enhancedCurriculum = course.curriculum.map((module, index) => ({
    ...module,
    lessons: 20 + index * 5, // Dynamic lesson count
    projects: index < 2 ? 3 : index < 4 ? 4 : 2, // Varying project counts
  }));

  const totalStats = enhancedCurriculum.reduce(
    (acc, module) => ({
      lessons: acc.lessons + module.lessons,
      projects: acc.projects + module.projects,
      duration: acc.duration + parseInt(module.duration.split(" ")[0] || "4"),
    }),
    { lessons: 0, projects: 0, duration: 0 }
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4 px-4 py-2">
            <Code2 className="w-4 h-4 mr-2" />
            Course Curriculum
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {" "}
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Structured curriculum designed to take you from beginner to
            industry-ready developer
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
              <PlayCircle className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">{totalStats.lessons}</div>
            <div className="text-blue-100">Video Lessons</div>
          </Card>

          <Card className="text-center p-6 border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">{totalStats.projects}</div>
            <div className="text-green-100">Hands-on Projects</div>
          </Card>

          <Card className="text-center p-6 border-0 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">{totalStats.duration}</div>
            <div className="text-purple-100">Total Weeks</div>
          </Card>
        </div>

        {/* Curriculum Accordion */}
        <div className="w-full flex flex-col items-center lg:flex-row justify-between md:items-start gap-3">
          <Card className="bg-white dark:bg-gray-900 border-0 shadow-xl flex-1">
            <CardContent className="p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {enhancedCurriculum.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`}>
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-md md:text-lg font-semibold text-gray-900 dark:text-white">
                              {module.module}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <div className="flex items-center justify-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs">
                                  {module.duration}
                                </span>
                              </div>
                              <div className="flex items-center justify-center gap-1">
                                <PlayCircle className="w-4 h-4" />
                                <span className="text-xs">
                                  {module.lessons} lessons
                                </span>
                              </div>
                              <div className="flex items-center justify-center gap-1">
                                <FileText className="w-4 h-4" />
                                <span className="text-xs">
                                  {module.projects} projects
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="pl-14">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Topics Covered:
                        </h4>
                        <div className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div
                              key={topicIndex}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">
                                {topic}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Course Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Duration</span>
                  <span className="font-semibold">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Format</span>
                  <span className="font-semibold">Live + Recorded</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Projects</span>
                  <span className="font-semibold">
                    {totalStats.projects}+ Real-world
                  </span>
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
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculum;
