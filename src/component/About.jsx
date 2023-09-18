import cs50url from "../assets/cs50x.jpg";
export default function About() {
  return (
    <div className="container h-full" id="about">
      <section className="mb-24 text-center">
        <h1 className="main-head">About Me</h1>
        <p className="text-xl">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </section>
      <section className="flex mt-auto gap-x-24">
        <div className="basis-1/2">
          <h2 className="text-[2.4rem] font-medium mb-10">Get to know me!</h2>
          <div className="flex flex-col text-[1.5rem] gap-y-8">
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
            className="inline-block py-6 mt-20 font-medium transition duration-300 bg-secondary px-14 text-grayscale-500 hover:bg-secondary-500"
          >
            Contact Me
          </a>
        </div>
        <div className="basis-1/2">
          <h2 className="text-[2.4rem] font-medium mb-10">Tech Stack</h2>
          <div className="flex flex-col text-xl uppercase gap-y-16">
            <div>
              <h3 className="mb-8 font-medium">frontend</h3>
              <ul className="grid grid-cols-4 gap-4 text-lg font-bold text-grayscale-400/60 skills">
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
              <ul className="grid grid-cols-4 gap-4 text-lg font-bold text-grayscale-400/50 skills">
                <li>golang</li>
                <li>java</li>
                <li>pythan</li>
                <li>C</li>
                <li>java script</li>
                <li>sql</li>
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
                    className="w-[16.5rem] h-[8.2rem] shadow-sm hover:scale-105 transition-all duration-300"
                  />
                </a>
                <div>
                  <a
                    href="https://certificates.cs50.io/8d1333d5-d0bf-489d-b4fc-d01ad85ac979"
                    className="block mb-4 text-xl font-medium transition-all duration-300 text-grayscale-500 hover:text-black"
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
