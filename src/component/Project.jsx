const ProjectSec = ({ project }) => {
  return (
    <div>
      <a href={project.link} className="project-title">
        {project.title}
      </a>
      <p className="project-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt
        quae, velit, natus sunt asperiores dignissimos accusamus suscipit nam
        repellendus dolorem ullam alias exercitationem! Quas iusto perspiciatis
        dolore a deleniti?
      </p>
      <ul className="flex mt-3 gap-x-4">
        {project.languages.map((lang) => (
          <li className="inline-block proj-tag" key={lang}>
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default function Project() {
  return (
    <div className="container bg-tertiary" id="project">
      <section className="mb-24 text-center">
        <h1 className="main-head">Project</h1>
        <p className="text-xl">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </section>
      <section className="grid items-center justify-between grid-cols-2 gap-x-48 gap-y-12 ">
        <ProjectSec project={projects[0]} />
        <img
          src="src/assets/omnifood.jpg"
          alt="woman eating food"
          className="project-img"
        />
        <img
          src="src/assets/furniture.jpg"
          alt="chairs"
          className="project-img"
        />
        <ProjectSec project={projects[1]} />
        <ProjectSec project={projects[2]} />
        <img
          src="src/assets/portfolio.jpg"
          alt="user description"
          className="project-img"
        />
      </section>
    </div>
  );
}

const projects = [
  {
    title: "Omnifood",
    link: "https://omnifood-phurba.netlify.app/",
    desc: "",
    languages: ["html", "css", "java script"],
  },
  {
    title: "Furniture",
    link: "#",
    desc: "",
    languages: ["html", "css"],
  },
  {
    title: "portfolio",
    link: "#",
    desc: "",
    languages: ["react js", "tailwind css", "vite"],
  },
];
