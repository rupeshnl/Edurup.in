import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Award, Users, BookOpen } from "lucide-react";
import Image from "next/image";

const Mentors = () => {
  const mentors = [
    {
      name: "Priya Sharma",
      image: "/mentor1.jpeg",
      title: "Senior Full Stack Developer",
      company: "Amazon",
      experience: "8+ Years",
      expertise: ["React", "Node.js", "AWS", "MongoDB"],
      rating: 4.9,
      students: 1200,
    },
    {
      name: "Rahul Kumar",
      image: "/mentor2.jpg",
      title: "Lead MERN Developer",
      company: "Microsoft",
      experience: "10+ Years",
      expertise: ["JavaScript", "React", "Express", "DevOps"],
      rating: 4.8,
      students: 980,
    },
    {
      name: "Anita Patel",
      image: "/mentor3.jpg",
      title: "Tech Lead",
      company: "Google",
      experience: "7+ Years",
      expertise: ["Frontend", "Backend", "System Design", "Microservices"],
      rating: 4.9,
      students: 1500,
    },
    {
      name: "Suresh Reddy",
      image: "/mentor4.jpg",
      title: "Principal Engineer",
      company: "Netflix",
      experience: "12+ Years",
      expertise: ["Full Stack", "Architecture", "Scalability", "Performance"],
      rating: 4.7,
      students: 750,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Meet Your Mentors
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 heading-responsive">
            Learn from{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent inline-block">
              Industry Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get guidance from experienced professionals working at top tech
            companies
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 mx-auto border-4 border-white shadow-lg">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-500 text-white px-2 py-1 text-xs">
                      {mentor.experience}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {mentor.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                  {mentor.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {mentor.company}
                </p>

                {/* Rating & Students */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{mentor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{mentor.students}+ students</span>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {mentor.expertise.slice(0, 3).map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {mentor.expertise.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{mentor.expertise.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mentorship Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6 border-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              1:1 Mentorship
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Personal guidance and career advice from industry experts
            </p>
          </Card>

          <Card className="text-center p-6 border-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Live Sessions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Interactive live classes with Q&A and hands-on coding
            </p>
          </Card>

          <Card className="text-center p-6 border-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Code Reviews
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get your code reviewed by experts to improve quality
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
