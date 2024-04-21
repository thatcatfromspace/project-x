import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  imageLink,
  name,
  stock,
  stars,
  price,
  key,
}) {
  const starsArray = Array.from({ length: stars }, (_, index) => index);
  const navigate = useNavigate();
  return (
    <div
      className="flex-col shadow-2xl rounded-md h-fit w-[250px] m-10 font-inter max-w-[250px] pb-2 cursor-pointer"
      key={key}
      onClick={() => navigate(`/product/${id}`)}
    >
      <div>
        <img src={imageLink} alt={name} />
      </div>
      <div className="bg-gradient-to-b from-[#75EDD8]">
        <div className="flex-col px-2 overflow-ellipsis max-w-full space-y-1">
          <p className="font-semibold overflow-ellipsis w-full pt-2">
            {" "}
            {name}{" "}
          </p>
          <div className="flex space-x-1">
            {starsArray.map((index) => (
              <Star key={index} width="15" fill="black" />
            ))}
          </div>
        </div>
        <div className="flex justify-end px-2">
          <p className="font-semibold text-xl"> {"$" + price}</p>
        </div>
        <div className="w-1/2 text-sm mb-2 px-2">
          {stock < 0 ? (
            <div className="border-2 border-red-500 rounded-full flex justify-center mb-2">
              {" "}
              Out of stock{" "}
            </div>
          ) : (
            <div className="border-2 border-green-500 rounded-full flex justify-center mb-2">
              In stock{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
