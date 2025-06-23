import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Outcomes = () => {
    const outcomes = [
        {
            title: "Personal guidance from mentors",
            description:
                "Get groomed by experienced software developers who are working in the top companies",
        },
        {
            title: "Dedicated placement team",
            description:
                "A team of warriors ensure your profile reaches top companies from our 500+ partner",
        },
        {
            title: "Unlimited interview practice",
            description:
                "Gain confidence with unlimited mock interviews before the real interview",
        },
        {
            title: "Lifelong alumni community",
            description:
                "Placement Booster does not end with the course Your journey with us goes beyond any course",
        },
    ];

    return (
        <>
            <div className="px-4 py-10 flex flex-col items-center justify-center dark:bg-dark w-full">
                {/* ✅ Unified Responsive Heading */}
                <div className="text-center w-full max-w-4xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-primary">
                        Welcome to the{" "}
                        <span className="text-fg">outcome powerhouse!</span>
                    </h1>
                    <p className="mt-3 text-base sm:text-lg md:text-xl xl:text-3xl text-primary">
                        Your recipe for a rockstar career
                    </p>
                </div>

                {/* ✅ Unified Responsive Content */}
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 mt-10 w-full max-w-7xl">
                    <div className="w-full xl:w-[450px]">
                        <Image
                            className="rounded-xl w-full"
                            src="/career.jpg"
                            width={150}
                            height={100}
                            alt="career"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-6 xl:mt-0">
                        {outcomes.map((ot, index) => (
                            <div
                                key={index}
                                className="p-4 border border-fg rounded-xl w-full"
                            >
                                <h3 className="text-xl font-semibold">
                                    {ot.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {ot.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Separator />
        </>
    );
};

export default Outcomes;
