import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Search,
    TrendingUp,
    BookOpen,
    Users,
    Award,
    ChevronLeft,
    ChevronRight,
    Tag,
    Eye,
    Heart,
    Share2,
} from "lucide-react";

const featuredPost = {
    id: 1,
    title: "The Future of Online Learning: AI-Powered Personalized Education",
    excerpt:
        "Discover how artificial intelligence is revolutionizing the way we learn, creating personalized educational experiences that adapt to individual learning styles and pace.",
    author: "Dr. Sarah Johnson",
    authorRole: "Head of Educational Technology",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    views: "2.4k",
    likes: "156",
    featured: true,
};

const blogPosts = [
    {
        id: 2,
        title: "Mastering Full-Stack Development: A Complete Roadmap for 2024",
        excerpt:
            "Learn the essential skills and technologies needed to become a successful full-stack developer in today's competitive market.",
        author: "Michael Chen",
        authorRole: "Senior Developer",
        date: "Dec 12, 2024",
        readTime: "12 min read",
        category: "Development",
        image: "/placeholder.svg?height=300&width=400",
        views: "1.8k",
        likes: "89",
    },
    {
        id: 3,
        title: "Digital Marketing Trends That Will Dominate 2024",
        excerpt:
            "Stay ahead of the curve with these emerging digital marketing strategies and tools that are reshaping the industry.",
        author: "Emma Rodriguez",
        authorRole: "Marketing Strategist",
        date: "Dec 10, 2024",
        readTime: "6 min read",
        category: "Marketing",
        image: "/placeholder.svg?height=300&width=400",
        views: "3.2k",
        likes: "203",
    },
    {
        id: 4,
        title: "Building a Successful Career in Data Science",
        excerpt:
            "From beginner to expert: A comprehensive guide to launching and advancing your career in data science.",
        author: "Dr. James Wilson",
        authorRole: "Data Science Lead",
        date: "Dec 8, 2024",
        readTime: "10 min read",
        category: "Data Science",
        image: "/placeholder.svg?height=300&width=400",
        views: "2.1k",
        likes: "134",
    },
    {
        id: 5,
        title: "The Rise of Remote Learning: Best Practices for Online Education",
        excerpt:
            "Explore effective strategies and tools for creating engaging online learning experiences that rival traditional classroom education.",
        author: "Lisa Thompson",
        authorRole: "Education Consultant",
        date: "Dec 5, 2024",
        readTime: "7 min read",
        category: "Education",
        image: "/placeholder.svg?height=300&width=400",
        views: "1.5k",
        likes: "78",
    },
    {
        id: 6,
        title: "Cybersecurity Fundamentals Every Developer Should Know",
        excerpt:
            "Protect your applications and users with these essential cybersecurity practices and principles.",
        author: "Alex Kumar",
        authorRole: "Security Expert",
        date: "Dec 3, 2024",
        readTime: "9 min read",
        category: "Security",
        image: "/placeholder.svg?height=300&width=400",
        views: "2.7k",
        likes: "167",
    },
    {
        id: 7,
        title: "UI/UX Design Principles for Better User Experience",
        excerpt:
            "Learn the fundamental design principles that create intuitive and engaging user interfaces.",
        author: "Sophie Martinez",
        authorRole: "UX Designer",
        date: "Dec 1, 2024",
        readTime: "5 min read",
        category: "Design",
        image: "/placeholder.svg?height=300&width=400",
        views: "1.9k",
        likes: "112",
    },
];

const categories = [
    { name: "All", count: 24, active: true },
    { name: "Technology", count: 8 },
    { name: "Development", count: 6 },
    { name: "Marketing", count: 4 },
    { name: "Data Science", count: 3 },
    { name: "Design", count: 3 },
];

const popularPosts = [
    {
        title: "Complete Guide to React Hooks",
        views: "5.2k",
        date: "Nov 28, 2024",
    },
    {
        title: "Machine Learning for Beginners",
        views: "4.8k",
        date: "Nov 25, 2024",
    },
    {
        title: "Advanced CSS Techniques",
        views: "3.9k",
        date: "Nov 22, 2024",
    },
];

