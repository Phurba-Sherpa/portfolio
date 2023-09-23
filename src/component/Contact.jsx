import { useState } from "react";
import * as Icons from "react-feather";

const SocialLogo = ({ data }) => {
  const Icon = Icons[data.icon];
  return (
    <div className="text-xl text-grayscale-300 social-link">
      <a href={data.url} className="">
        <Icon size={16} />
        <p>{data.label}</p>
      </a>
    </div>
  );
};

export default function Contact() {
  const [state, setState] = useState(0);

  const onClickNext = () => {
    if (state === facts.length - 1) setState(0);
    else setState((prev) => prev + 1);
  };

  return (
    <div
      className="container flex h-[80vh] border-b-2 border-grayscale-300/10"
      id="contact"
    >
      <section className="lg:flex items-center lg:mt-auto xl:gap-x-[9.6rem] lg:px-2 mt-16 lg:gap-x-[6rem]">
        <div className=" basis-1/2">
          <h2 className="xl:text-[3.2rem] lg:text-[3.2rem] lg:mb-0 mb-12 text-[2.4rem]">
            Let's work together
          </h2>
          <p className="text-xl xl:mt-8 xl:text-2xl text-grayscale-300">
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, send an email to phurba1404@gmail.com and ~let's
            talk.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6 xl:mt-16 xl:grid-cols-5">
            <SocialLogo data={socialLinks[0]} />
            <SocialLogo data={socialLinks[1]} />
            <SocialLogo data={socialLinks[2]} />
            <SocialLogo data={socialLinks[3]} />
            <SocialLogo data={socialLinks[4]} />
          </div>
        </div>
        <div className="mt-20 basis-1/2 lg:mt-0">
          <div className="">
            <blockquote className="fact-text">{facts[state]}</blockquote>
          </div>

          <div className="mt-8">
            <button className="mr-6 hover:-translate-x-2">
              <Icons.ChevronLeft size={32} className="text-grayscale-300" />
            </button>
            <button className="hover:translate-x-2" onClick={onClickNext}>
              <Icons.ChevronRight size={32} className="text-grayscale-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const socialLinks = [
  {
    icon: "Facebook",
    label: "facebook",
    url: "#",
  },
  {
    icon: "Instagram",
    label: "instagram",
    url: "#",
  },
  {
    icon: "Linkedin",
    label: "linkedin",
    url: "https://linkedin.com/in/phurba-",
  },
  {
    icon: "Mail",
    label: "mail",
    url: "mailto:phurba1404@gmail.com",
  },
  {
    icon: "GitHub",
    label: "github",
    url: "https://github.com/Phurba-Sherpa",
  },
];

const facts = [
  "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React.js and Tailwind CSS, deployed with Netlify. All text is set in the Inter typeface.",
  "I met with a coding in grade IX. It was in JAVA. We used BlueJ for compliation.",
  "A passionate, flexible fullstack developer. Loves chanllenges and is always eager to dig into the new technologies.",
  "Completed CS50x: CS50's introduction to Computer Science, got certified by Harvardx. Lessong learned: Power of C, breaking complex problem into smaller chunks, thinking like a programmer. how HLL works behind the scenes.",
];
