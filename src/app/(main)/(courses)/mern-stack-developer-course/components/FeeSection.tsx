import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  CreditCard,
  Calendar,
  DollarSign,
  Gift,
  Star,
  Clock,
  Award,
  Zap,
} from "lucide-react";

const FeeSection = () => {
  const pricingPlans = [
    {
      name: "Pro Plan",
      originalPrice: "₹1,49,999",
      currentPrice: "₹74,999",
      discount: "50% OFF",
      popular: true,
      features: [
        "Everything in Basic Plan",
        "1:1 dedicated mentorship",
        "Advanced project portfolio",
        "Mock interview sessions",
        "LinkedIn profile optimization",
        "Industry expert sessions",
        "6 months placement support",
        "Salary negotiation guidance",
        "Lifetime course access",
        "Alumni network access",
      ],
      paymentOptions: [
        "One-time payment: ₹74,999",
        "3 EMI: ₹26,999/month",
        "6 EMI: ₹13,499/month",
      ],
    },
  ];

  const additionalBenefits = [
    {
      icon: <Gift className="w-6 h-6 text-purple-600" />,
      title: "Early Bird Offer",
      description: "Get 50% off + bonus courses worth ₹10,000",
      validity: "Limited time offer",
    },
    {
      icon: <Award className="w-6 h-6 text-green-600" />,
      title: "Money Back Guarantee",
      description: "100% refund if not satisfied within 15 days",
      validity: "No questions asked",
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Instant Access",
      description: "Start learning immediately after enrollment",
      validity: "24/7 platform access",
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with recorded sessions",
      validity: "Lifetime access",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4 px-4 py-2">
            <DollarSign className="w-4 h-4 mr-2" />
            Course Investment
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible payment options to make quality education accessible to
            everyone
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex items-center justify-center mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 w-[350px] shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-800/20 scale-105"
                  : "bg-white dark:bg-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-400 line-through">
                      {plan.originalPrice}
                    </span>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.currentPrice}
                    </div>
                    <Badge className="bg-red-100 text-red-800 mt-2">
                      {plan.discount}
                    </Badge>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col  justify-center space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Payment Options */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Payment Options:
                  </h4>
                  <div className="space-y-2">
                    {plan.paymentOptions.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className={`w-full py-3 font-semibold ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                      : "bg-gray-900 dark:bg-white dark:text-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.popular ? "Get Started Now" : "Choose Plan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white dark:bg-gray-900 text-center p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mx-auto mb-4">
                {benefit.icon}
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                {benefit.description}
              </p>
              <Badge variant="outline" className="text-xs">
                {benefit.validity}
              </Badge>
            </Card>
          ))}
        </div>

        {/* ROI Section */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-blue-600 text-white mb-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Return on Investment (ROI)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold mb-2">Course Fee</div>
                <div className="text-lg opacity-90">₹49,999 - ₹99,999</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Average Salary</div>
                <div className="text-lg opacity-90">₹8.5 LPA</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">ROI</div>
                <div className="text-lg opacity-90">850% - 1700%</div>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              Recover your investment within 2-3 months of getting placed!
            </p>
          </CardContent>
        </Card>

        {/* FAQ about Pricing */}
        <Card className="border-0 shadow-xl bg-white dark:bg-gray-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Are there any hidden charges?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  No, the price mentioned is all-inclusive. No hidden charges or
                  additional fees.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Can I get a refund?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes, we offer a 15-day money-back guarantee with no questions
                  asked.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  Do you offer scholarships?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Yes, we offer need-based scholarships. Contact our counselor
                  for more details.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We accept all major credit/debit cards, UPI, net banking, and
                  EMI options.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Still have questions? Our counselors are here to help!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3"
            >
              Talk to Counselor
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeSection;
