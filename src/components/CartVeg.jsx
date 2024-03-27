import imagePng1 from "../assets/pngImage/food-banner-1.png";
import imagePng2 from "../assets/pngImage/food-banner-2.png";
import imagePng3 from "../assets/pngImage/food-banner-3.png";

function CartVeg() {
  const style = {
    backgroundColor: "black",
    height: "600px",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      <div className="w-full max-w-sm ml-24 mt-24 mb-2 bg-pink-200 border border-gray-200 rounded-lg text-center">
        <div className="mt-10">
          <p className="text-red-600 text-lg font-bold ">Fresh Food</p>
          <h5 className="text-3xl font-bold  tracking-tight text-darkpink-800">
            Organic & fresh <br />
            30% off
          </h5>
        </div>
        <img className="p-8 rounded-t-lg" src={imagePng2} alt="product image" />
      </div>
      <div className="w-full max-w-sm mt-24 mb-2 bg-green-100 border border-gray-200 rounded-lg text-center ">
        <div className="px-5 mt-10">
          <p className="text-green-600 text-lg font-bold ">Fresh Food</p>
          <h5 className="text-3xl font-bold tracking-tight ">
            Organic & fresh <br />
            30% off
          </h5>
        </div>
        <img className="p-8 rounded-t-lg" src={imagePng1} alt="product image" />
      </div>
      <div className="w-full max-w-sm mr-24 mt-24 mb-2 bg-pink-200 border border-gray-200 rounded-lg text-center">
        <div className="px-5 mt-10">
          <p className="text-red-600 text-lg font-bold ">Fresh Food</p>
          <h5 className="text-3xl font-bold tracking-tight ">
            Organic & fresh <br />
            30% off
          </h5>
        </div>
        <img className="p-8 rounded-t-lg" src={imagePng3} alt="product image" />
      </div>
    </div>
  );
}

export default CartVeg;
