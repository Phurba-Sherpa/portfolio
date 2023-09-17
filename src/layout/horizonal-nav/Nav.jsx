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
      <ul className="flex uppercase gap-x-16 text-grayscale-500">
        <li>
          <a href="#about" className="nav-link">
            About
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
    </nav>
  );
};
export default Nav;
