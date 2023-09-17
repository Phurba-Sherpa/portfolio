export default function Header() {
  return (
    <div className="container flex gap-24 !py-24 mt-auto">
      <section className="flex flex-col basis-1/2 gap-y-12">
        <h1 className="text-[4rem] leading-[6.4rem] font-normal">
          Hello there, I'm Phurba - an independent software developer living in
          south Asia
        </h1>
        <p>
          For over 2 years I&apos;ve had experience with software development,
          have knowledge of backend as well as front end. Check out some of my
          work below, find out more about me, and don&apos;t hesitate to say
          hello back!
        </p>
        <div className="mt-16 ">
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
