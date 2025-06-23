import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    MapPin,
    Mail,
    Phone,
    Clock,
    Award,
    Users,
    BookOpen,
    Globe,
    Shield,
    Star,
    ArrowRight,
    Download,
} from "lucide-react";

const popularCourses = [
    {
        label: "Full Stack Web Development",
        href: "/courses/fullstack",
        students: "12,450+",
    },
    {
        label: "Digital Marketing Mastery",
        href: "/courses/digital-marketing",
        students: "8,230+",
    },
    {
        label: "Data Science & Analytics",
        href: "/courses/data-science",
        students: "15,670+",
    },
    {
        label: "UI/UX Design Bootcamp",
        href: "/courses/ui-ux",
        students: "6,890+",
    },
];

const quickLinks = [
    { label: "All Courses", href: "/courses" },
    { label: "Free Courses", href: "/free-courses" },
    { label: "Career Guidance", href: "/career" },
    { label: "Certification", href: "/certification" },
    { label: "Corporate Training", href: "/corporate" },
];

const support = [
    { label: "Help Center", href: "/help" },
    { label: "Student Support", href: "/support" },
    { label: "Technical Support", href: "/tech-support" },
    { label: "Course Refund", href: "/refund" },
    { label: "Accessibility", href: "/accessibility" },
];

const company = [
    { label: "About Edurup", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Careers", href: "/careers" },
    { label: "Press & Media", href: "/press" },
    { label: "Partnerships", href: "/partners" },
    { label: "Affiliate Program", href: "/affiliate" },
];

const legal = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR Compliance", href: "/gdpr" },
];

const socialLinks = [
    {
        label: "Facebook",
        href: "https://facebook.com/edurup",
        icon: Facebook,
        followers: "45K",
    },
    {
        label: "Instagram",
        href: "https://instagram.com/edurup",
        icon: Instagram,
        followers: "32K",
    },
    {
        label: "Twitter",
        href: "https://twitter.com/edurup",
        icon: Twitter,
        followers: "28K",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/company/edurup",
        icon: Linkedin,
        followers: "67K",
    },
    {
        label: "YouTube",
        href: "https://youtube.com/edurup",
        icon: Youtube,
        followers: "125K",
    },
];

