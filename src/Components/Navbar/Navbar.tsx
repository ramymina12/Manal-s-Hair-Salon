import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4">
            <div className="text-xl font-bold"></div>
            <ul className="flex space-x-6">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500"
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500"
                        }
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/packages"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500"
                        }
                    >
                        Packages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/gallery"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500"
                        }
                    >
                        Gallery
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-500 font-bold"
                                : "hover:text-blue-500"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
