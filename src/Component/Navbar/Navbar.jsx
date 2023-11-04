import { NavLink } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";


const Navbar = () => {

     const navbar = (
       <>
         <li>
           <NavLink to="/">HOME</NavLink>
         </li>
         <li>
           <NavLink to="/product">ADD PRODUCT</NavLink>
         </li>
         <li>
           <NavLink to="/about">ABOUT</NavLink>
         </li>
         <li>
           <NavLink to="/contact">CONTACT</NavLink>
         </li>
         <li>
           <NavLink to="/login">
             <span>
              <MdOutlineAccountCircle className="text-xl">
                </MdOutlineAccountCircle>
                </span> 
            </NavLink>
         </li>
         {/* <li>
           <Navbar to="/contact">CONTACT</Navbar>
           <ul>
             <li>
               <NavLink to={'/create'}>CREATE</NavLink>
               <NavLink to={'/unlimited'}>UNLIMITED</NavLink>
             </li>
           </ul>
         </li> */}
       </>
     );


     return (
       <div className="navbar bg-base-100">
         <div className="navbar-start">
           <div className="dropdown">
             <label tabIndex={0} className="btn btn-ghost lg:hidden">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M4 6h16M4 12h8m-8 6h16"
                 />
               </svg>
             </label>
             <ul
               tabIndex={0}
               className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {navbar}
             </ul>
           </div>
           <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="menu menu-horizontal px-1">{navbar}</ul>
         </div>
         <div className="navbar-end">
           <a className="btn">Button</a>
         </div>
       </div>
     );
};

export default Navbar;