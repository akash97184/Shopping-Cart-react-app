
import { toast } from "react-hot-toast";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex justify-between items-center h-auto my-2  p-2 md:p-5 md:mx-5 border-b-2 border-slate-600 " >


      <div className=" flex flex-col md:flex-row gap-14 items-center p:0 md:p-5 ">
        <div className="w-[30%] " >
          <img src={ item.image } alt="" className=" object-cover " />
        </div>

        <div className="flex flex-col self-start gap-y-5">
          <h1 className="text-xl text-slate-600 font-semibold" >{item.title}</h1>
          <h1 className=" text-base font-medium text-slate-600">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className=" flex items-center justify-between ">
            <p className=" font-bold text-lg text-green-500">${item.price}</p>
            <div
              className=" bg-red-200 group hover:bg-red-300 hover:scale-125  transition duration-300 ease-in  cursor-pointer rounded-full p-3 m-3"
              onClick={removeFromCart}>
              <RiDeleteBin2Fill/>
            </div>
          </div>

        </div>
      </div>
    
    </div>
  ) 
};

export default CartItem;