const Footer = () => {
    return (
        <footer className="dark:bg-dark bg-primary">
            {/* Newsletter */}
            <div className="border-b border-muted/20">
                <div className="container mx-auto px-6 py-12">
                    <div className="bg-gradient-to-r from-fg/10 to-fg/5 rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    Stay ahead with our latest courses & updates
                                </h3>
                                <p className="text-muted-foreground text-lg">
                                    Join 50,000+ learners who get exclusive
                                    access to new courses, career tips, and
                                    industry insights.
                                </p>
                                <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-4 w-4 text-fg" />
                                        <span>No spam, ever</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Star className="h-4 w-4 text-fg" />
                                        <span>Weekly insights</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="flex-1 h-12 bg-background border-2 border-muted focus:border-fg transition-all duration-300 ease-in-out"
                                    />
                                    <Button className="h-12 bg-fg hover:bg-fg/90 text-primary px-8 font-semibold transition-all duration-300 ease-in-out">
                                        Subscribe
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    By subscribing, you agree to our Privacy
                                    Policy and consent to receive updates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-fg to-fg/80 bg-clip-text text-transparent">
                                Edurup
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Transforming careers through world-class
                                education. Learn from industry experts and
                                advance your skills with our comprehensive
                                courses.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="text-center p-4 rounded-lg bg-muted/20">
                                <div className="text-2xl font-bold text-fg">
                                    50K+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Students
                                </div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-muted/20">
                                <div className="text-2xl font-bold text-fg">
                                    200+
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Courses
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 text-left">
                            <Link
                                href="https://www.google.com/maps?q=Salarpuria+Touch+Stone,+Kadbuseenahalli,+Bangalore+-+560103"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-muted-foreground hover:text-fg transition"
                            >
                                <MapPin className="h-5 w-5 text-fg" />
                                <span>
                                    Salarpuria Touch Stone, Kadbuseenahalli,
                                    Bangalore - 560103
                                </span>
                            </Link>
                            <Link
                                href="tel:+919876543210"
                                className="flex items-center gap-3 text-muted-foreground hover:text-fg transition"
                            >
                                <Phone className="h-5 w-5 text-fg" />
                                <span>+91 98765 43210</span>
                            </Link>
                            <Link
                                href="mailto:hello@edurup.com"
                                className="flex items-center gap-3 text-muted-foreground hover:text-fg transition"
                            >
                                <Mail className="h-5 w-5 text-fg" />
                                <span>hello@edurup.com</span>
                            </Link>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <Clock className="h-5 w-5 text-fg" />
                                <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                            </div>
                        </div>
                    </div>

                    {/* Popular Courses */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-foreground relative">
                            Popular Courses
                            <div className="absolute -bottom-2 left-0 w-8 h-1 bg-fg rounded-full"></div>
                        </h4>
                        <ul className="space-y-4">
                            {popularCourses.map((course) => (
                                <li key={course.href}>
                                    <Link
                                        href={course.href}
                                        className="group block p-3 rounded-lg hover:bg-muted/20 transition-all duration-300 ease-in-out"
                                    >
                                        <div className="text-sm font-medium text-foreground group-hover:text-fg transition-colors duration-300 ease-in-out">
                                            {course.label}
                                        </div>
                                        <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                            <Users className="h-3 w-3" />
                                            {course.students} students
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links, Support, Company */}
                    {[quickLinks, support, company].map((section, idx) => (
                        <div key={idx} className="space-y-6">
                            <h4 className="text-lg font-bold text-foreground relative">
                                {["Quick Links", "Support", "Company"][idx]}
                                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-fg rounded-full"></div>
                            </h4>
                            <ul className="space-y-3">
                                {section.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-fg transition-all duration-300 ease-in-out transform hover:translate-x-1 inline-block"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="mt-16 pt-8 border-t border-muted/20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {[Award, Shield, Globe, BookOpen].map((Icon, i) => (
                        <div key={i}>
                            <Icon className="h-12 w-12 text-fg mx-auto mb-2" />
                            <div className="text-sm font-medium">
                                {
                                    [
                                        "ISO 9001:2015",
                                        "GDPR",
                                        "Global",
                                        "Accredited",
                                    ][i]
                                }
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {
                                    [
                                        "Certified",
                                        "Compliant",
                                        "Recognition",
                                        "Courses",
                                    ][i]
                                }
                            </div>
                        </div>
                    ))}
                </div>

                {/* Social Media & Apps */}
                <div className="mt-12 pt-8 border-t border-muted/20 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div>
                        <h4 className="text-lg font-bold mb-4">
                            Connect With Us
                        </h4>
                        <div className="flex gap-4">
                            {socialLinks.map(
                                ({ href, icon: Icon, followers }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="group"
                                    >
                                        <div className="w-12 h-12 rounded-full border-2 border-muted hover:border-fg flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-fg group-hover:text-primary relative">
                                            <Icon className="h-5 w-5" />
                                            <div className="absolute -top-2 -right-2 bg-fg text-primary text-xs px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                                {followers}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                    <div className="text-center lg:text-right">
                        <h4 className="text-lg font-bold mb-4">
                            Download Our App
                        </h4>
                        <div className="flex flex-col sm:flex-row gap-3">
                            {["App Store", "Google Play"].map((label) => (
                                <Button
                                    key={label}
                                    variant="outline"
                                    className="border-2 border-muted hover:border-fg transition-all duration-300 ease-in-out"
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <Separator className="opacity-20" />
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>© 2024 Edurup Education Pvt. Ltd. All rights reserved.</p>
                <div className="flex flex-wrap gap-2">
                    {legal.map((item, i) => (
                        <span
                            key={item.href}
                            className="flex items-center gap-2"
                        >
                            <Link
                                href={item.href}
                                className="hover:text-fg transition-colors duration-300 ease-in-out"
                            >
                                {item.label}
                            </Link>
                            {i < legal.length - 1 && (
                                <span className="text-muted/50">|</span>
                            )}
                        </span>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>English (India)</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
