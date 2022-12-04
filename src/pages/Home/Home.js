import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  console.log("rerendering");
  const [products, setProducts] = useState([]);
  //   const [click, setClick] = useState(0);
  //   const [click2, setClick2] = useState(0);
  // async call.

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsonResponse) => {
        console.log("response received");
        // we are changing state of component.
        setProducts(jsonResponse);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-3">
        {/* <h2>{click}</h2>
      <button
        onClick={() => {
          setClick(click + 1);
        }}>
        Click
      </button>
      <h2>{click2}</h2>
      <button
        onClick={() => {
          setClick2(click2 + 1);
        }}>
        Click 2
      </button> */}

        <div className="row">
          {products.map((p, i) => (
            <div className="col-md-3">
              <ProductCard item={p} key={i} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
