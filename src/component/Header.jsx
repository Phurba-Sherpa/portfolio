export default function Header() {
    return (
        <div className="container sm:flex lg:gap-24 !py-16 lg:mt-auto mt-48">
            <section className="flex flex-col lg:basis-1/2 basis-3/4">
                <h1 className="pb-8 pr-8 intro-head">
                    Hello there, I'm Phurba - an independent software developer
                    living in south Asia
                </h1>
                <p className="intro-desc">
                    For over 2 years I've had experience with software
                    development, have knowledge of backend as well as front end.
                    Check out some of my work below, find out more about me, and
                    don't hesitate to say hello back!
                </p>
                <div className="flex mt-12 text-2xl xl:mt-20 gap-x-4 lg:text-2xl xl:text-3xl">
                    <a
                        href="mailto:phurba1404@gmail.com"
                        className=" inline-block py-6 align-middle text-center transition duration-300  bg-[#b8b4b3] px-10 lg:px-14 text-grayscale-500 hover:bg-secondary-500"
                    >
                        phurba1404@gmail.com
                    </a>
                    <a href="src/assets/resume.pdf" download='phurba-resume.pdf' target="_blank" className="px-10 lg:px-14 py-6 transition duration-300 bg-gray-50 hover:bg-primary hover:shadow-[inset_0_0_0_3px_#fff]">View resume</a>
                </div>
            </section>
            <section className="lg:basis-1/2 basis-1/4"></section>
        </div>
    )
}
