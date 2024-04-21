import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Minus, Plus, Search, Star } from "lucide-react";

export default function ProductPage() {
  const params = useParams();
  const [productInfo, setProductInfo] = useState(null);
  const [stars, setStars] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8000/product/${params.id}`).then((res) => {
      setProductInfo(res.data[0]);
      console.log("products created");
    });
  }, []);

  return (
    productInfo && (
      <>
        <nav className="py-3">
          <div className="flex justify-center">
            <div className="input bg-[#75EDD8] h-8 w-96 rounded-xl flex items-center px-3">
              <Search width="15" className="me-4" />
              <input
                className="bg-transparent outline-none text-sm"
                placeholder="Search products, brands"
                // onChange={handleSearchKeywordChange}
              />
            </div>
          </div>
        </nav>
        <main className="flex justify-center items-center space-x-10 mt-40">
          <div className="flex-col">
            <div>
              <h1 className="font-inter font-semibold text-5xl">
                {productInfo.PRODUCT_NAME}
              </h1>
            </div>
            <div>
              <h3>{productInfo.PRODUCT_DESC}</h3>
            </div>
            <div className="flex space-x-1">
              {/*{starsArray.map((index) => (*/}
              <Star key={1} width="15" fill="black" />
              <Star key={2} width="15" fill="black" />
              <Star key={3} width="15" fill="black" />
              <Star key={4} width="15" fill="black" />
              {/*))}*/}
            </div>
            <div className="price text-3xl flex justify-end mt-10 font-semibold">
              <h3>{"$" + productInfo.PRODUCT_PRICE}</h3>
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                className="bg-[#75EDD8] flex justify-center font-inter w-fit px-10 py-2 rounded-2xl"
                onClick={() => {
                  axios.post(
                    `http://localhost:8000/johndoe@example.com/${params.id}`,
                    {
                      QUANTITY: quantity,
                      OBJECTIVE: "ADD",
                    },
                  );
                }}
              >
                Add to cart
              </button>
              <div className="flex items-center space-x-3 rounded-lg bg-gray-300 px-3">
                <div className="bg-gray-300">
                  <Plus
                    onClick={() => {
                      quantity < 16 ? setQuantity(quantity + 1) : null;
                    }}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={quantity}
                    className="outline-none w-5 bg-gray-300 font-semibold font-inter"
                  />
                </div>
                <div className="bg-gray-300">
                  <Minus
                    onClick={() => {
                      quantity > 1 ? setQuantity(quantity - 1) : null;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/300" alt="product" />
          </div>
        </main>
      </>
    )
  );
}
