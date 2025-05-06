import { NavLink } from "react-router";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center flex-row py-6 px-10 relative bg-white">
            {/* <img src="/navbarBg.jpg" alt="Navbar Image" className="absolute top-0 left-0 w-full opacity-5 h-full" /> */}
            <div className="relative z-20 w-full flex justify-between items-center">
                <div className="w-52">
                    <a href="/">
                        <img src="./logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="flex justify-center items-center flex-row gap-5">
                    <NavLink to="/" end>
                        Home
                    </NavLink>
                    <NavLink to="/about" end>
                        About US
                    </NavLink>
                    <NavLink to="/services" end>
                        Services
                    </NavLink>
                    <NavLink to="/portfolio" end>
                        Protfolio
                    </NavLink>
                    <NavLink to="/team" end>
                        Team
                    </NavLink>
                    <NavLink to="/contact" end>
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}