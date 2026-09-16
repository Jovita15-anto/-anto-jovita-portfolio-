import Image from "next/image";
import Link from "next/link";

const creativeAreas = [
    "Painting",
    "Drawing",
    "Crafts",
    "Poetry",
    "Books",
];

const artworks = [
    {
        image: "/artwork/BlackHole.jpeg",
        title: "Black Hole",
        category: "Painting",
    },
    {
        image: "/artwork/Tiger.jpeg",
        title: "Tiger in Water",
        category: "Drawing",
    },
    {
        image: "/artwork/DancingGirl.jpeg",
        title: "Dancing Girl",
        category: "Painting",
    },
    {
        image: "/artwork/Floral_lotus.jpeg",
        title: "Floral Ink Garden",
        category: "Painting",
    },
    {
        image: "/artwork/Tea & Cake.jpeg",
        title: "Tea & Cake",
        category: "Painting",
    },
];

export default function Creativity() {
    return (
        <section
            id="creativity"
            className="px-6 pt-16 pb-16 md:px-12 md:pt-20 md:pb-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="max-w-4xl">
                    <p className="text-xs font-medium tracking-[0.4em] text-[#294C42]">
                        THE CREATIVE SIDE
                    </p>

                    <h2 className="mt-5 font-[var(--font-playfair)] text-5xl leading-tight text-[#1F2933] md:text-7xl">
                        Creating with my hands,
                        <br />
                        <span className="italic text-[#294C42]">
                            imagining without limits.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#52606D] md:text-lg">
                        Painting, drawing, crafts, poetry, and books are some of
                        the ways I turn ideas and emotions into something tangible.
                    </p>
                </div>

                {/* Creative categories */}
                <div className="mt-10 flex flex-wrap gap-3">
                    {creativeAreas.map((area) => (
                        <span
                            key={area}
                            className="rounded-full border border-[#CFC7B9] bg-[#F7F4EE] px-5 py-2.5 text-sm text-[#1F2933]"
                        >
                            {area}
                        </span>
                    ))}
                </div>

                {/* Featured artwork */}
                <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

                    {/* Artwork */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-[#E8E1D4] p-4">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                            <Image
                                src="/artwork/classic.jpeg"
                                alt="Classic painting by Anto Jovita"
                                fill
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-cover transition duration-700 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Artwork information */}
                    <div className="lg:pl-8">

                        <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
                            FEATURED ARTWORK
                        </p>

                        <h3 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-5xl">
                            Expression in Blue
                        </h3>

                        <p className="mt-6 text-base leading-8 text-[#52606D]">
                            A bold study of colour, expression, and Indian-inspired visual art.
                        </p>

                        <div className="mt-8 border-t border-[#D5CEC1] pt-6">
                            <p className="text-xs tracking-[0.25em] text-[#789087]">
                                MEDIUM
                            </p>

                            <p className="mt-2 text-sm text-[#1F2933]">
                                Poster colours on drawing paper
                            </p>
                        </div>

                        <Link
                            href="https://www.instagram.com/lifeiscolorful_jo/"
                            target="_blank"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#294C42] px-6 py-3.5 text-sm text-white transition hover:bg-[#1F2933]"
                        >
                            View my artwork on Instagram
                            <span className="text-lg">↗</span>
                        </Link>

                    </div>
                </div>

                {/* Creative gallery */}
                <div className="mt-20">

                    <div className="flex items-end justify-between border-b border-[#D5CEC1] pb-5">
                        <div>
                            <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
                                CREATIVE WORK
                            </p>

                            <h3 className="mt-3 font-[var(--font-playfair)] text-4xl text-[#1F2933] md:text-5xl">
                                A collection of things I create.
                            </h3>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {artworks.map((artwork) => (
                            <div
                                key={artwork.title}
                                className="group"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#E8E1D4]">
                                    <Image
                                        src={artwork.image}
                                        alt={`${artwork.title} artwork by Anto Jovita`}
                                        fill
                                        unoptimized
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="mt-5 flex items-start justify-between">
                                    <div>
                                        <h4 className="font-[var(--font-playfair)] text-2xl text-[#1F2933]">
                                            {artwork.title}
                                        </h4>

                                        <p className="mt-1 text-xs tracking-[0.2em] text-[#789087]">
                                            {artwork.category.toUpperCase()}
                                        </p>
                                    </div>

                                    <span className="text-xl text-[#294C42] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                        ↗
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Books */}
                <div className="mt-20 border-t border-[#D5CEC1] pt-20">

                    <div className="max-w-3xl">
                        <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
                            BOOKS
                        </p>

                        <h3 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-5xl">
                            Turning ideas into pages.
                        </h3>

                        <p className="mt-5 max-w-2xl text-base leading-8 text-[#52606D] md:text-lg">
                            Creating books is another way I turn ideas into something
                            that can be explored, enjoyed, and shared.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                        {/* Book cover */}
                        <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-[#E8E1D4] p-4">
                            <div className="relative aspect-[2/3] overflow-hidden rounded-[1rem]">
                                <Image
                                    src="/artwork/FunPreschoolActivityBook-Cover.png"
                                    alt="FUN PRESCHOOL ACTIVITY BOOK by Anto Jovita"
                                    fill
                                    unoptimized
                                    sizes="(max-width: 1024px) 100vw, 320px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Book information */}
                        <div className="lg:pl-8">

                            <p className="text-xs font-medium tracking-[0.35em] text-[#789087]">
                                PUBLISHED WORK
                            </p>

                            <h4 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-5xl">
                                FUN PRESCHOOL
                                <br />
                                ACTIVITY BOOK
                            </h4>

                            <p className="mt-5 text-base leading-8 text-[#52606D]">
                                A creative activity book designed for preschool learners, featuring simple activities that encourage early learning, observation, and creativity.
                            </p>

                            <div className="mt-8 grid gap-5 border-t border-[#D5CEC1] pt-6 sm:grid-cols-2">

                                <div>
                                    <p className="text-xs tracking-[0.2em] text-[#789087]">
                                        AUTHOR
                                    </p>
                                    <p className="mt-2 text-sm text-[#1F2933]">
                                        Anto Jovita J.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs tracking-[0.2em] text-[#789087]">
                                        FORMAT
                                    </p>
                                    <p className="mt-2 text-sm text-[#1F2933]">
                                        Print Book
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs tracking-[0.2em] text-[#789087]">
                                        AGE
                                    </p>
                                    <p className="mt-2 text-sm text-[#1F2933]">
                                        3–5 years
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs tracking-[0.2em] text-[#789087]">
                                        PAGES
                                    </p>
                                    <p className="mt-2 text-sm text-[#1F2933]">
                                        25 pages
                                    </p>
                                </div>

                            </div>

                            <Link
                                href="https://store.pothi.com/book/anto-jovita-j-fun-preschool-activity-book/"
                                target="_blank"
                                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#294C42] px-6 py-3.5 text-sm text-white transition hover:bg-[#1F2933]"
                            >
                                View published book
                                <span className="text-lg">↗</span>
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Poetry */}
                <div className="mt-20 border-t border-[#D5CEC1] pt-20">

                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

                        {/* Poetry introduction */}
                        <div>
                            <p className="text-xs font-medium tracking-[0.35em] text-[#294C42]">
                                POETRY
                            </p>

                            <h3 className="mt-4 font-[var(--font-playfair)] text-4xl leading-tight text-[#1F2933] md:text-5xl">
                                Words from within.
                            </h3>

                            <p className="mt-5 max-w-md text-base leading-8 text-[#52606D]">
                                Some thoughts find their way onto paper
                                through words instead of colours.
                            </p>
                        </div>

                        {/* Poem */}
                        <div className="lg:border-l lg:border-[#D5CEC1] lg:pl-12">

                            <p className="text-xs tracking-[0.3em] text-[#789087]">
                                FEATURED POEM
                            </p>

                            <h4 className="mt-4 font-[var(--font-playfair)] text-4xl text-[#1F2933] md:text-5xl">
                                Born Within
                            </h4>

                            <div className="mt-8 font-[var(--font-playfair)] text-lg leading-loose text-[#52606D] md:text-xl">

                                <p>
                                    My world is a color palette,
                                    <br />
                                    With bright and dark shades,
                                    <br />
                                    Where silence paints my thoughts
                                    <br />
                                    In soft, clear waves.
                                </p>

                                <p className="mt-7">
                                    In every stroke, my heart finds peace,
                                    <br />
                                    And happiness begins to grow,
                                    <br />
                                    A child still blooms within my soul,
                                    <br />
                                    In joys the purest know.
                                </p>

                                <p className="mt-7">
                                    I speak in whispers alone—
                                    <br />
                                    the almighty listens close to me.
                                    <br />
                                    I searched the world for fleeting light,
                                    <br />
                                    Then found my joy was born within.
                                </p>

                            </div>

                            <div className="mt-8 border-t border-[#D5CEC1] pt-5">
                                <p className="text-xs tracking-[0.2em] text-[#789087]">
                                    WRITTEN BY
                                </p>

                                <p className="mt-2 text-sm text-[#1F2933]">
                                    Anto Jovita
                                </p>
                            </div>
                        
                        </div>

                    </div>

                </div>

                {/* Creative statement */}
                <div className="mt-16 border-t border-[#D5CEC1] pt-10">
                    <p className="max-w-4xl font-[var(--font-playfair)] text-xl leading-relaxed text-[#1F2933] md:text-2xl">
                        “Technology gives me a way to build ideas.
                        <span className="italic text-[#294C42]">
                            {" "}Art gives me a way to feel them.
                        </span>
                        ”
                    </p>
                </div>

            </div>
        </section>
    );
}