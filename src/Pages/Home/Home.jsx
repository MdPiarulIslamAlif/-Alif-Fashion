import { useLoaderData } from "react-router-dom";
import Brand from "./Brand/Brand";
import Banner from "../../Component/Banner/Banner";



const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  return (
    <div>
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
            {brands?.map((brand) => (
              <Brand key={brand.id} brand={brand}></Brand>
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default Home;
