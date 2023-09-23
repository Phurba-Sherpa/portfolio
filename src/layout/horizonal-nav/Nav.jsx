const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-16 h-[80px] w-full fixed bg-primary z-10">
      <div className="flex items-center gap-4">
        <a href="#home" className="p-4 font-medium bg-logo-col text-primary">
          PS
        </a>
        <p className="font-semibold uppercase text-grayscale-400">
          Phurba Sherpa
        </p>
      </div>
          <div className="md:hidden">
            <Menu size={32} />
          </div>
        <ul className='absolute top-0 left-0 w-full h-screen text-3xl font-normal uppercase bg-white md:text-2xl md:space-x-16 md:flex text-grayscale-500'>
          {navList.map((nav) => (
            <li key={nav.name} className="py-3">
              <a href={nav.url} className="inline-block nav-link">
                {nav.name}
              </a>
            </li>
        <li>
          <a href="#experience" className="nav-link">
            Experience
          </a>
        </li>
        <li>
          <a href="#project" className="nav-link">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>

        {/* mobile menu */}
        <div className="flex md:hidden">
          <button>
            <Menu size={24} />
          </button>
        </div>
      </section>
        <ul className="flex flex-col bg-red-200">
          <li>
            <a href="#" className="block bg-green-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Project
            </a>
          </li>
          <li>
            <a href="#" className="block">
              Contact
            </a>
          </li>
        </ul>
    </nav>
  );
};
export default Nav;
