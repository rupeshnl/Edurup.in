import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
    Users,
    Award,
    BookOpen,
    Lightbulb,
    Shield,
    Globe,
    TrendingUp,
    ArrowRight,
    Star,
    Heart,
    Zap,
    Clock,
    UserCheck,
    Briefcase,
    GraduationCap,
    Rocket,
} from "lucide-react";

const stats = [
    { number: "50,000+", label: "Students Trained", icon: Users },
    { number: "200+", label: "Expert Instructors", icon: UserCheck },
    { number: "500+", label: "Courses Available", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
];

const whyChooseUs = [
    {
        icon: Award,
        title: "Industry Expertise",
        description:
            "Learn from professionals with 10+ years of real-world experience in their respective fields.",
    },
    {
        icon: Rocket,
        title: "Career-Focused Learning",
        description:
            "Our curriculum is designed to meet current industry demands and boost your career prospects.",
    },
    {
        icon: Users,
        title: "Personalized Mentorship",
        description:
            "Get one-on-one guidance from dedicated mentors throughout your learning journey.",
    },
    {
        icon: Globe,
        title: "Global Recognition",
        description:
            "Earn certificates that are recognized by leading companies worldwide.",
    },
    {
        icon: Clock,
        title: "Flexible Learning",
        description:
            "Study at your own pace with 24/7 access to course materials and resources.",
    },
    {
        icon: Briefcase,
        title: "Job Placement Support",
        description:
            "Comprehensive career services including resume building and interview preparation.",
    },
];

const process = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We assess your current skills and career goals to create a personalized learning path.",
    },
    {
        step: "02",
        title: "Learning",
        description:
            "Engage with interactive content, hands-on projects, and expert-led sessions.",
    },
    {
        step: "03",
        title: "Practice",
        description:
            "Apply your knowledge through real-world projects and industry simulations.",
    },
    {
        step: "04",
        title: "Certification",
        description:
            "Earn recognized certificates and showcase your new skills to employers.",
    },
];

