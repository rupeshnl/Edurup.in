"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Calendar } from "lucide-react";
import { Course } from "@/data/courses";

interface FeeSectionProps {
  course: Course;
}

const FeeSection: React.FC<FeeSectionProps> = ({ course }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const discountPercentage = Math.round(
    ((course.fee.original - course.fee.discounted) / course.fee.original) * 100
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4 px-4 py-2">
            Course Fee
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Affordable Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose a payment plan that works best for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* One-time Payment */}
          <Card className="border-2 border-green-200 dark:border-green-800 shadow-lg relative">
            {discountPercentage > 0 && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-500 text-white px-3 py-1">
                  {discountPercentage}% OFF
                </Badge>
              </div>
            )}
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  One-time Payment
                </h3>
                <div className="space-y-2">
                  {course.fee.original > course.fee.discounted && (
                    <div className="text-2xl text-gray-500 line-through">
                      {formatCurrency(course.fee.original)}
                    </div>
                  )}
                  <div className="text-4xl font-bold text-green-600">
                    {formatCurrency(course.fee.discounted)}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Complete course access
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Lifetime course access
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    All course materials
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    1-on-1 mentorship
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Placement assistance
                  </span>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <CreditCard className="w-4 h-4 mr-2" />
                Enroll Now
              </Button>
            </CardContent>
          </Card>

          {/* Installment Plans */}
          <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  EMI Options
                </h3>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  Pay in installments
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {course.fee.installments?.map((plan, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {plan.months} months
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">
                          {formatCurrency(plan.amount)}/month
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Same course benefits
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Flexible payment terms
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    No hidden charges
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Choose EMI Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeeSection;
