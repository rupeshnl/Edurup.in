import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquare, Mail, Clock, Users } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "Course Details",
      questions: [
        {
          question: "What is the duration of the MERN Stack Developer course?",
          answer:
            "The course is 32 weeks long, designed to take you from beginner to industry-ready developer. It includes live classes, hands-on projects, and placement support.",
        },
        {
          question: "What are the prerequisites for this course?",
          answer:
            "No prior programming experience is required. We start from the basics and gradually build up to advanced concepts. However, basic computer literacy and enthusiasm to learn are essential.",
        },
        {
          question: "What technologies will I learn in this course?",
          answer:
            "You'll learn MongoDB, Express.js, React.js, Node.js, JavaScript ES6+, HTML5, CSS3, Git, deployment technologies, and various supporting tools and libraries.",
        },
        {
          question: "How many projects will I build during the course?",
          answer:
            "You'll build 6+ real-world projects including an e-commerce platform, social media dashboard, task management app, and more. These projects will form your portfolio.",
        },
      ],
    },
    {
      category: "Classes & Learning",
      questions: [
        {
          question: "Are classes live or recorded?",
          answer:
            "We offer both live interactive classes and recorded sessions. Live classes are conducted 5 days a week, and all sessions are recorded for your reference.",
        },
        {
          question: "What if I miss a live class?",
          answer:
            "All live classes are recorded and available on our learning platform. You can watch them anytime and catch up at your own pace.",
        },
        {
          question: "How much time should I dedicate daily?",
          answer:
            "We recommend 2-3 hours daily for optimal learning. This includes attending live classes, completing assignments, and working on projects.",
        },
        {
          question: "Do you provide doubt resolution support?",
          answer:
            "Yes, we provide 24/7 doubt resolution support through our community forum, dedicated mentors, and scheduled Q&A sessions.",
        },
      ],
    },
    {
      category: "Placement & Career",
      questions: [
        {
          question: "Do you guarantee job placement?",
          answer:
            "We have a 95% placement rate and provide comprehensive placement support including resume building, interview preparation, and job referrals. The Premium plan includes placement guarantee.",
        },
        {
          question: "What is the average salary after course completion?",
          answer:
            "The average salary for our graduates is ₹8.5 LPA. However, salaries can range from ₹4-18 LPA depending on your performance, interview skills, and the companies you target.",
        },
        {
          question: "How long does the placement support last?",
          answer:
            "Placement support varies by plan: Basic (3 months), Pro (6 months), and Premium (12 months). We continue support until you get placed.",
        },
        {
          question: "What companies hire your graduates?",
          answer:
            "Our graduates work at companies like Amazon, Microsoft, Google, Netflix, Uber, Flipkart, and 500+ other companies across India and globally.",
        },
      ],
    },
    {
      category: "Payment & Policies",
      questions: [
        {
          question: "What are the payment options available?",
          answer:
            "You can pay in full or choose EMI options (3 or 6 months). We accept credit/debit cards, UPI, net banking, and offer 0% interest EMI options.",
        },
        {
          question: "Is there a refund policy?",
          answer:
            "Yes, we offer a 15-day money-back guarantee. If you're not satisfied with the course within 15 days, you can get a full refund, no questions asked.",
        },
        {
          question: "Do you offer scholarships?",
          answer:
            "Yes, we offer need-based scholarships and special discounts for students, veterans, and those from underrepresented communities. Contact our counselor for details.",
        },
        {
          question: "What happens after I complete the course?",
          answer:
            "After completion, you'll receive a course completion certificate, access to our alumni network, lifetime access to course materials, and continued career support.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What technical requirements do I need?",
          answer:
            "You need a laptop/desktop with minimum 4GB RAM, stable internet connection, and basic software like a web browser and code editor (we'll guide you through setup).",
        },
        {
          question: "Do you provide development tools and software?",
          answer:
            "We use free and open-source tools throughout the course. We'll guide you through setting up all necessary development environments and tools.",
        },
        {
          question: "How do I access the course materials?",
          answer:
            "All course materials are available on our learning management system (LMS) which you can access 24/7 from any device with internet connectivity.",
        },
        {
          question: "What if I face technical issues during the course?",
          answer:
            "We have a dedicated technical support team to help you with any technical issues. You can reach out via chat, email, or during live sessions.",
        },
      ],
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4 px-4 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Got
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to the most common questions about our MERN Stack
            Developer course
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="border-0 shadow-xl bg-gray-50 dark:bg-gray-800"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
                  {category.category}
                </h3>

                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-gray-900 dark:text-white font-medium">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Support Available
            </div>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              1000+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Questions Answered
            </div>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              &lt;2 hrs
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Average Response Time
            </div>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              95%
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Satisfaction Rate
            </div>
          </Card>
        </div>

        {/* Still Have Questions */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl mb-6 opacity-90">
              Our counselors are here to help you make the right decision
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Talk to Counselor
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Book Free Demo
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You can also reach us at:
          </p>
          <div className="flex justify-center gap-2 items-center flex-col md:flex-row text-sm">
            <div className="flex items-center gap-2 justify-center">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">
                WhatsApp: +91 9849036024
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Mail className="w-4 h-4 text-green-600" />
              <span className="text-gray-700 dark:text-gray-300">
                Email: support@edurup.in
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
