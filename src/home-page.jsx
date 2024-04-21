import axios from "axios";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "./product-card.jsx";

export default function HomePage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setProducts(res.data);
      // console.log(res.data);
    });
  }, []);

  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const getSearchResults = () => {
    axios
      .post("http://localhost:8000/products", {
        INPUT: searchKeyword,
      })
      .then((res) => {
        setSearchResults(res.data);
      });
  };
  return (
    products && (
      <>
        <nav className="py-3">
          <div className="flex justify-center">
            <div className="input bg-[#75EDD8] h-8 w-96 rounded-xl flex items-center px-3">
              <Search
                width="15"
                className="me-4"
                onClick={() => {
                  getSearchResults();
                }}
              />
              <input
                className="bg-transparent outline-none text-sm"
                placeholder="Search products, brands"
                onChange={handleSearchKeywordChange}
              />
            </div>
          </div>
        </nav>
        <main>
          <div className="grid-cols-4 grid">
            {products["PRODUCTS"].map((item, index) => (
              <ProductCard
                id={item.PRODUCT_ID}
                price={item.PRODUCT_PRICE}
                name={item.PRODUCT_NAME}
                stars={item.PRODUCT_RATING}
                stock={item.NO_OF_SOLD}
                key={index}
              />
            ))}
          </div>
        </main>
      </>
    )
  );
}
