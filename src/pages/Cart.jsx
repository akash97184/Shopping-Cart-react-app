import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

  const { cart } = useSelector( (state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0 ));
  }, [cart])

  return (
    <div>
      
      {
        cart.length > 0 ?
        (
          <div className=" max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
            <div className=" w-[100%] md:w-[60%] flex flex-col">
              {
                cart.map( (item,index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                } )
              }
            </div>

            <div className=" flex flex-col mt-5 w-[100%] md:w-[40%] justify-between  ">

                <div className=" mt-12 py-6 md:mt-14 md:py-3 " >
                  <div className=" text-3xl font-bold text-green-700 ">YOUR CART</div>
                  <div className="text-5xl font-semibold text-green-500 mt-3 ">SUMMARY</div>
                  <p className=" mt-8 text-slate-600 font-semibold text-md">
                    <span>Total Items : {cart.length}</span>
                  </p>
                </div>

                <div className=" mb-10 p-3 gap-y-3">
                    <p className=" text-xl font-semibold text-slate-500 ">Total Amount : <span className=" text-slate-700 ml-2">${totalAmount}</span></p>
                    <button class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        CheckOut Now
                      </span>
                    </button>
                </div>

            </div>
          </div>
        ) :
        (
          <div className="flex flex-col justify-center items-center  h-screen" >
            <h1 className="text-2xl font-semibold mb-4 " >Cart Empty </h1>
            <NavLink to="/">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                Shop Now 
              </button>
            </NavLink>
          </div>
          
        )
      }
    </div>
  );
};

export default Cart;