import { Link, NavLink } from "react-router-dom";
import { CgMenuLeft} from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
//import logo from "../assets/carzane6 (1).png";



const NavBar = () => {
  const { user } = useContext(AuthContext);



  const handleLogOut = () => {
    
  }



    const navLinks = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-black underline" : ""
                  }
                >
                  About
                </NavLink>
              </li>






              { user?.email ?  <>
                <li>
            <NavLink onClick={handleLogOut}
              to="/logout"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              LogOut
            </NavLink>
          </li>
        </> 
        : <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black underline" : ""
          }
        >
          Login
        </NavLink>
      </li>
       }






          {/* <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Login
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-black underline" : ""
              }
            >
              Sign Up
            </NavLink>
          </li> */}
    
          { (
            <>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-black underline" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/newArrival"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-black underline" : ""
                  }
                >
                  New Arrival
                </NavLink>
              </li>
            </>
          )}
        </>
      );


  return (
    <nav className="lg:mt-5 bg-red-400 lg:mx-16 lg:rounded-2xl lg:drop-shadow-2xl">
      <div className="flex justify-between items-center pl-6 lg:pr-10 py-4 lg:py-8">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="text-3xl font-extrabold">
            <CgMenuLeft></CgMenuLeft>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-40
              md:w-52 font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <div>
            <Link to="/">
                net-fiction
                 {/* <img className="w-44 md:w-44 lg:w-52" src="" alt="" /> */}
            </Link>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-12 font-bold text-xl">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;