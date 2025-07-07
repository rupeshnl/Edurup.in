import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Course } from "@/data/courses";

interface CompanyLogosProps {
  course: Course;
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({ course }) => {
  const companies = [
    { name: "Amazon", logo: "/amazon.png" },
    { name: "Netflix", logo: "/netflix.png" },
    { name: "Uber", logo: "/uber.png" },
    { name: "Dominos", logo: "/dominos.png" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4 px-4 py-2">
            Industry Recognition
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-green-600">500+</span> Companies Hire Our
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            {course.label} Developers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful developers who got placed in top
            companies
          </p>
        </div>

        {/* Company Logos Marquee */}
        {/* <div className="relative overflow-hidden">
          <div className="flex animate-marquee">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className="mb-1 sm:mb-10 w-full px-5 space-y-6 overflow-hidden">
          {/* First scrolling line */}
          <div className="relative fade-mask bg-transparent flex overflow-x-hidden w-full">
            <div className="animate-marquee5 sm:animate-marquee whitespace-nowrap">
              <Image
                src="/maurquee1.jpg"
                alt="Marquee Image"
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
            <div className="absolute top-0 animate-marquee6 sm:animate-marquee2 whitespace-nowrap">
              <Image
                src="/maurquee1.jpg"
                alt="Marquee Image"
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
          </div>

          {/* Second scrolling line */}
          <div className="relative fade-mask  flex overflow-x-hidden w-full">
            <div className="animate-marquee7 sm:animate-marquee3 whitespace-nowrap">
              <Image
                src="/maurquee2.jpg"
                alt="Marquee Image"
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
            <div className="absolute top-0 animate-marquee8 sm:animate-marquee4 whitespace-nowrap">
              <Image
                src="/maurquee2.jpg"
                alt="Marquee Image"
                width={3424}
                height={64}
                className="h-[1.9rem] sm:h-[4rem] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600 dark:text-gray-400">
              Placement Rate
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹8.5L</div>
            <div className="text-gray-600 dark:text-gray-400">
              Average Package
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Hiring Partners
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">5000+</div>
            <div className="text-gray-600 dark:text-gray-400">
              Students Placed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
