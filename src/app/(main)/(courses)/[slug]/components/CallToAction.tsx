"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Rocket,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Users,
  Award,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { Course } from "@/data/courses";
import axios from "axios";
import toast from "react-hot-toast";

interface CallToActionProps {
  course: Course;
}

const CallToAction: React.FC<CallToActionProps> = ({ course }) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [highestQualification, setHighestQualification] = useState<string>("");
  const [nativeState, setNativeState] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use dynamic API endpoint based on course slug
      const apiEndpoint =
        course.slug === "mern-stack-developer-course"
          ? "/api/mernStack"
          : "/api/digitalMarketing"; // fallback

      await toast.promise(
        axios.post(apiEndpoint, {
          fullName,
          email,
          phoneNumber,
          highestQualification,
          nativeState,
          course: course.label,
        }),
        {
          loading: "Submitting your application...",
          success: () => {
            setFullName("");
            setEmail("");
            setPhoneNumber("");
            setHighestQualification("");
            setNativeState("");
            return "Application submitted successfully! Our counselor will contact you soon.";
          },
          error: "Failed to submit application. Please try again.",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const urgencyFeatures = [
    "Limited seats available - Only 50 students per batch",
    "Early bird discount ending soon - Save ₹25,000",
    "Next batch starts in 7 days",
    "1:1 mentor slots filling up fast",
  ];

  const guarantees = [
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Job Guarantee",
      description: "Get placed or get your money back",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "15-Day Refund",
      description: "Not satisfied? Get full refund",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-600" />,
      title: "Industry Certified",
      description: "Recognized by top companies",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Lifetime Support",
      description: "Access to alumni network forever",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4 px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            Launch Your Career Today
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 heading-responsive">
            Ready to Become a{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent inline-block">
              {course.label.replace(" Course", "")}?
            </span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join thousands of successful developers who transformed their
            careers with our industry-leading course
          </p>
        </div>

        {/* Urgency Banner */}
        <Card className="border-0 shadow-2xl bg-red-500 text-white mb-12">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                ⏰ Limited Time Offer!
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {urgencyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Form */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Start Your Journey Today
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and our career counselor will contact
                  you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Full Name *"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="h-14 text-lg"
                />

                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 text-lg"
                />

                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="h-14 text-lg"
                />

                <Select
                  value={highestQualification}
                  onValueChange={setHighestQualification}
                >
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="Highest Qualification *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="graduate">Graduate</SelectItem>
                    <SelectItem value="undergraduate">Undergraduate</SelectItem>
                    <SelectItem value="postgraduate">Post Graduate</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={nativeState} onValueChange={setNativeState}>
                  <SelectTrigger className="h-14 text-lg">
                    <SelectValue placeholder="State *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="andhra-pradesh">
                      Andhra Pradesh
                    </SelectItem>
                    <SelectItem value="telangana">Telangana</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="kerala">Kerala</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Get Started Now - It&apos;s Free!
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  By submitting this form, you agree to our
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {" "}
                    Terms & Conditions
                  </span>{" "}
                  and
                  <span className="text-blue-600 cursor-pointer hover:underline">
                    {" "}
                    Privacy Policy
                  </span>
                </p>
              </div>

              {/* Contact Options */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  Prefer to talk? Contact us directly:
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Benefits & Guarantees */}
          <div className="space-y-8">
            {/* What You Get */}
            <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  What You Get When You Enroll Today:
                </h3>
                <div className="space-y-4">
                  {[
                    `${course.duration} comprehensive ${course.label.replace(
                      " Course",
                      ""
                    )} course`,
                    "Live classes with industry experts",
                    "6+ real-world portfolio projects",
                    "1:1 mentorship and career guidance",
                    "Job placement assistance",
                    "Interview preparation and resume building",
                    "Lifetime access to course materials",
                    "Access to exclusive alumni network",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Guarantees Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl bg-white/10 backdrop-blur-sm text-white"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                      {guarantee.icon}
                    </div>
                    <h4 className="font-bold mb-2">{guarantee.title}</h4>
                    <p className="text-sm opacity-90">
                      {guarantee.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Success Counter */}
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Join 5000+ Successful Graduates
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">₹8.5L</div>
                    <div className="text-sm opacity-90">Avg Package</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4.9⭐</div>
                    <div className="text-sm opacity-90">Student Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-white/90 mb-6">
            Don&apos;t wait - Your dream career in tech is just one click away!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 font-bold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Demo Class
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 font-bold"
            >
              Download Course Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
