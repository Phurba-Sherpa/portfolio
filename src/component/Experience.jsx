const ExpComp = ({ experience }) => {
  return (
    <div className="exp">
      <header className="">
        <h2 className="exp-date">{experience.year}</h2>
      </header>
      <main>
        <h3 className="exp-head">{experience.company}</h3>
        <div className="flex gap-x-4">
          <p className="exp-tag">{experience.position}</p>
          <p className="exp-tag">{experience.department}</p>
          {experience.languages.map((lang) => (
            <p className="exp-tag" key={lang}>
              {lang}
            </p>
          ))}
        </div>
        <p className="exp-desc">{experience.desc}</p>
      </main>
    </div>
  );
};

export default function Experience() {
  return (
    <section className="container h-full" id="experience">
      <div className="mb-24 text-center">
        <h1 className="main-head">Experience</h1>
        <p className="text-xl">
          Here you will find more information about time line of professional
          experiences with industry till today.
        </p>
      </div>
      <div className="grid pl-20 border-l-4 gap-y-8 border-logo-col">
        <ExpComp experience={experiences[0]} />
        <ExpComp experience={experiences[1]} />
        <ExpComp experience={experiences[2]} />
      </div>
    </section>
  );
}

const experiences = [
  {
    year: "20 March, 2022 - 20 June, 2022",
    company: "Asarfi",
    position: "Intern",
    languages: ["Golang", "pgsql"],
    department: "Backend",
    desc: "Joined Asarfi on 20th March as a backend developer Intern. Over the period of 3 months worked on designing apis for the Card Management System. Learning curve was steep under really talented mentor. Technolog discovered GO, PostgreSQL, Liquibase, SQLC, docker, Gin Framework, Git.",
  },
  {
    year: "20 June, 2022 - 20 Aug, 2022",
    company: "IT Village Technology",
    languages: ["Java"],
    position: "Junior Dev",
    department: "Backend",
    desc: "Joined IT Village Technology as Junior backend developer. For a period of six months worked on Card Issuing Engine. I would say complex system, but learned a lot about digital payment system flow. Gained a lot of knowledge on card transaction flow. Technology discovered Java.",
  },
  {
    year: "20 Aug, 2022 - present",
    company: "Wow Finstack",
    languages: ["react js"],
    position: "junior dev",
    department: "frontend",
    desc: "Joined Wow Finstack as Junior Frontend Developer in Card Management System also got involved in Multi currency wallet. Have gained good knowledge of how frontend is bind to backend. Fortunate to have discovered overall project flow, from fontend to backend. Currently working as frontend developer. Technology discovered. HTML, CSS, React JS, Tailwind CSS, Bootstrap, NPM, Java Script.",
  },
];
