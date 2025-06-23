import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock9, GraduationCap, Laptop, Trophy } from "lucide-react";

import React from "react";

const FeaturedCourses = () => {
    const softwareCourses = [
        {
            title: "Mern Full Stack",
            description:
                "Become a job-ready Frontend web professional in 20 weeks. Join the largest tech community in India. Pay only after you get a job above 3.6 LPA",
            duration: "4 Months",
            graduation: "For Final year",
            classes: "Part-time online live classes",
            job: "100% Job Assurance",
        },

        {
            title: "Certification in Automation Testing",
            description:
                "Become a job-ready Data Science professional in 16 weeks. Join the largest tech community in India. Pay only after you get a job above 3.6 LPA",
            duration: "3 Months",
            graduation: "For Final year",
            classes: "Part-time online live classes",
            job: "100% Job Assurance",
        },
    ];
    const businessCourses = [
        {
            title: "Certification in Advanced Digital Marketing",
            description:
                "Become a job-ready Data Science professional in 12 weeks. Join the largest tech community in India. Pay only after you get a job above 3 LPA",
            duration: "3 Months",
            graduation: "For Final year",
            classes: "Part-time online live classes",
            job: "100% Job Assurance",
        },
        {
            title: "Certification in Financial Analyst",
            description:
                "Become a job-ready Data Science professional in 12 weeks. Join the largest tech community in India. Pay only after you get a job above 3 LPA",
            duration: "3 Months",
            graduation: "For Final year",
            classes: "Part-time online live classes",
            job: "100% Job Assurance",
        },
        {
            title: "Certification in Business Development",
            description:
                "Become a job-ready Data Science professional in 8 weeks. Join the largest tech community in India. Pay only after you get a job above 2.4 LPA",
            duration: "2 Months",
            graduation: "For Final year",
            classes: "Part-time online live classes",
            job: "100% Job Assurance",
        },
    ];
    const renderCourseCard = (course: any) => (
        <Card
            key={course.title}
            className="max-w-[350px] h-[430px] flex flex-col justify-between
                 rounded-xl border border-gray-200 dark:border-gray-700
                 bg-gradient-to-tr from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                 shadow-xl hover:shadow-2xl transition-shadow duration-300
                 hover:scale-[1.03] transform cursor-pointer"
        >
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary dark:text-green-400">
                    {course.title}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {course.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3 text-primary dark:text-green-400 text-base font-medium">
                <div className="flex items-center gap-3">
                    <Clock9 className="text-green-400" size={20} />
                    <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                    <GraduationCap className="text-green-400" size={20} />
                    <span>{course.graduation}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Laptop className="text-green-400" size={20} />
                    <span>{course.classes}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Trophy className="text-green-400" size={20} />
                    <span>{course.job}</span>
                </div>
            </CardContent>

            <CardFooter className="pt-0">
                <Button
                    variant="outline"
                    className="w-full border-green-400 text-green-600 hover:bg-green-100 dark:hover:bg-green-700"
                >
                    Enroll Now
                </Button>
            </CardFooter>
        </Card>
    );
    return (
        <>
            <div className="pt-[1.3rem] sm:pt-[2rem] pb-[4rem] flex flex-col items-center justify-center dark:bg-dark">
                <h1 className="mb-4 text-3xl sm:text-5xl font-semibold text-center text-primary ">
                    Featured{" "}
                    <span className="text-fg dark:text-fg">Courses</span>
                </h1>
                <Tabs
                    defaultValue="sc"
                    className="w-[270px] sm:w-[400px] md:w-full flex flex-col items-center justify-center"
                >
                    <TabsList className="mb-5 w-[270px] sm:w-[400px] hidden sm:grid  grid-cols-2 border-fg">
                        <TabsTrigger value="sc">Software Courses</TabsTrigger>
                        <TabsTrigger value="bc">Business Courses</TabsTrigger>
                    </TabsList>
                    <TabsList className="mb-5 sm:hidden h-11 grid grid-cols-2 border-fg">
                        <TabsTrigger value="sc" className="text-sm">
                            Software Courses
                        </TabsTrigger>
                        <TabsTrigger value="bc" className="text-sm">
                            Business Courses
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="sc" className="w-full">
                        <div className="flex flex-wrap justify-center gap-8">
                            {softwareCourses.map(renderCourseCard)}
                        </div>
                    </TabsContent>

                    <TabsContent value="bc" className="w-full">
                        <div className="flex  flex-wrap justify-center gap-8">
                            {businessCourses.map(renderCourseCard)}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <Separator />
        </>
    );
};

export default FeaturedCourses;
