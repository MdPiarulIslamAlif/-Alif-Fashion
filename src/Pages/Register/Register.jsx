
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Component/AuthProvider/AuthProvider';


const Register = () => {
 
     const { createUser } = useContext(AuthContext);

     const handleRegister = (event) => {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const photo = form.photo.value;
       const password = form.password.value;
       const Register = { email, name, photo, password };
       console.log(Register);

       createUser(email,password)
       .then(res=>res.user)
       .catch(error=>{
          console.log(error);
       })
     };







     return (
       <div>
         <div className="hero min-h-screen bg-base-200">
           <div className="flex w-full gap-20 flex-row justify-evenly">
             <div className="text-center">
               {/* <div className="flex-1 max-w-7xl">
                 <img className="" src={} alt="" />
               </div> */}
             </div>
             <div className="card w-full max-w-lg shadow-2xl bg-base-100">
               <h1 className="text-5xl font-bold text-center p-4">
                 Login now!
               </h1>
               <form onSubmit={handleRegister} className="card-body">
                 {/* name */}
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Name</span>
                   </label>
                   <input
                     type="text"
                     name="name"
                     placeholder="name"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 {/* email */}
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Email</span>
                   </label>
                   <input
                     type="email"
                     name="email"
                     placeholder="email"
                     className="input input-bordered"
                     required
                   />
                   {/* photo */}
                   <label className="label">
                     <span className="label-text">Photo</span>
                   </label>
                   <input
                     type="url"
                     name="photo"
                     placeholder="Give me you photo"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 {/* password */}
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Password</span>
                   </label>
                   <input
                     type="password"
                     name="password"
                     placeholder="password"
                     className="input input-bordered"
                     required
                   />
                   <label className="label">
                     <a href="#" className="label-text-alt link link-hover">
                       Forgot password?
                     </a>
                   </label>
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Login</button>
                 </div>
                 <div className="text-center">
                   <p>
                     you are new from here ? please{" "}
                     <NavLink
                       className="text-pink-500 font-semibold ml-6"
                       to={"/register"}>
                       Register
                     </NavLink>
                   </p>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
     );
};

export default Register;