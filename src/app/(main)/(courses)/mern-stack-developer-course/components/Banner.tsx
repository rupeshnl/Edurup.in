"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Flame } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const images = [
  {
    src: "/person3.jpg",
    alt: "student",
  },
  {
    src: "/person1.jpg",
    alt: "student",
  },
  {
    src: "/person2.jpg",
    alt: "student",
  },
];

const Banner = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [highestQualification, setHighestQualification] = useState<string>("");
  const [nativeState, setNativeState] = useState<string>("");

  // State for handling form submission
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.promise(
      axios.post("/api/mernStack", {
        fullName,
        email,
        phoneNumber,
        highestQualification,
        nativeState,
      }),
      {
        loading: "Sending message...",
        success: () => {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setHighestQualification("");
          setNativeState("");
          return "Message sent successfully!";
        },
        error: "Failed to send message!",
      }
    );
  };

  return (
    <>
      <div
        className="absolute inset-x-0 top-60 sm:-top-20 sm:ml-20 -z-10 transform-gpu overflow-hidden flex justify-center blur-lg sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] ml-[10rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="p-4 sm:p-10 dark:bg-dark bg-primary">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col items-center sm:items-start justify-center w-screen sm:w-[40rem]">
            <div className="ml-0 sm:ml-10 w-auto">
              <div className="p-4 sm:p-0">
                <h1 className="text-sm sm:text-2xl text-primary">
                  Get a job in 32 Weeks
                </h1>

                <h3 className="mt-2 font-medium sm:mt-5 text-4xl sm:text-5xl  ">
                  Mern Stack Developer
                  <br />
                  <span className="border-b-2 border-fg ">
                    Course with Placement Support
                  </span>
                </h3>
                <h1 className="mt-4 sm:mt-7 text-sm sm:text-2xl text-primary">
                  200+ Companies Hired Our Students
                </h1>
                <div className="mt-4 sm:mt-7 flex flex-row items-center space-x-4">
                  <div className="flex flex-row justify-center items-center">
                    {images.map((image, index) => (
                      <div key={index} className="">
                        <Avatar className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] hover:scale-125 transition-transform duration-300 ease-in-out">
                          <AvatarImage src={image.src} />
                          <AvatarFallback>Student</AvatarFallback>
                        </Avatar>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col ">
                    <h1 className="text-sm sm:text-xl font-semibold text-primary">
                      Join Over 1000+ Students
                    </h1>

                    <h1 className="text-sm sm:text-xl text-primary">
                      Have a new idea every week.
                    </h1>
                  </div>
                </div>

                <div className="mt-3 hidden sm:block">
                  <Link href="Brochures/Web Development.pdf" download>
                    <Button
                      variant="fg"
                      className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] hover:border-fg hover:text-fg text-black hover:bg-dark transition-colors"
                    >
                      Download Brochure
                    </Button>
                  </Link>
                  <Button
                    variant="bg"
                    className="ml-4 sm:ml-10 border border-fg dark:border-fg h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] text-fg hover:text-black hover:bg-fg transition-colors dark:hover:bg-fg
                    "
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-0 sm:ml-2" />
                  </Button>
                </div>
                <div className="my-2 flex items-center justify-center sm:hidden">
                  <Link href="Brochures/Web Development.pdf" download>
                    <Button
                      variant="fg"
                      className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-black hover:border-white hover:text-white hover:bg-dark transition-colors "
                    >
                      Download Brochure
                    </Button>
                  </Link>
                  <Button
                    variant="bg"
                    className="ml-4 sm:ml-10 border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-fg hover:text-white hover:bg-fg transition-colors dark:hover:bg-fg"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-0 sm:ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2 sm:px-0 w-screen sm:w-[40rem]">
            <div className="border border-fg dark:bg-dark bg-primary dark:border-fg hover:shadow-xl transition-shadow duration-400 shadow-2xl  rounded-xl register-form py-2 px-6 sm:px-8 sm:py-8 ">
              <h4 className="text-lg sm:text-3xl text-center mb-2 sm:mb-6">
                Book A Live Demo For Free!
              </h4>
              <form onSubmit={handleSubmit}>
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  className="border h-[2.8rem] sm:h-[3rem] text-sm sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md"
                  type="tel"
                  placeholder="Mobile Number (Whatsapp Number)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
                <Select onValueChange={setHighestQualification}>
                  <SelectTrigger className="border h-[2.8rem] sm:h-[3rem] text-sm text-muted-foreground sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md dark:cursor-r">
                    <SelectValue
                      placeholder="Highest Qualification"
                      className=""
                    />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Graduation (Completed)">
                      Graduation (Completed)
                    </SelectItem>
                    <SelectItem value="Graduation (Ongoing)">
                      Graduation (Ongoing)
                    </SelectItem>
                    <SelectItem value="Post Graduation (Completed)">
                      Post Graduation (Completed)
                    </SelectItem>
                    <SelectItem value="Post Graduation (Ongoing)">
                      Post Graduation (Ongoing)
                    </SelectItem>
                    <SelectItem value="12th/Diploma">12th/Diploma</SelectItem>
                  </SelectContent>
                </Select>
                <Select onValueChange={setNativeState}>
                  <SelectTrigger className="border h-[2.8rem] sm:h-[3rem] text-sm text-muted-foreground sm:text-[1.05rem] p-2 w-full mb-2 sm:mb-4 rounded-md dark:cursor-r">
                    <SelectValue placeholder="Native State" className="" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="Andaman & Nicobar Islands">
                      Andaman & Nicobar Islands
                    </SelectItem>
                    <SelectItem value="Andhra Pradesh">
                      Andhra Pradesh
                    </SelectItem>
                    <SelectItem value="Arunachal Pradesh">
                      Arunachal Pradesh
                    </SelectItem>
                    <SelectItem value="Assam">Assam</SelectItem>
                    <SelectItem value="Bihar">Bihar</SelectItem>
                    <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                    <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                    <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Goa">Goa</SelectItem>
                    <SelectItem value="Gujarat">Gujarat</SelectItem>
                    <SelectItem value="Haryana">Haryana</SelectItem>
                    <SelectItem value="Himachal Pradesh">
                      Himachal Pradesh
                    </SelectItem>
                    <SelectItem value="Jammu & Kashmir">
                      Jammu & Kashmir
                    </SelectItem>
                    <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                    <SelectItem value="Karnataka">Karnataka</SelectItem>
                    <SelectItem value="Kerala">Kerala</SelectItem>
                    <SelectItem value="Ladakh">Ladakh</SelectItem>
                    <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
                    <SelectItem value="Madhya Pradesh">
                      Madhya Pradesh
                    </SelectItem>
                    <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="Manipur">Manipur</SelectItem>
                    <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                    <SelectItem value="Mizoram">Mizoram</SelectItem>
                    <SelectItem value="Nagaland">Nagaland</SelectItem>
                    <SelectItem value="Odisha">Odisha</SelectItem>
                    <SelectItem value="Puducherry">Puducherry</SelectItem>
                    <SelectItem value="Punjab">Punjab</SelectItem>
                    <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex flex-row items-center mb-0 sm:mb-4 ">
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="terms"
                      className="accent-fg mt-[0.2rem] sm:mt-0"
                      required
                    />
                  </div>
                  <div className="ml-2 hidden sm:block">
                    I want to receive updates directly on WhatsApp
                  </div>
                  <div className="ml-2 w-full text-[0.6rem] sm:hidden min-[499px]:text-[0.7rem]">
                    I want to receive updates directly on WhatsApp
                  </div>
                </div>
                <div className="flex flex-row items-center mb-0 sm:mb-4 ">
                  <div className="ml-2 hidden sm:block">
                    By proceeding further, I agree to the Terms & Conditions and
                    Privacy Policy of edurup
                  </div>
                  <div className="ml-2 w-full text-[0.1rem] sm:hidden min-[499px]:text-[0.7rem]">
                    By proceeding further, I agree to the Terms & Conditions and
                    Privacy Policy of edurup
                  </div>
                </div>
                <div className="flex flex-row items-center mb-0 sm:mb-4 ">
                  <div>
                    <Flame className="text-r" />
                  </div>
                  <div className="ml-1 hidden sm:block">
                    Limited Seats Available
                  </div>
                  <div className="ml-1 w-full text-[0.6rem] sm:hidden min-[499px]:text-[0.7rem]">
                    Limited Seats Available
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="fg"
                  className="border h-8 sm:h-11 sm:rounded-md sm:px-8 text-sm sm:text-[1.0rem] border-fg text-black hover:border-white hover:text-white hover:bg-dark transition-colors"
                  disabled={loading}
                >
                  Get it now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Banner;