const values = [
    {
        icon: Heart,
        title: "Student-Centric",
        description:
            "Every decision we make prioritizes our students' success and learning experience.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "We continuously evolve our teaching methods using the latest educational technologies.",
    },
    {
        icon: Shield,
        title: "Quality Assurance",
        description:
            "All our courses undergo rigorous quality checks to ensure the highest standards.",
    },
    {
        icon: Zap,
        title: "Results-Driven",
        description:
            "We measure success by the career advancement and satisfaction of our graduates.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-primary py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 bg-fg/20 text-fg border-fg/30 hover:bg-fg/30">
                            Transforming Careers Since 2020
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Empowering Minds,
                            <span className="block bg-gradient-to-r from-fg to-fg/80 bg-clip-text text-transparent">
                                Shaping Futures
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
                            At Edurup, we believe that quality education should
                            be accessible to everyone. We're on a mission to
                            bridge the skills gap and create opportunities for
                            learners worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-fg hover:bg-fg/90 text-primary font-semibold px-8"
                            >
                                Our Courses
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-foreground hover:bg-white hover:text-primary"
                            >
                                Watch Our Story
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-muted/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-fg/10 rounded-full mb-4">
                                        <IconComponent className="h-8 w-8 text-fg" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-muted-foreground font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Badge className="mb-6 bg-fg/10 text-fg border-fg/20">
                                Our Story
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Building the Future of
                                <span className="text-fg">
                                    {" "}
                                    Digital Education
                                </span>
                            </h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p className="text-lg">
                                    Founded in 2020 by a team of passionate
                                    educators and industry experts, Edurup
                                    emerged from a simple yet powerful vision:
                                    to make high-quality, practical education
                                    accessible to learners everywhere.
                                </p>
                                <p>
                                    We recognized that traditional education
                                    often falls short of preparing students for
                                    the rapidly evolving digital landscape.
                                    That's why we created a platform that
                                    bridges the gap between academic learning
                                    and industry requirements.
                                </p>
                                <p>
                                    Today, we're proud to have helped thousands
                                    of students transform their careers, with
                                    many securing positions at top companies
                                    worldwide. Our success is measured not just
                                    in numbers, but in the real impact we make
                                    on people's lives.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Button className="bg-fg hover:bg-fg/90 text-primary">
                                    Learn More About Our Mission
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/team-meeting.jpg"
                                    alt="Edurup team collaboration"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-fg text-primary p-6 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">4.9/5</div>
                                <div className="text-sm opacity-90">
                                    Student Rating
                                </div>
                                <div className="flex mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-current"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/95 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-block">
                            <div className="bg-fg/20 text-fg px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-fg/30">
                                Why Choose Edurup
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Excellence in Every
                            <span className="block bg-gradient-to-r from-fg to-fg/80 bg-clip-text text-transparent">
                                Learning Experience
                            </span>
                        </h2>
                        <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                            Discover what makes us the preferred choice for
                            thousands of learners worldwide. Our commitment to
                            quality education sets us apart.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {whyChooseUs.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="group relative">
                                    {/* Card */}
                                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:bg-white/20 hover:border-fg/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl">
                                        {/* Icon Container */}
                                        <div className="relative mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-fg/20 to-fg/10 rounded-2xl flex items-center justify-center group-hover:from-fg group-hover:to-fg/80 transition-all duration-500 group-hover:scale-110">
                                                <IconComponent className="h-8 w-8 text-fg group-hover:text-primary transition-colors duration-500" />
                                            </div>
                                            {/* Floating dot */}
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-fg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-fg transition-colors duration-300">
                                            {feature.title}
                                        </h3>
                                        <p className="text-foreground/80 leading-relaxed text-sm group-hover:text-foreground transition-colors duration-300">
                                            {feature.description}
                                        </p>

                                        {/* Hover Arrow */}
                                        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                                            <ArrowRight className="h-5 w-5 text-fg" />
                                        </div>
                                    </div>

                                    {/* Background Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-fg/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom Stats Section */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-fg mb-2 group-hover:scale-110 transition-transform duration-300">
                                    50K+
                                </div>
                                <div className="text-foreground/80 font-medium">
                                    Happy Students
                                </div>
                                <div className="w-12 h-1 bg-fg mx-auto mt-2 rounded-full"></div>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-fg mb-2 group-hover:scale-110 transition-transform duration-300">
                                    500+
                                </div>
                                <div className="text-foreground/80 font-medium">
                                    Expert Courses
                                </div>
                                <div className="w-12 h-1 bg-fg mx-auto mt-2 rounded-full"></div>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-fg mb-2 group-hover:scale-110 transition-transform duration-300">
                                    95%
                                </div>
                                <div className="text-foreground/80 font-medium">
                                    Success Rate
                                </div>
                                <div className="w-12 h-1 bg-fg mx-auto mt-2 rounded-full"></div>
                            </div>
                            <div className="group">
                                <div className="text-4xl md:text-5xl font-bold text-fg mb-2 group-hover:scale-110 transition-transform duration-300">
                                    24/7
                                </div>
                                <div className="text-foreground/80 font-medium">
                                    Support Available
                                </div>
                                <div className="w-12 h-1 bg-fg mx-auto mt-2 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="inline-flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-fg hover:bg-fg/90 text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Explore Our Courses
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-foreground hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-xl"
                            >
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge className="mb-6 bg-fg/10 text-fg border-fg/20">
                            Our Values
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            The Principles That Guide Us
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our core values shape everything we do, from course
                            development to student support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const IconComponent = value.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-fg/10 to-fg/5 rounded-full mb-6 group-hover:from-fg group-hover:to-fg/80 group-hover:text-primary transition-all duration-300">
                                        <IconComponent className="h-8 w-8 text-fg group-hover:text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 text-foreground">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <Badge className="mb-6 bg-fg/20 text-fg border-fg/30">
                            Our Process
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Your Journey to Success
                        </h2>
                        <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
                            We've designed a proven 4-step process that takes
                            you from beginner to job-ready professional.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20">
                                    <div className="text-4xl font-bold text-fg mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground/80 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="h-6 w-6 text-fg" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-fg/10 to-fg/5">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <GraduationCap className="h-16 w-16 text-fg mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                            Ready to Transform Your Career?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join thousands of successful graduates who have
                            advanced their careers with Edurup. Your journey to
                            success starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-fg hover:bg-fg/90 text-primary font-semibold px-8"
                            >
                                Explore Courses
                                <BookOpen className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-fg text-fg hover:bg-fg hover:text-primary"
                            >
                                Talk to an Advisor
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
