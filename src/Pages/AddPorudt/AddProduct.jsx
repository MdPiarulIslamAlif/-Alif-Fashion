
const AddProduct = () => {


     const handleAddProduct = event =>{
          event.preventDefault()
          const form = event.target;
          const name = form.name.value;
          const category = form.category.value;
          const photo = form.photo.value;
          const price = form.price.value;
          const rating = form.rating.value;
          const Register = { rating, name, photo, category,price, };
          console.log(Register);
     }



     return (
       <div>
         <div className="hero min-h-screen bg-base-200">
           <div className=" flex  ">
             <div className="text-center"></div>
             <div className="card lg:w-[1000px] shadow-2xl bg-base-100">
               <form onSubmit={handleAddProduct} className="card-body w-full">
                 {/* name and category */}
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Brand</span>
                   </label>
                   <input
                     type="text"
                     placeholder="Brand"
                     name="name"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Category</span>
                   </label>
                   <input
                     type="text"
                     name="category"
                     placeholder="category"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 {/* name and category */}
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Price</span>
                   </label>
                   <input
                     type="text"
                     placeholder="Price"
                     name="price"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Photo</span>
                   </label>
                   <input
                     type="url"
                     name="photo"
                     placeholder="Product Image"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 {/* name and category */}
                 <div className="form-control">
                   <label className="label">
                     <span className="label-text">Rating</span>
                   </label>
                   <input
                     type="rating"
                     name="rating"
                     placeholder="Product Rating"
                     className="input input-bordered"
                     required
                   />
                 </div>
                 <div className="form-control mt-6">
                   <button className="btn btn-primary">Add Product</button>
                 </div>
               </form>
             </div>
           </div>
         </div>
       </div>
     );
};

export default AddProduct;