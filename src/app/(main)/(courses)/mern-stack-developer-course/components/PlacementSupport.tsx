import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  MessageSquare,
  Trophy,
  TrendingUp,
  Target,
  CheckCircle,
  Briefcase,
  DollarSign,
  Award,
} from "lucide-react";
import Image from "next/image";

const PlacementSupport = () => {
  const placementSteps = [
    {
      step: 1,
      title: "Resume Building",
      description: "Professional resume crafting with ATS optimization",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      features: [
        "ATS-friendly format",
        "Technical skills highlighting",
        "Project showcase",
        "Multiple iterations",
      ],
    },
    {
      step: 2,
      title: "Portfolio Development",
      description: "Create an impressive online portfolio",
      icon: <Trophy className="w-8 h-8 text-green-600" />,
      features: [
        "GitHub optimization",
        "Live project demos",
        "Technical documentation",
        "Professional presentation",
      ],
    },
    {
      step: 3,
      title: "Interview Preparation",
      description: "Comprehensive interview training and practice",
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      features: [
        "Mock interviews",
        "Technical questions",
        "Behavioral preparation",
        "Feedback sessions",
      ],
    },
    {
      step: 4,
      title: "Job Applications",
      description: "Strategic job search and application process",
      icon: <Target className="w-8 h-8 text-orange-600" />,
      features: [
        "Company research",
        "Application strategy",
        "Follow-up guidance",
        "Salary negotiation",
      ],
    },
  ];

  const placementStats = [
    {
      value: "95%",
      label: "Placement Rate",
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    },
    {
      value: "₹8.5L",
      label: "Average Package",
      icon: <DollarSign className="w-6 h-6 text-blue-600" />,
    },
    {
      value: "500+",
      label: "Hiring Partners",
      icon: <Briefcase className="w-6 h-6 text-purple-600" />,
    },
    {
      value: "5000+",
      label: "Students Placed",
      icon: <Users className="w-6 h-6 text-orange-600" />,
    },
  ];

  const hiringPartners = [
    { name: "Amazon", logo: "/amazon.png" },
    { name: "Netflix", logo: "/netflix.png" },
    { name: "Uber", logo: "/uber.png" },
    { name: "Dominos", logo: "/dominos.png" },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Amazon",
      package: "₹12 LPA",
      image: "/person1.jpg",
      story: "From marketing executive to full-stack developer in 8 months",
    },
    {
      name: "Rahul Kumar",
      role: "MERN Developer",
      company: "Flipkart",
      package: "₹10 LPA",
      image: "/person2.jpg",
      story: "Career transition from mechanical engineer to tech",
    },
    {
      name: "Anitha Reddy",
      role: "Frontend Developer",
      company: "Microsoft",
      package: "₹15 LPA",
      image: "/person3.jpg",
      story: "Fresh graduate landed dream job with our placement support",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Placement Support
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-6 heading-responsive">
            From Learning to{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent inline-block">
              Landing Your Dream Job
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive placement assistance to help you transition from
            student to employed developer
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {placementStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 border-0 shadow-xl bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-800/20 rounded-full mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Placement Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our 4-Step Placement Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementSteps.map((step, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-xl bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>

                  <div className="mt-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {story.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {story.role}
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        {story.company}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge className="bg-green-100 text-green-800">
                      {story.package}
                    </Badge>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm italic">
                    &quot;{story.story}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hiring Partners */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Our Hiring Partners
          </h3>
          <div className="flex justify-center items-center space-x-12 mb-8">
            {hiringPartners.map((partner, index) => (
              <Image
                key={index}
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            And 500+ more companies actively hiring our graduates
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
          >
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlacementSupport;