const stats = [
    { icon: BookOpen, label: "Articles", value: "200+" },
    { icon: Users, label: "Authors", value: "25+" },
    { icon: Eye, label: "Monthly Views", value: "50K+" },
    { icon: Award, label: "Featured Posts", value: "15+" },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Announcement Banner */}
            <div className="bg-primary text-foreground py-3">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                            <TrendingUp className="h-4 w-4" />
                            <span>
                                New Course Alert: Advanced AI & Machine Learning
                                - Enroll Now!
                            </span>
                        </div>
                        <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-foreground hover:bg-white hover:text-primary"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-br from-primary/5 to-fg/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 bg-fg/10 text-fg border-fg/20">
                            Educational Insights
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Learn, Grow, and
                            <span className="block text-fg">Stay Inspired</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Discover the latest trends, insights, and expert
                            advice in technology, education, and career
                            development.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search articles..."
                                className="pl-10 h-12 border-2 focus:border-fg"
                            />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-fg/10 rounded-full mb-3">
                                        <IconComponent className="h-6 w-6 text-fg" />
                                    </div>
                                    <div className="text-2xl font-bold text-foreground">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-foreground">
                                Featured Article
                            </h2>
                            <Badge className="bg-fg text-primary">
                                Editor's Pick
                            </Badge>
                        </div>

                        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-fg/20">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={
                                            featuredPost.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={featuredPost.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-fg text-primary">
                                            {featuredPost.category}
                                        </Badge>
                                    </div>
                                    <div className="absolute bottom-4 right-4 flex gap-2">
                                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-foreground text-sm flex items-center gap-1">
                                            <Eye className="h-3 w-3" />
                                            {featuredPost.views}
                                        </div>
                                        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-foreground text-sm flex items-center gap-1">
                                            <Heart className="h-3 w-3" />
                                            {featuredPost.likes}
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            <span>{featuredPost.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{featuredPost.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{featuredPost.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground leading-tight">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <Button className="bg-fg hover:bg-fg/90 text-primary">
                                            Read Full Article
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-muted/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Blog Posts */}
                        <div className="lg:col-span-3">
                            {/* Categories */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-6 text-foreground">
                                    Recent Articles
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {categories.map((category, index) => (
                                        <Button
                                            key={index}
                                            variant={
                                                category.active
                                                    ? "default"
                                                    : "outline"
                                            }
                                            size="sm"
                                            className={
                                                category.active
                                                    ? "bg-fg text-primary"
                                                    : "border-muted hover:border-fg hover:text-fg"
                                            }
                                        >
                                            {category.name}
                                            <Badge
                                                variant="secondary"
                                                className="ml-2 text-xs"
                                            >
                                                {category.count}
                                            </Badge>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Blog Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                {blogPosts.map((post) => (
                                    <Card
                                        key={post.id}
                                        className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-fg/20"
                                    >
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={
                                                    post.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={post.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <Badge className="bg-fg/90 text-primary">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                            <div className="absolute bottom-3 right-3 flex gap-2">
                                                <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-foreground text-xs flex items-center gap-1">
                                                    <Eye className="h-3 w-3" />
                                                    {post.views}
                                                </div>
                                                <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-foreground text-xs flex items-center gap-1">
                                                    <Heart className="h-3 w-3" />
                                                    {post.likes}
                                                </div>
                                            </div>
                                        </div>

                                        <CardContent className="p-6">
                                            <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-3 w-3" />
                                                    <span>{post.author}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{post.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-fg transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-fg text-fg hover:bg-fg hover:text-primary"
                                                >
                                                    Read More
                                                    <ArrowRight className="ml-1 h-3 w-3" />
                                                </Button>
                                                <div className="text-xs text-muted-foreground">
                                                    {post.authorRole}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-center gap-2">
                                <Button variant="outline" size="sm">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-fg text-primary"
                                >
                                    1
                                </Button>
                                <Button variant="outline" size="sm">
                                    2
                                </Button>
                                <Button variant="outline" size="sm">
                                    3
                                </Button>
                                <Button variant="outline" size="sm">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Newsletter */}
                            <Card className="bg-gradient-to-br from-fg/5 to-fg/10 border-fg/20">
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold mb-3 text-foreground">
                                        Stay Updated
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Get the latest articles and insights
                                        delivered to your inbox.
                                    </p>
                                    <div className="space-y-3">
                                        <Input
                                            placeholder="Your email address"
                                            className="border-fg/20 focus:border-fg"
                                        />
                                        <Button className="w-full bg-fg hover:bg-fg/90 text-primary">
                                            Subscribe
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Popular Posts */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold mb-4 text-foreground">
                                        Popular Articles
                                    </h3>
                                    <div className="space-y-4">
                                        {popularPosts.map((post, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors cursor-pointer"
                                            >
                                                <div className="w-8 h-8 bg-fg/10 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-sm font-bold text-fg">
                                                        {index + 1}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <Eye className="h-3 w-3" />
                                                        <span>
                                                            {post.views}
                                                        </span>
                                                        <span>•</span>
                                                        <span>{post.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Tags */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="text-lg font-bold mb-4 text-foreground">
                                        Popular Tags
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "React",
                                            "JavaScript",
                                            "Python",
                                            "AI",
                                            "Machine Learning",
                                            "Web Development",
                                            "Data Science",
                                            "UI/UX",
                                        ].map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="cursor-pointer hover:bg-fg hover:text-primary hover:border-fg transition-colors"
                                            >
                                                <Tag className="h-3 w-3 mr-1" />
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
