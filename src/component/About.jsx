import cs50url from "../assets/cs50x.jpg";
export default function About() {
  return (
    <div className="container" id="about">
      <section className="mb-12 text-center xl:mb-24">
        <h1 className="main-head">About Me</h1>
        <p className="text-base">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </section>
      <section className="mt-auto lg:flex gap-x-24">
        <div className="basis-1/2">
          <h2 className="lg:text-[2.4rem] font-medium lg:mb-10 text-[2rem] mb-4">Get to know me!</h2>
          <div className="about-desc">
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
          <a
            href="mailto:phurba1404@gmail.com"
            className="inline-block py-6 lg:mt-20 font-medium transition duration-300 text-xl bg-secondary px-14 text-grayscale-500 hover:bg-secondary-500 lg:text-[1.6rem] mt-8"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-12 basis-1/2 lg:mt-0">
          <h2 className="text-[2.4rem] font-medium lg:mb-10 text-start mb-4">Tech Stack</h2>
          <div className="flex flex-col text-xl uppercase gap-y-16">
            <div>
              <h3 className="mb-8 font-medium">frontend</h3>
              <ul className="grid grid-cols-4 gap-2 text-xs font-bold lg:gap-4 lg:text-lg 2xl:grid-cols-4 lg:grid-cols-3 text-grayscale-400/60 skills">
                <li className="tag">html</li>
                <li>css</li>
                <li>react js</li>
                <li>redux tool kit</li>
                <li>react query</li>
                <li>tailwind css</li>
                <li>cypress</li>
                <li>junit</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-8 font-medium">backend</h3>
              <ul className="grid grid-cols-4 gap-4 font-bold lg:text-lg text-grayscale-400/50 skills">
                <li>golang</li>
                <li>java</li>
                <li>pythan</li>
                <li>C</li>
                <li>java script</li>
                <li>sql</li>
                <li>Liquibase</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-8 font-medium">
                achievements / certifications
              </h3>
              <div className="flex items-center text-lg normal-case gap-x-8 text-grayscale-400">
                <a
                  href="https://certificates.cs50.io/8d1333d5-d0bf-489d-b4fc-d01ad85ac979"
                  className=""
                >
                  <img
                    src={cs50url}
                    alt="cs50x"
                    className="w-[16.5rem] lg:h-[8.2rem] shadow-sm hover:scale-105 transition-all duration-300"
                  />
                </a>
                <div>
                  <a
                    href="https://certificates.cs50.io/8d1333d5-d0bf-489d-b4fc-d01ad85ac979"
                    className="block mb-4 font-medium transition-all duration-300 lg:text-xl text-grayscale-500 hover:text-black md:text-base"
                  >
                    Harvard University: CS50's Introduction to Computer Science
                  </a>
                  <p>Issuer: HarvardX</p>
                  <p>Issued at: 18 September, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
