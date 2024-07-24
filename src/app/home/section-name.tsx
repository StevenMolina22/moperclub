export function SectionName () {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="md:mx-auto">
                    <h3 className="text-foreground text-3xl font-bold sm:text-4xl md:text-6xl">
                        Moperclub is the future
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <a href="#" className="inline-block py-2 px-4 text-white font-medium bg-primary duration-150 hover:bg-primary/80 active:bg-primary/90 rounded-lg shadow-md hover:shadow-none">
                        Get started
                    </a>
                    <a href="#" className="inline-block py-2 px-4 text-foreground font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg">
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    )
}