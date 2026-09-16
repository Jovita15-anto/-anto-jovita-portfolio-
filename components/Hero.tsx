import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden px-6 py-16 md:px-12 md:py-20"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

                {/* Left side */}
                <div>
                    <p className="mb-6 text-xs font-medium tracking-[0.4em] text-[#294C42]">
                        TECHNOLOGY × CREATIVITY
                    </p>

                    <h1 className="max-w-4xl text-5xl leading-[1.05] tracking-[-0.03em] text-[#1F2933] md:text-7xl lg:text-8xl">
                        Building with technology,
                        <br />
                        <span className="italic">
                            creating with imagination.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-8 text-[#52606D] md:text-lg">
                        I explore the intersection of artificial intelligence,
                        data science, design, art, and writing — building ideas
                        that are both thoughtful and useful.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="#technology"
                            className="group flex items-center gap-3 rounded-full bg-[#294C42] px-6 py-3.5 text-sm text-white transition hover:bg-[#1F2933]"
                        >
                            Explore Technology
                            <ArrowDownRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                            />
                        </Link>

                        <Link
                            href="#creativity"
                            className="flex items-center gap-3 rounded-full border border-[#A8A297] px-6 py-3.5 text-sm text-[#1F2933] transition hover:border-[#294C42] hover:text-[#294C42]"
                        >
                            Explore Creativity
                        </Link>
                    </div>
                </div>

                {/* Right visual */}
                <div className="relative mx-auto mt-12 h-[360px] w-full max-w-[380px] lg:mt-0 lg:h-[450px] lg:max-w-none">

                    {/* Background circle */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-10
                            h-[300px]
                            w-[300px]
                            -translate-x-1/2
                            rounded-full
                            bg-[#E8E1D4]
                            lg:left-auto
                            lg:right-0
                            lg:top-10
                            lg:h-[400px]
                            lg:w-[400px]
                            lg:translate-x-0
                        "
                    />

                    {/* Peacock */}
                    <div
                        className="
                            absolute
                            left-2
                            top-4
                            z-20
                            h-[230px]
                            w-[160px]
                            -rotate-6
                            overflow-hidden
                            rounded-2xl
                            border-2
                            border-white
                            bg-white
                            p-2
                            shadow-md
                            lg:left-4
                            lg:top-2
                            lg:h-[300px]
                            lg:w-[210px]
                        "
                    >
                        <Image
                            src="/artwork/artwork_1.jpeg"
                            alt="Peacock painting by Anto Jovita"
                            fill
                            sizes="(max-width: 1024px) 160px, 210px"
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Mother Mary */}
                    <div
                        className="
                            absolute
                            right-2
                            top-0
                            z-10
                            h-[240px]
                            w-[170px]
                            rotate-6
                            overflow-hidden
                            rounded-2xl
                            border-2
                            border-white
                            bg-white
                            p-2
                            shadow-md
                            lg:right-2
                            lg:top-2
                            lg:h-[310px]
                            lg:w-[220px]
                        "
                    >
                        <Image
                            src="/artwork/artwork_2.jpeg"
                            alt="Mother Mary painting by Anto Jovita"
                            fill
                            sizes="(max-width: 1024px) 170px, 220px"
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Tiger */}
                    <div
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            z-30
                            h-[190px]
                            w-[150px]
                            -translate-x-1/2
                            rotate-2
                            overflow-hidden
                            rounded-2xl
                            border-2
                            border-white
                            bg-white
                            p-2
                            shadow-md
                            lg:left-[105px]
                            lg:h-[250px]
                            lg:w-[195px]
                            lg:translate-x-0
                        "
                    >
                        <Image
                            src="/artwork/artwork_3.jpeg"
                            alt="Tiger artwork by Anto Jovita"
                            fill
                            sizes="(max-width: 1024px) 150px, 195px"
                            className="rounded-xl object-cover"
                        />
                    </div>

                    {/* Label */}
                    <div
                        className="
                            absolute
                            bottom-2
                            right-0
                            z-40
                            rounded-full
                            border
                            border-[#D8D2C6]
                            bg-[#F7F4EE]
                            px-4
                            py-2
                            text-[8px]
                            font-medium
                            tracking-[0.25em]
                            text-[#294C42]
                            lg:bottom-4
                            lg:right-0
                            lg:text-[9px]
                        "
                    >
                        MY CREATIVE WORLD
                    </div>
                </div>

            </div>
        </section>
    );
}