import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Bars } from 'react-loader-spinner';
import toast from "react-hot-toast";

function Products() {
    async function getProducts() {
        const response = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
        return response.data;
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        onError: () => toast.error("Failed to load products, please try again."),
    });

    if (isLoading) {
        return (
            <div className="h-[100vh] bg-slate-300 flex justify-center items-center">
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    visible={true}
                />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="h-[100vh] flex justify-center items-center">
                <h2 className="text-red-600 text-2xl">Something went wrong!</h2>
            </div>
        );
    }

    return (
        <>
            <h2 className="text-green-700 font-bold text-2xl text-center mt-10">Our Products</h2>
            <section className="py-8">
                <div className="w-full px-5 md:w-[90%] m-auto">
                    <div className="flex flex-wrap items-center">
                        {data?.data.map((item) => (
                            <div className="w-full lg:w-1/5 lg:p-0 md:w-1/4 md:p-0 sm:w-1/2 p-3" key={item._id}>
                                <div className="inner p-3 bg-slate-300">
                                    <div>
                                        <img src={item.imageCover} alt={item.title} className="w-full" />
                                        <h2 className="text-green-700 mb-2">{item.category.name}</h2>
                                        <h2>{item.title.split(" ").slice(0, 2).join(" ")}</h2>
                                        <div className="flex flex-wrap justify-between items-center mt-3">
                                            <h4>{item.price} EGP</h4>
                                            <h4>
                                                <i className="fa-solid fa-star text-yellow-500 me-2"></i>
                                                {item.ratingsAverage}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button
                                            type="button"
                                            className="w-full mt-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Products;
