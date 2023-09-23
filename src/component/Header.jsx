export default function Header() {
  return (
    <div className="container lg:flex lg:gap-24 !py-24 lg:mt-auto mt-48">
      <section className="flex flex-col basis-1/2">
        <h1 className="pb-8 pr-8 intro-head">
          Hello there, I'm Phurba - an independent software developer living in
          south Asia
        </h1>
        <p className="intro-desc">
          For over 2 years I've had experience with software development, have
          knowledge of backend as well as front end. Check out some of my work
          below, find out more about me, and don't hesitate to say hello back!
        </p>
        <div className="mt-12 xl:mt-20">
          <a
            href="mailto:phurba1404@gmail.com"
            className="py-6 transition duration-300 bg-secondary px-14 text-grayscale-500 hover:bg-secondary-500"
          >
            phurba1404@gmail.com
          </a>
        </div>
      </section>
      <section className="basis-1/2"></section>
    </div>
  );
}
