"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Amazon",
      image: "/person1.jpg",
      rating: 5,
      testimonial:
        "The MERN stack course was a game-changer for my career. The instructors were incredibly knowledgeable and the hands-on projects gave me real-world experience. I landed my dream job at Amazon within 2 months of completing the course!",
      package: "₹12 LPA",
      course: "MERN Stack Developer",
    },
    {
      name: "Rahul Kumar",
      role: "Software Engineer",
      company: "Microsoft",
      image: "/person2.jpg",
      rating: 5,
      testimonial:
        "Coming from a non-technical background, I was skeptical about learning programming. But the course structure was so well-designed that I could grasp complex concepts easily. The placement support was exceptional!",
      package: "₹15 LPA",
      course: "MERN Stack Developer",
    },
    {
      name: "Anitha Reddy",
      role: "Frontend Developer",
      company: "Google",
      image: "/person3.jpg",
      rating: 5,
      testimonial:
        "The mentorship program and 1:1 sessions were invaluable. My mentor guided me through every step of the learning process. The portfolio I built during the course impressed all the interviewers.",
      package: "₹18 LPA",
      course: "MERN Stack Developer",
    },
    {
      name: "Suresh Patel",
      role: "Backend Developer",
      company: "Netflix",
      image: "/person1.jpg",
      rating: 5,
      testimonial:
        "The course content is up-to-date with industry standards. The projects we built were similar to what I work on at Netflix now. It was like getting a preview of my future job!",
      package: "₹14 LPA",
      course: "MERN Stack Developer",
    },
    {
      name: "Lakshmi Nair",
      role: "Full Stack Developer",
      company: "Uber",
      image: "/person2.jpg",
      rating: 5,
      testimonial:
        "The interview preparation sessions were thorough. They covered both technical and behavioral aspects. I felt confident walking into every interview, and it showed in the results.",
      package: "₹11 LPA",
      course: "MERN Stack Developer",
    },
    {
      name: "Karthik Reddy",
      role: "MERN Developer",
      company: "Flipkart",
      image: "/person3.jpg",
      rating: 5,
      testimonial:
        "The doubt resolution support was amazing. Whenever I got stuck, there was always someone available to help. The community of learners was very supportive and collaborative.",
      package: "₹10 LPA",
      course: "MERN Stack Developer",
    },
  ];

  const overallStats = {
    totalStudents: 5000,
    averageRating: 4.9,
    successRate: 95,
    averagePackage: "₹8.5L",
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  // Auto-play functionality - always enabled
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Get visible testimonials based on screen size
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setVisibleCount(getVisibleCount());
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentSlide + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 mb-4 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Student Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from students who transformed their careers with our
            MERN Stack course
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {overallStats.totalStudents.toLocaleString()}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Happy Students
            </div>
          </Card>

          <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-100 dark:from-green-900/20 dark:to-blue-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {overallStats.averageRating}/5
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Average Rating
            </div>
          </Card>

          <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {overallStats.successRate}%
            </div>
            <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
          </Card>

          <Card className="text-center p-6 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {overallStats.averagePackage}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Avg Package</div>
          </Card>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Student Testimonials
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="p-2 rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="p-2 rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className={`grid gap-8 transition-all duration-500 ease-in-out ${
                visibleCount === 1
                  ? "grid-cols-1"
                  : visibleCount === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <Card
                  key={`${currentSlide}-${index}`}
                  className="border-0 shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic line-clamp-4">
                      &quot;{testimonial.testimonial}&quot;
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-12 h-12 border-2 border-gray-200 dark:border-gray-700">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {testimonial.package}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Start your journey today and become our next success story
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
