import { Metadata } from "next";
import { getCourseBySlug } from "@/data/courses";
import { notFound } from "next/navigation";
import DynamicCoursePage from "./components/DynamicCoursePage";

interface CoursePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} | Edurup.in`,
    description: course.description,
    keywords: [
      ...course.skills,
      ...course.tools,
      course.label,
      "course",
      "training",
      "certification",
      "placement",
      "edurup",
    ],
    openGraph: {
      title: course.title,
      description: course.description,
      type: "website",
      url: `https://edurup.in/${course.slug}`,
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: ["/logo.png"],
    },
    alternates: {
      canonical: `https://edurup.in/${course.slug}`,
    },
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return <DynamicCoursePage course={course} />;
}

// Generate static params for all courses at build time
export async function generateStaticParams() {
  const { getAllCourseSlugs } = await import("@/data/courses");
  const slugs = getAllCourseSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}
