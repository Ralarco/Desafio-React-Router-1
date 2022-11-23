import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="flex flex-row p-4 bg-teal-600 shadow-md border-b relative">

            <Link to='/' className="p-2 mx-3 bg-teal-400 hover:bg-teal-300 cursor-pointer rounded-md">🏠 Home</Link>
            <Link to='/Contacto' className="p-2 mx-3 bg-teal-400 hover:bg-teal-300 cursor-pointer rounded-md">📒 Contacto</Link>

            <p className="p-2 absolute right-2 text-emerald-100 font-black text-xl">Happy Cake 🍰</p>

        </nav>
    )
}

export default NavBar;