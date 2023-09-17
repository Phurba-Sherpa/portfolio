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
        <p className="exp-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          voluptatibus, ducimus iste, odio aperiam fugit blanditiis magni aut
          atque, laboriosam quis alias ex culpa porro.
        </p>
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
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
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
  },
  {
    year: "20 June, 2022 - 20 Aug, 2022",
    company: "IT Village Technology",
    languages: ["Java"],
    position: "Junior Dev",
    department: "Backend",
  },
  {
    year: "20 Aug, 2022 - present",
    company: "Wow Finstack",
    languages: ["react js"],
    position: "junior dev",
    department: "frontend",
  },
];
