import { useState } from "react"
import { Menu, X } from "react-feather"

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navOpenClass = menuOpen ? "header nav-open" : "header"
    return (
        <header className={navOpenClass}>
            <div className="flex items-center space-x-4 text-base md:text-2xl">
                <a href="#home" className="logo">
                    PS
                </a>
                <p className="font-semibold uppercase text-grayscale-400 whitespace-nowrap">
                    Phurba Sherpa
                </p>
            </div>
            <nav className="main-nav">
                <ul className="nav-list">
                    {navList.map((nav) => (
                        <li key={nav.name}>
                            <a href={nav.url} className="nav-link">
                                {nav.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                className="btn-mob-nav"
                onClick={() => setMenuOpen((prev) => !prev)}
            >
                {menuOpen ? (
                    <X className="icon-mob-nav" />
                ) : (
                    <Menu className="icon-mob-nav" />
                )}
            </button>
        </header>
    )
}

const navList = [
    {
        name: "about",
        url: "#about",
    },
    {
        name: "experience",
        url: "#experience",
    },
    {
        name: "project",
        url: "#project",
    },
    {
        name: "contact",
        url: "#contact",
    },
]
export default Nav
