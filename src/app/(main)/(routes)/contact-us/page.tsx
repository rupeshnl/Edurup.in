"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Send,
  MessageSquare,
  Globe,
  ArrowRight,
  Calendar,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description:
      "Get personalized advice from our experienced education consultants",
  },
  {
    icon: CheckCircle,
    title: "Career Advancement",
    description:
      "Access courses designed to accelerate your professional growth",
  },
  {
    icon: CheckCircle,
    title: "Flexible Learning",
    description:
      "Study at your own pace with 24/7 access to learning materials",
  },
  {
    icon: CheckCircle,
    title: "Industry Recognition",
    description: "Earn certificates recognized by leading companies worldwide",
  },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "hello@edurup.com",
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    value: "+91 98765 43210",
    action: "Call Now",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with support",
    value: "Available 24/7",
    action: "Start Chat",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation",
    value: "Free 30-min session",
    action: "Book Now",
  },
];

const locations = [
  {
    country: "India",
    address: "Salarpuria Touch Stone, Kadbuseenahalli",
    city: "Bangalore - 560103",
    phone: "+91 98765 43210",
    email: "india@edurup.com",
  },
  {
    country: "USA",
    address: "280 W, 17th Street, 4th floor",
    city: "New York, NY - 10018",
    phone: "+1 (555) 123-4567",
    email: "usa@edurup.com",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form or show success message
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/95 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-fg/20 text-fg border-fg/30 hover:bg-fg/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Get in touch
              <span className="block bg-gradient-to-r from-fg to-fg/80 bg-clip-text text-transparent">
                with us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
              Fill out the form below or schedule a meeting with us at your
              convenience. We&apos;re here to help you achieve your learning
              goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-fg/20 cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-fg/10 rounded-xl mb-4 group-hover:bg-fg group-hover:text-primary transition-colors">
                      <IconComponent className="h-7 w-7 text-fg group-hover:text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {method.description}
                    </p>
                    <p className="text-fg font-medium text-sm mb-4">
                      {method.value}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-fg text-fg hover:bg-fg hover:text-primary"
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Send us a message
                </h2>
                <p className="text-muted-foreground">
                  Have a question or want to learn more about our courses?
                  We&apos;d love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-fg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-2 focus:border-fg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="h-12 border-2 focus:border-fg"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-2 focus:border-fg resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked: any) =>
                      setFormData((prev) => ({
                        ...prev,
                        agreeToTerms: checked as boolean,
                      }))
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to the{" "}
                    <a href="/terms" className="text-fg hover:underline">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.agreeToTerms}
                  className="w-full bg-fg hover:bg-fg/90 text-primary font-semibold h-12"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Your Request
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  With our services you can
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-fg mt-0.5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="bg-gradient-to-br from-fg/5 to-fg/10 border-fg/20">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-6 text-foreground">
                    Why choose Edurup?
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fg mb-1">
                        50K+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Happy Students
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fg mb-1">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Courses
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fg mb-1">95%</div>
                      <div className="text-sm text-muted-foreground">
                        Success Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-fg mb-1">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Support
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-fg/20 text-fg border-fg/30">
              Our Locations
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Visit our offices
            </h2>
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
              We have offices in multiple locations to serve you better. Drop by
              for a coffee and a chat!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="h-6 w-6 text-fg" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {location.country}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-fg mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground font-medium">
                          {location.address}
                        </p>
                        <p className="text-foreground/80">{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-fg flex-shrink-0" />
                      <p className="text-foreground">{location.phone}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-fg flex-shrink-0" />
                      <p className="text-foreground">{location.email}</p>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-6 border-2 border-white text-foreground hover:bg-white hover:text-primary"
                  >
                    Get Directions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Contact us directly
              and we&apos;ll be happy to help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-3">
                    How quickly will you respond?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond to all inquiries within 24 hours during
                    business days. For urgent matters, please call us directly.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-3">
                    Do you offer free consultations?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! We offer free 30-minute consultation calls to discuss
                    your learning goals and recommend the best courses for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-3">
                    What support do you provide?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We provide 24/7 technical support, career guidance,
                    mentorship, and job placement assistance for all our
                    students.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-3">
                    Can I visit your offices?
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We welcome visitors to our offices. Please schedule an
                    appointment in advance to ensure someone is available to
                    meet with you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
